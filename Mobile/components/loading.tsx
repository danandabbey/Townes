import { View, Text, ActivityIndicator } from 'react-native';
import styles from '../assets/styles';

const Loading: React.FC<any> | any = () => {
    return (
        <View style={styles.loading} >
            <ActivityIndicator size={'large'} color={styles.loading.color}/>
        </View>
    );
};

export default Loading