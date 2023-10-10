import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';
import Current from './components/current';
import TwelveHour from './components/twelveHours';
import Chart from './components/chart';
import Loading from './components/loading';
import { styles } from './assets/Themes';
import { location } from './util';

export const dataContext = createContext(null)

function App() {

    const cutOff: number = 900;
    const [data, setData]: any = useState<any>(null);
    const [isLoading, setLoading]: any = useState(true);
    const [theme, setTheme]: any = useState('dark');
    const [style, setStyle]: any = useState(styles(theme));
    const [mobile, setMobile]: any = useState(window.innerWidth <= cutOff);

    setTheme(theme);
    setStyle(style);
    useEffect(() => {
            const fetchData: any = async () => {
                const ip = `75.60.166.238`;
                const port: number = 5000;
                const serverURL = `http://${ip}:${port}`;
                const loc: number[] = await location();
                if (loc) {
                    let data = {
                        'lat': loc[0],
                        'lon': loc[1]
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
                                console.error('Error', error.message);
                            }
                        })
                        .then(response => response);
                    resp && setData(resp.data)
                    setLoading(false);
                };
            };
            fetchData();
    }, []);

        useEffect(() => {
        const handleResize = (() => {
            setMobile(window.innerWidth <= cutOff || undefined);
        });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Container className='app' style={style.app}>
            {isLoading ? <Loading /> : null}
            {!isLoading && data ?
                mobile?(
                <dataContext.Provider value={data}>
                    <Current />
                    <TwelveHour />
                </dataContext.Provider>
                )
                : (
                <dataContext.Provider value={data}>
                    <Current />
                    <Chart/>
                    <TwelveHour />
                </dataContext.Provider>
                ): null}
        </Container>
    );
};

export default App;