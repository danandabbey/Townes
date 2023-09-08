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
    const background = (appearance === 'dark') ? '#000000' : '#DCD7C9';

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
        app: {
            flex: 1,
            backgroundColor: background,
            alignItems: 'center',
            justifyContent: 'center',
            padding: padding.md
        },
        text: {
            fontSize: fontSize.md,
            textAlign: 'center',
            margin: margin.sm,
        },
        loading: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            color: color,

            ...developmentStyle
        },
        statusBar: {
            backgroundColor: color,
        },

        /*-------------Calendar-----------------*/

        calendar: {
            flex: 1,
            color: color,
            fontSize: fontSize.md,
            textAlign: 'center',
            margin: margin.md,
            padding: padding.md,

            ...developmentStyle
        },

        /*-------------Weather-----------------*/

        weather: {
            flex: 1,
            color: color,
            fontSize: fontSize.md,
            textAlign: 'center',
            margin: margin.md,
        },
    });
};

const styles = style();
export default styles;