import { useContext, useState } from 'react';
import { StyleContext } from './context';
import { dataContext } from '../index';
import { Stack, Container, Typography } from '@mui/material';


let Forecast = ((props: any) => {

    const dayName = props.name
    const dayTemp = `${props.temp}\u00b0 F`
    const dayPrecipitation = `${props.precipitation}% chance`
    const nightName = props.name + ' Night'
    const nightTemp = `${props.nightTemp}\u00b0 F`
    const nightPrecipitation = `${props.nightPrecipitation}% chance`

    const style: any = useContext(StyleContext);
    const [name, setName] = useState(dayName);
    const [temp, setTemp] = useState(dayTemp)
    const [precipitation, setPrecipitation] = useState(dayPrecipitation);

    const handle = () => { 
        name === dayName ?
            setName(nightName) : setName(dayName)
        temp === dayTemp ?
            setTemp(nightTemp) : setTemp(dayTemp)
        precipitation === dayPrecipitation ?
            setPrecipitation(nightPrecipitation) : setPrecipitation(dayPrecipitation);
    }
    return (
        <Stack onClick={handle} spacing={2} direction='column' className='forecast' style={style.forecast}>
            <Typography variant='h3' style={style.forecastName}>{name}</Typography>
            <Typography variant='h5'>{temp}</Typography>
            {
                precipitation === props.precipitation ?
                    props.precipitation ?
                        <Typography variant='h5'>{precipitation}</Typography> : null
                    : props.nighPrecipitation ?
                        <Typography variant='h5'>{precipitation}</Typography> : null
            }
        </Stack>
    );
});

const TwelveHour = (() => {
    const style: any = useContext(StyleContext);
    const data: any = useContext(dataContext);
    console.log(data);
    const twelveHourData: any = data.twelveHour;
    const first = twelveHourData.findIndex((obj: any) => obj.isDayTime === true);
    const ten = twelveHourData.slice(first, 15);

    return (
        <Container className={'twelveHour'} style={style.twelveHour} >
            <Forecast name={ten[0].name} temp={ten[0].temp} precipitation={ten[0].precipitation} nightTemp={ten[1].temp} nightPrecipitation={ten[1].precipitation} />
            <Forecast name={ten[2].name} temp={ten[2].temp} precipitation={ten[2].precipitation} nightTemp={ten[3].temp} nightPrecipitation={ten[3].precipitation} />
            <Forecast name={ten[4].name} temp={ten[4].temp} precipitation={ten[4].precipitation} nightTemp={ten[5].temp} nightPrecipitation={ten[5].precipitation} />
            <Forecast name={ten[6].name} temp={ten[6].temp} precipitation={ten[6].precipitation} nightTemp={ten[7].temp} nightPrecipitation={ten[7].precipitation} />
            <Forecast name={ten[8].name} temp={ten[8].temp} precipitation={ten[8].precipitation} nightTemp={ten[9].temp} nightPrecipitation={ten[9].precipitation} />
        </Container>
    );
});

export default TwelveHour;
