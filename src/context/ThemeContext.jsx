import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({ theme: 'light', setTheme: (() => {}) });

export const ThemeProvider: React.FC<{}> = ({ children }) => {
    const [theme, setTheme] = useState('light');

    return <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>;
};
