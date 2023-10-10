/**********************************************************************

A simple line chart for displaying the change in data over time.
Currently displays 12 hours of data.

things to do:
    
    *possibly add more data options

    *optimize its appearance for mobile use

**********************************************************************/

import { useState, useEffect, useContext} from 'react'
import { Line } from 'react-chartjs-2';
import { styles } from '../assets/Themes';
import { dataContext } from '../index';
import { Stack, Container, Typography } from '@mui/material'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const cutOff: number = 900;
const [theme, setTheme]: any = useState('dark');
const [style, setStyle]: any = useState(styles(theme));
const [mobile, setMobile]: any = useState(window.innerWidth <= cutOff);
setStyle(style)
setTheme(theme)
setMobile(mobile)
    
/**********************************************************************

Buttons that control the chart view

**********************************************************************/
    
const ChartButtons = ((props: any) => {
    return (
        <Stack spacing={2} direction='row' style={style.chartBtnCon}>
            <Typography variant='h6' style={style.chartBtn} onClick={props.temperature}>Temperature</Typography>
            <Typography variant='h6' style={style.chartBtn} onClick={props.precipitation}>Precipitation</Typography >
            <Typography variant='h6' style={style.chartBtn} onClick={props.humidity}>Humidity</Typography>
        </Stack>
    );
});

/**********************************************************************/

const LineChart = ((props: any) => {
    let titleSize: number = mobile ? 30 : 40;
    let fontSize: number = mobile ? 15 : 20;
    const options = {
        responsive: true,
        layout: {
            autoPadding: true
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: props.title,
                font: {
                    size: titleSize
                },
                padding: 20,
                color: style.app.color
            }
        },
        scales: {
            x: {
                grid: {
                    color: style.app.color,
                    font: {
                        size: fontSize
                    }
                },
                ticks: {
                    color: style.app.color,
                    font: {
                        size: fontSize
                    }
                },
            },
            y: {
                grid: {
                    color: style.app.color,
                    font: {
                        size: fontSize
                    }
                },
                ticks: {
                    color: style.app.color,
                    font: {
                        size: fontSize
                    }
                },
            },
        },
        elements: {
            point: {
                backgroundColor: style.app.color,
            },
            line: {
                borderColor: style.app.color,
            },
        },
    };
    const data = {
        labels: props.time,
        datasets: [{
            label: 'Time',
            data: props.data,
            borderColor: style.app.color,
            tension: .5
        }]
    };
    return (
        <Line style={style.chart} data={data} options={options} />
    )
});

/**********************************************************************/

const Chart = (() => {
    const data: any = useContext(dataContext);
    const [currentChart, setCurrentData]: any = useState({});
    const time: any = data.chart.time;
    const chart: any = data.chart.chart;

    interface chart {
        id: number,
        title: string,
        data: any
    };

    const find = ((key: any) => {
        const charts: chart[] = [
            { id: 1, title: 'Temperature', data: chart.temp },
            { id: 2, title: 'Chance of Precipitation', data: chart.precipitation },
            { id: 3, title: 'Humidity', data: chart.humidity }
        ];
        let object: any = charts.find((obj) => obj.id === key)
        return object.data;
    });

    const temperature: any = (() => setCurrentData(find(1)));
    const precipitation: any = (() => setCurrentData(find(2)));
    const humidity: any = (() => setCurrentData(find(3)));

    useEffect(() => {
        temperature();
    }, [data.chart]);

    return (
        <Container style={style.chartCon}>
            <Stack spacing={2} direction='column' style={style.media} className='media'>
                < LineChart time={time} title={currentChart.title} data={currentChart.data} />
                <ChartButtons temperature={temperature} precipitation={precipitation} humidity={humidity} />
            </Stack>
        </Container>
    );
});

export default Chart;

