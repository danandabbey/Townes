import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import weatherStyles from '../../assets/weatherStyles';

const TwelveHour: React.FC<any> = ((props: any) => {

    let Forecast: React.FC<any> = ((props: any) => {
        const {name, temp, precipitation} = props;
        return (
            <View style={weatherStyles.forecast}>
                <Text >{name}</Text>
                <Text >{temp}</Text>
                <Text >{precipitation}</Text>
            </View>
        );
    });
    const data = props.data;
    const twelveHourData: any = data.twelveHour;

    const isDay = twelveHourData.filter((obj: any) => obj.isDayTime === true);
    const five = isDay.slice(0, 5);
    return (
        <View style={weatherStyles.twelveHour} >
            {five?.map((prop: any) => {
                const {name, temp, precipitation} = prop
                const temperature = `${temp}\u00b0 F`;
                const rain = `precipitation: ${precipitation}%`;
                return <Forecast key={Math.random()} name={name} temp={temperature} precipitation={rain} />
            })}
        </View>
    );
});

export default TwelveHour;