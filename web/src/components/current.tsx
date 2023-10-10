import { useState, useEffect, useContext } from 'react';
import { styles } from '../assets/Themes';
import { dataContext } from '../index';
import { Typography, Stack, Divider, Container } from '@mui/material';

const Current = (() => {
    const data: any = useContext(dataContext);
    const [theme, setTheme]: any = useState('dark');
    const [style, setStyle]: any = useState(styles(theme));
    setStyle(style);
    setTheme(theme)
    const [currentData, setCurrentData] = useState(data.current);
    useEffect(() => {
        setCurrentData(data.current);
    }, [data]);
    try {
        const desc = currentData.description;
        const temp = `${currentData.temp}\u00b0F`;
        const precipitation = `${currentData.precipitation}% chance`;
        const humidity = `Humidity: ${currentData.humidity}%`;
        const wind = `Wind: ${currentData.windDirection} ${currentData.windSpeed}`;
        const city = currentData.city;
        const state = currentData.state;
        return (
            <Stack spacing={4} direction='column' className='current' style={style.current}>
                <Container>
                    <Typography variant='h2' style={style.currentTitle} className='name'>{city}, {state}</Typography>
                </Container>
                <Divider />
                <Container>
                    <Typography variant='h4'>{desc}</Typography>
                    <Typography variant='h4'>{precipitation}</Typography>
                    <Typography variant='h4'>{temp}</Typography>
                </Container>
                <Divider />
                <Container>
                    <Typography variant='h5'>{humidity}</Typography>
                    <Typography variant='h5'>{wind}</Typography>
                </Container>
            </Stack>
        );
    } catch (error) {
        console.log(error)
    }
});

export default Current;   