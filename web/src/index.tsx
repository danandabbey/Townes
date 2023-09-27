import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';
import Current from './components/current';
import TwelveHour from './components/twelveHours';
import Chart from './components/chart';
import Loading from './components/loading';
import { StyleContext } from './components/context';
import { location } from './util';

export const dataContext = createContext(null);

function App() {

    const [data, setData]: any = useState<any>(null);
    const [isLoading, setLoading]: any = useState(true);
    const style: any = useContext(StyleContext);

    useEffect(() => {
            const fetchData: any = async () => {
                const ip = `192.168.86.38`;
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

    return (
        <Container className='app' style={style.app}>
            {isLoading ? <Loading /> : null}
            {!isLoading && data ? (
                <dataContext.Provider value={data}>
                    <Current />
                    <Chart/>
                    <TwelveHour />
                </dataContext.Provider>
            ) : null}
        </Container>
    );
};

export default App;