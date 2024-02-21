import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({ theme: 'light', setTheme: (() => {}), buttonPress: false, setButtonPress: (() => {}) });

export const ThemeProvider: React.FC<{}> = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [buttonPress, setButtonPress] = useState(false);

    return  <ThemeContext.Provider value={{ theme, setTheme, buttonPress, setButtonPress }}>
        {children}
    </ThemeContext.Provider>;
};
