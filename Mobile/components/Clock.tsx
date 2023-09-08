import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles';

const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [useSeconds, setSeconds] = useState<boolean>(false);
  const [time, setTime] = useState<string | undefined>(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const now =  (seconds: boolean) => {
      return date?.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: seconds ? "2-digit" : undefined
      })
    };
    setTime(now(useSeconds));
  }, [date]);

  return (
    <View style={styles.app}>
      <Text onPress={() => setSeconds(!useSeconds)} style={styles.text}>{time}</Text>
    </View>
  );
};

const Timer: React.FC = () => {
  const [time, setTime] = useState<Date | number | undefined>(undefined)
  return (
    <View style={styles.app}>

      
      <Text/>
    </View>
  );
};


export {Timer, Clock};