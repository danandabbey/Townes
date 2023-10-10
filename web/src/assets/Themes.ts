

let isMobile:boolean = window.innerWidth <= 900

const styles = ((theme: any) => {
    let x: any = {
        blackAndWhite: {
            color: '#000',
            background: '#fff'
        },
        dark: {
            color: '#A27B5C',
            background: '#2C3639'
        },
        light: {
            color: '#DCD7C9',
            background: '#3F4E4F'
        }
    };
    const color: string = x[theme].color
    const background: string = x[theme].background
    const mobile: any = ((m: any, d: any) => isMobile ? m : d)

    return {
        app: {
            'color': color,
            'backgroundColor': background,
            'fontSize': mobile('1.2em', '1.3em'),

        },
        chart: {
            'borderTop': `solid ${color} .1em`,
            'borderBottom': `solid ${color} .1em`,
            'paddingLeft': '.5em',
        },
        current: {
            'gap': '.2em',
            'padding': '2em',
            'letterSpacing': '.1px',
            'display': 'flex',
            'flexDirection': 'column',
            'justifySelf': 'center',
            'alignItems': 'center',
            'textAlign': 'center'
        },
        currentTitle: {
            'fontSize': '2em'
        },
        chartCon: {
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'center'
        },
        chartBtn: {
            'border': '1px solid',
            'borderRadius': '5px',
            'fontSize': '1em',
            'color': color,
            'padding': '.3em'
        },
        chartBtnCon: {
            'gap': mobile('1em', '5em'),
            'paddingTop': '1em',
            'paddingBottom': '5em',
            'display': 'flex',
            'flexDirection': 'row',
            'flexWrap': 'wrap',
            'justifyContent': 'center'
        },
        forecast: {
            'Width': mobile('4em', '10em'),
            'Height': mobile('4em', '10em'),
            'gap': '.5em',
            'padding': mobile('1.5em', '2em'),
            'display': 'flex',
            'flexDirection': 'column',
            'alignItems': 'center',
            'justifyContent': 'center',
            'textAlign': 'center',
        },
        forecastName: {
            'fontSize': mobile('1.6em', '1.5em')
        },
        media: {
            'width': mobile("100%", "70%"),
            'display': 'flex',
            'flexDirection': 'column'
        },
        twelveHour: {
            'gap': '2em',
            'paddingTop': '2em',
            'paddingBottom': '2em',
            'alignItems': 'center',
            'justifyContent': 'center',
            'display': 'flex',
            'flexWrap': 'wrap'
        },
    };
});

export { styles };