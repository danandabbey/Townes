import * as Location from 'expo-location';

class Coordinates {
    latitude: number;
    longitude: number;
    constructor(latitude:number, longitude:number) { 
        this.latitude = latitude
        this.longitude = longitude
    }
};

const getLocation = async () => {
    try {
        const currentLocation = await Location.getCurrentPositionAsync();
        return new Coordinates(currentLocation.coords.latitude, currentLocation.coords.longitude);
        
    } catch (error) {
        console.error('Error getting location:', error);
        return null;
    }
};

const requestLocation = async () => {
    try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        return status;
    } catch (error) {
        console.error('Error requesting location permission:',error);
        return null;
    }
};

const useLocation = async () => {
    try {
        const locationPermission = await requestLocation();
        if (locationPermission === 'granted') {
            const loc = await getLocation();
            return loc? loc:null;
        } else {
            console.warn('Location permission not granted.');
            return null;
        };
    } catch (error) {
        console.error('Error using location:', error);
        return null;
    };
};

export default useLocation;