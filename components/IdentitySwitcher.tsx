import React from 'react';
import { useIdentity } from '../context/IdentityContext';
import { ThemeType } from '../types';
import { IDENTITIES } from '../data/identities';
import { IconType } from 'react-icons';

const IdentitySwitcher: React.FC = () => {
    const { identity, setIdentity } = useIdentity();

    return (
        <div className="fixed bottom-10 right-10 flex flex-col gap-3 p-3 glass-card rounded-full shadow-2xl z-50 transition-all hover:scale-105 border border-primary/20 bg-background/80 backdrop-blur-md">
            {IDENTITIES.map(({ id, name, icon: Icon }) => (
                <button
                    key={id}
                    onClick={() => setIdentity(id)}
                    className={`p-3 rounded-full transition-all duration-300 group relative ${identity === id
                        ? 'bg-primary text-background shadow-lg shadow-primary/20'
                        : 'text-primary hover:bg-primary/20'
                        }`}
                    title={`${name} Identity`}
                >
                    <Icon className="text-2xl" />

                    {/* Tooltip */}
                    <span className="absolute right-full mr-4 px-3 py-1 bg-surface border border-border rounded-lg text-xs font-bold font-mono uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl text-primary">
                        {name} Identity
                    </span>
                </button>
            ))}
        </div>
    );
};

export default IdentitySwitcher;
