import { useState, useEffect, createContext } from 'react';
import { styles } from '../assets/Themes.js';

export const MobileContext = createContext({});
export const StyleContext = createContext({});

export const GlobalContextProvider = ((props:any) => {
    const [theme, setTheme]: any = useState('dark');
    const [style, setStyle]: any = useState(styles(theme));

    useEffect(() => {
        setStyle(styles(theme));
    }, [theme]);

    useEffect(() => {
        const preferredDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(preferredDarkTheme ? 'dark' : 'light');
    }, []);


    return (
            <StyleContext.Provider value={style}>
                {props.children}
            </StyleContext.Provider>
    );
});
