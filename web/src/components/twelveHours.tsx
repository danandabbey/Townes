import { useContext, useState } from 'react';
import { styles } from '../assets/Themes';
import { dataContext } from '../index';
import { Stack, Container, Typography } from '@mui/material';


let Forecast = ((props: any) => {

    const dayName = props.name
    const dayTemp = `${props.temp}\u00b0F`
    const dayPrecipitation = `${props.precipitation}% chance`
    //const nightName = props.name + ' Night'
    //const nightTemp = `${props.nightTemp}\u00b0 F`
    //const nightPrecipitation = `${props.nightPrecipitation}% chance`

    const [theme, setTheme]: any = useState('dark');
    const [style, setStyle]: any = useState(styles(theme));
    const [name, setName] = useState(dayName);
    const [temp, setTemp] = useState(dayTemp)
    const [precipitation, setPrecipitation] = useState(dayPrecipitation);


    
    
    return (
        <Stack  spacing={2} direction='column' className='forecast' style={style.forecast}>
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
    const [theme, setTheme]: any = useState('dark');
    const [style, setStyle]: any = useState(styles(theme));
    const data: any = useContext(dataContext);
    console.log(data);
    const twelveHourData: any = data.twelveHour;
    const first = twelveHourData.findIndex((obj: any) => obj.isDayTime === true);
    const ten = twelveHourData.slice(first, 15);
    console.log(ten)

    return (
        <Container className={'twelveHour'} style={style.twelveHour} >
            <Forecast style={style.forecast} name={ten[0].name} temp={ten[0].temp} precipitation={ten[0].precipitation} nightTemp={ten[1].temp} nightPrecipitation={ten[1].precipitation} />
            <Forecast style={style.forecast} name={ten[2].name} temp={ten[2].temp} precipitation={ten[2].precipitation} nightTemp={ten[3].temp} nightPrecipitation={ten[3].precipitation} />
            <Forecast style={style.forecast} name={ten[4].name} temp={ten[4].temp} precipitation={ten[4].precipitation} nightTemp={ten[5].temp} nightPrecipitation={ten[5].precipitation} />
            <Forecast style={style.forecast} name={ten[6].name} temp={ten[6].temp} precipitation={ten[6].precipitation} nightTemp={ten[7].temp} nightPrecipitation={ten[7].precipitation} />
            <Forecast style={style.forecast} name={ten[8].name} temp={ten[8].temp} precipitation={ten[8].precipitation} nightTemp={ten[9]?.temp} nightPrecipitation={ten[9]?.precipitation} />
        </Container>
    );
});

export default TwelveHour;
