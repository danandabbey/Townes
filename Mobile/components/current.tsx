import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import weatherStyles from '../assets/weatherStyles';
import Loading from './loading';


interface Data {
    current: any,
    twelveHour:any
};

interface CurrentProps {
    data:Data
};

const Current: React.FC<CurrentProps> = ({ data }) => {
    const [currentData, setCurrentData] = useState<any>(undefined);
    
    const toFahrenheit = (num: number): number => num * 1.8 + 32;
    const setGreeting = () => {
        const time = (new Date()).getHours();
        if (time < 12) {
            return 'Good Morning';
        } else if (time < 17) {
            return 'Good Afternoon';
        } else {
            return 'Good Evening';
        }
    };

    useEffect(() => {
        currentData && setCurrentData(data.current);
    }, [data]);

    if (currentData) {
        const {
            city,
            temp,
            state,
            humidity,
            windSpeed,
            dayHigh,
            dayLow,
            isDayTime,
            description,
            precipitation,
            windDirection,
            longDescription,
            temperatureUnit,
        } = currentData;
        const {
            current,
            greeting,
            top,
            greetingValue,
            currentlyIn,
            locationCon,
            location,
            main,
            value,
            temperature,
            maxTemp,
            currentTemp,
            minTemp,
            bottom,
        } = weatherStyles
        return (
            <View style={current}>
                <View id='top' style={top} >
                    <View style={greeting}>
                        <Text style={greetingValue}>{setGreeting()}</Text>
                        <Text style={currentlyIn}>currently in</Text>
                    </View>
                    <View style={locationCon}>
                        <Text style={location}>{city}</Text>
                        <Text style={location}>{state}</Text>
                    </View>
                </View>
                <View id='main' style={main}>
                    {longDescription ?
                        <Text style={value}>{longDescription}</Text>
                        : <Text style={value}>{description}</Text>
                    }
                    <View style={temperature} >
                        <Text style={maxTemp}>{`H: ${Math.round(toFahrenheit(dayHigh))}`}</Text>
                        <Text style={currentTemp}>{`${temp}°${temperatureUnit}`}</Text>
                        <Text style={minTemp}>{`L: ${Math.round(toFahrenheit(dayLow))}`}</Text>
                    </View>
                    {precipitation ?
                        <Text style={value}>{`Precipitation: ${precipitation}%`}</Text>
                        : <Text style={value}>{`Precipitation: none`}</Text>
                    }
                </View>
                <View id='bottom' style={bottom}>
                    {humidity ?
                        <Text style={value}>{`Humidity : ${humidity}%`}</Text>
                        : null
                    }
                    {windSpeed ?
                        <Text style={value}>{`Wind: ${windDirection} ${windSpeed}`}</Text>
                        : null
                    }
                </View>
            </View>
        )
    }
};

export default Current;