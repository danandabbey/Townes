import React, { useState, useEffect, createContext } from 'react';
import { View, StatusBar } from 'react-native';
import axios, { AxiosResponse, AxiosError } from 'axios';
import useLocation from './data/location';
import styles from './assets/styles';
import { Calendar, Today } from './components/Calendar';
import Loading from './components/loading';
import Current from './components/current';
import TwelveHour from './components/twelveHour';

interface WeatherProps {
    location: any;
};

const fetchData: any = async (location: any) => {
  const ip = `192.168.86.38`
  const port: number = 5000;
  const serverURL = `http://${ip}:${port}`
  let data = {
    'lat': location.latitude,
    'lon': location.longitude
  };
  const resp: any = await axios.post(`${serverURL}/weather`, data)
    .catch((error) => {
      if (error.response) {
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error(error.message);
      }
    })
    .then(response => response);
  return resp.data;
};

const App: React.FC<any> = () => {

  const [hide, hideStatusBar] = useState<boolean>(false);
  const [currentView, setView] = useState<React.ReactNode | null>(<Loading/>);
  const [weatherData, setWeatherData] = useState<any>(undefined);
  const [location, setLocation] = useState<any>(undefined);

  useEffect(() => {
    useLocation()
      .then(location =>
        fetchData(location))
      .then((data: any) => {
        setWeatherData(data)
        setView(<Current data={data} />)
      });
  }, []);

  useEffect(() => {
    console.log(currentView)
  }, [currentView]);

  const { app, statusBar } = styles

  return (
    <View style={app}>
      <StatusBar
        animated={true}
        backgroundColor={statusBar.backgroundColor}
        showHideTransition={'fade'}
        hidden={hide}
      />
      {
        currentView
      }
    </View>
  );
};

export default App;