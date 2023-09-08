import { StyleSheet, Appearance } from 'react-native';

const development = false;

const padding = {
    sm: 12,
    md: 15,
    lg: 20
};

const fontSize = {
    sm: 12,
    md: 20,
    lg: 32
};

const margin = {
    sm: 5,
    md: 10,
    lg: 20
};

const style = () => {

    const appearance = Appearance.getColorScheme();
    const color = (appearance === 'dark') ? '#000000' : '#3F4E4F';

    const dev = () => {
        if (development) {
            return {
                borderColor: color,
                borderWidth: 1,
                borderRadius: 5,
            }
        }
        return {};
    };
    const developmentStyle = dev();
    
    return StyleSheet.create({
        current: {
            marginTop: 30,
            flex: 1,
            color: color,
            fontSize: fontSize.md,
            textAlign: 'center',
            margin: margin.md,
            flexDirection: 'column',
            padding: padding.md,

            ...developmentStyle
        },
        twelveHour: {},
        forecast: {},
        top: {
            flex: .5,
            flexDirection: 'column',
            padding: padding.md,

            ...developmentStyle
        },
        greeting: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: padding.md,
            
            ...developmentStyle
        },
        greetingValue: {
            fontSize: fontSize.lg,
            padding: padding.sm,

            ...developmentStyle
        },
        currentlyIn: {
            fontSize: fontSize.sm,

            ...developmentStyle
        },
        locationCon: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

            ...developmentStyle
        },
        location: {
            textAlign: 'center',
            fontSize: fontSize.lg,

            ...developmentStyle
        },
        main: {
            flex: 1,
            flexDirection: 'column',
            textAlign: 'center',
            fontSize: fontSize.md,
            margin: margin.lg,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,

            ...developmentStyle
        },
        bottom: {
            flex: .5,
            textAlign: 'center',
            fontSize: fontSize.md,
            padding: padding.md,
            justifyContent: 'center',
            alignItems: 'center',

            ...developmentStyle
        },
        temperature: {
            flexDirection: 'row',
            gap: 30,
        },
        currentTemp: {
            textAlign: 'center',
            fontSize: fontSize.md,
            padding: padding.sm,
            fontWeight: 'bold',
        },
        maxTemp: {
            textAlign: 'center',
            fontSize: fontSize.md,
            padding: padding.sm,

            ...developmentStyle
        },
        minTemp: {
            textAlign: 'center',
            fontSize: fontSize.md,
            padding: padding.sm,

            ...developmentStyle
        },
        value: {
            textAlign: 'center',
            fontSize: fontSize.md,
            padding: padding.sm,

            ...developmentStyle
        }
    });
};

const weatherStyles = style();
export default weatherStyles;