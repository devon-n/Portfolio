import React from 'react';
import { useIdentity } from '../context/IdentityContext';
import { ThemeType } from '../types';
import { HiChip } from 'react-icons/hi';
import { MdOutlineArchitecture, MdLensBlur } from 'react-icons/md';

const identities: { id: ThemeType; name: string; icon: any }[] = [
    { id: 'architect', name: 'Architect', icon: MdOutlineArchitecture },
    { id: 'neural', name: 'Neural Network', icon: MdLensBlur },
    { id: 'matrix', name: 'Matrix', icon: HiChip },
];


const IdentitySwitcher: React.FC = () => {
    const { identity, setIdentity } = useIdentity();

    return (
        <div className="fixed bottom-10 right-10 flex flex-col gap-3 p-3 glass-card rounded-full shadow-2xl z-50 transition-all hover:scale-105">
            {identities.map(({ id, name, icon: Icon }) => (
                <button
                    key={id}
                    onClick={() => setIdentity(id)}
                    className={`p-3 rounded-full transition-all duration-300 group relative ${identity === id
                        ? 'bg-primary text-background'
                        : 'text-primary hover:bg-primary/20'
                        }`}
                    title={name}
                >
                    <Icon className="text-2xl" />

                    {/* Tooltip */}
                    <span className="absolute right-full mr-4 px-3 py-1 bg-surface border border-border rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                        {name} Identity
                    </span>
                </button>
            ))}
        </div>
    );
};

export default IdentitySwitcher;
