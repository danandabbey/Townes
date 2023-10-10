import express from 'express';
import bodyParser from 'body-parser';
import getData from './data/weather/call';

const server = () => {
    try {
        const app = express();
        const ip = `75.60.166.238`
        const allIps = '0.0.0.0';
        const port: number = 5000;
        app.use(bodyParser.json());
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, POST'); // Add allowed HTTP methods
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            next();
        });
        app.post('/weather', async (req: any, res: any) => {
            try {
                req.body ? console.log('working') : null;
                const weatherData = await getData(await req.body);
                res.send(await weatherData);
            } catch (error) {
                console.error(error);
            };
        });
        app.listen(port, allIps, () => {
            console.log(`server is listening on port ${port}`);
        });
    } catch (error) {
        console.error(error);
    };
};

server();