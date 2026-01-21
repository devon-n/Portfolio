import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeType } from '../types';

interface IdentityContextProps {
    identity: ThemeType;
    setIdentity: (identity: ThemeType) => void;
}

const IdentityContext = createContext<IdentityContextProps | undefined>(undefined);

export const IdentityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Standard: Use Enum values for state initialization
    const [identity, setIdentityState] = useState<ThemeType>(ThemeType.Architect);

    useEffect(() => {
        const savedIdentity = localStorage.getItem('user-identity');
        if (savedIdentity) {
            // Mapping legacy identities to new Enum values if necessary
            if (savedIdentity === 'cyber') {
                setIdentity(ThemeType.Matrix);
            } else if (savedIdentity === 'minimalist') {
                setIdentity(ThemeType.Architect);
            } else {
                setIdentityState(savedIdentity as ThemeType);
            }
        }
    }, []);

    const setIdentity = (newIdentity: ThemeType) => {
        setIdentityState(newIdentity);
        localStorage.setItem('user-identity', newIdentity);
    };

    useEffect(() => {
        // Remove all theme classes including legacy ones
        document.documentElement.classList.remove(
            'theme-architect',
            'theme-neural',
            'theme-cyber',
            'theme-minimalist',
            'theme-matrix'
        );

        // Add the current theme class derived from the Enum value
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
