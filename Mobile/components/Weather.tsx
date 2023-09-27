import { useState, useEffect } from 'react';
import { View } from 'react-native';
import axios, { AxiosResponse, AxiosError } from 'axios';
import styles from '../assets/styles';
import Current from './current';
import TwelveHour from './twelveHour';
import Loading from './loading';

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

const Weather: React.FC<WeatherProps> = ({ location }): any => {
    const [weatherData, setWeatherData] = useState<any>(undefined);
    
    useEffect(() => {
        fetchData(location)
            .then((data: any) => {
                setWeatherData(data)
            })
    }, [location]);
    
    return (
        <View style={styles.weather}>
            {weatherData ? <Current data={weatherData} /> : <Loading/>}
        </View>
    )
};

export default Weather;