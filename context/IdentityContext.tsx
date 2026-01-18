import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeType } from '../types';

interface IdentityContextProps {
    identity: ThemeType;
    setIdentity: (identity: ThemeType) => void;
}

const IdentityContext = createContext<IdentityContextProps | undefined>(undefined);

export const IdentityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [identity, setIdentityState] = useState<ThemeType>('architect');

    useEffect(() => {
        const savedIdentity = localStorage.getItem('user-identity') as ThemeType;
        if (savedIdentity) {
            setIdentityState(savedIdentity);
        }
    }, []);

    const setIdentity = (newIdentity: ThemeType) => {
        setIdentityState(newIdentity);
        localStorage.setItem('user-identity', newIdentity);
    };

    useEffect(() => {
        // Remove all theme classes
        const themeClasses = ['theme-architect', 'theme-neural', 'theme-cyber', 'theme-minimalist'];
        document.documentElement.classList.remove(...themeClasses);

        // Add the current theme class
        document.documentElement.classList.add(`theme-${identity}`);
    }, [identity]);

    return (
        <IdentityContext.Provider value={{ identity, setIdentity }}>
            {children}
        </IdentityContext.Provider>
    );
};

export const useIdentity = () => {
    const context = useContext(IdentityContext);
    if (!context) {
        throw new Error('useIdentity must be used within an IdentityProvider');
    }
    return context;
};
