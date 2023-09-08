import React, { useState, useEffect, createContext } from 'react';
import { View, StatusBar } from 'react-native';
import useLocation from './data/location';
import Weather from './components/Weather';
import styles from './assets/styles';
import { Calendar, Today } from './components/Calendar';
import Loading from './components/loading';

const App: React.FC<any> = () => {

  const [hide, hideStatusBar] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<React.ReactNode | null>(<Loading/>);

  useEffect(() => {
    const location = async () => {
      const loc = await useLocation()
      loc? setCurrentView(<Weather location={loc}/>):null;
    };
    location();
  }, []);

  const {app, statusBar } = styles

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