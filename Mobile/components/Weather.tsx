import { useState, useEffect } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import styles from '../assets/styles';
import Current from './weather/current';
import TwelveHour from './weather/twelveHour';

interface WeatherProps {
    location: any;
};

const Weather: React.FC<WeatherProps> = ({ location }) => {
    const [weatherData, setWeatherData] = useState<any>(undefined);

    useEffect(() => {
        const port: number = 5000;
        const serverURL = `http://localhost:${port}`
        let loc = {
            'lat': location.latitude,
            'lon': location.longitude
        };
        console.log(loc);

        const fetchData: any = async () => {
            const resp: any = await axios.post(`${serverURL}/weather`, loc)
                .then(response => response)
                .catch((error) => {
                    if (error.response) {
                        console.error('response.data:' + error.response.data);
                        console.error('response.status:' + error.response.status);
                        console.error('response.headers:' + error.response.headers);
                    } else if (error.request) {
                        console.error('response.request:' + error.request);
                    } else {
                        console.error('Error', error.message);
                    }
                });
            resp ? console.log(resp) : null;
            resp.data ? setWeatherData(resp.data) : null;
        };
        fetchData();
    }, [location]);

    return (
        <View style={styles.weather}>
            {weatherData?<Current data={weatherData} />:null}
        </View>
    )
};

export default Weather;