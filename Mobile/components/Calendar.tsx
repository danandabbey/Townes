import { useState } from 'react';
import { Text, View, Animated, ScrollView } from 'react-native';
import styles from '../assets/styles';

/*

interface Month{
    name: string;
    id: number;
    numDays: number
}

const Year: Month[] = [
    { id: 1, name: 'January', numDays: 31 },
    { id: 2, name: 'February', numDays: 28 }, // Update for leap years
    { id: 3, name: 'March', numDays: 31 },
    { id: 4, name: 'April', numDays: 30 },
    { id: 5, name: 'May', numDays: 31 },
    { id: 6, name: 'June', numDays: 30 },
    { id: 7, name: 'July', numDays: 31 },
    { id: 8, name: 'August', numDays: 31 },
    { id: 9, name: 'September', numDays: 30 },
    { id: 10, name: 'October', numDays: 31 },
    { id: 11, name: 'November', numDays: 30 },
    { id: 12, name: 'December', numDays: 31 }
];

const DateInput: React.FC = (props: any) => {
    const [textPresent, setText] = useState<any>(false);
    const [value, setValue] = useState<any>(null);
    return (
        <View>

        </View>
    )
};

const Month: React.FC = (props: any) => {
    return (
        <View>
            <Text id='monthName'></Text>
        </View>
    )
};

const NextTwelveMonths: React.FC = (props: any) => {
    return (
        <View>
            <Text></Text>
        </View>
    )
};

*/

const Today: React.FC = (props: any) => {
    const [date, setDate] = useState(new Date());
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday'];
    
    const dayOfWeek = days[date.getDay()]
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    return (
        <View style={styles.app}>
            <Text style={styles.text}>{dayOfWeek}</Text>
            <Text style={styles.text}>{`${month} ${dayOfMonth}, ${year}`}</Text>
        </View>
    )
};

const Calendar: React.FC = (props: any) => {
    const [date, setDate] = useState(new Date());
    const [view, setView] = useState<any>(<Today />);
    return (
        <View style={styles.calendar}>
            {view}
        </View>
    )
};

export { Calendar, Today };

