import React from 'react';
import { useIdentity } from '../context/IdentityContext';
import { ThemeType } from '../types';
import { HiLightningBolt, HiChip } from 'react-icons/hi';
import { GiAbstract050 } from 'react-icons/gi';
import { MdOutlineArchitecture, MdLensBlur } from 'react-icons/md';

const identities: { id: ThemeType; name: string; icon: any }[] = [
    { id: 'architect', name: 'Architect', icon: MdOutlineArchitecture },
    { id: 'neural', name: 'Neural', icon: MdLensBlur },
    { id: 'cyber', name: 'Cyber', icon: HiChip },
    { id: 'minimalist', name: 'Minimalist', icon: GiAbstract050 },
];

const IdentitySwitcher: React.FC = () => {
    const { identity, setIdentity } = useIdentity();

    return (
        <div className="fixed bottom-10 right-10 flex flex-col gap-3 p-3 glass-card rounded-full shadow-2xl z-50 transition-all hover:scale-105">
            {identities.map((item) => (
                <button
                    key={item.id}
                    onClick={() => setIdentity(item.id)}
                    className={`p-3 rounded-full transition-all duration-300 group relative ${identity === item.id
                            ? 'bg-primary text-background'
                            : 'text-primary hover:bg-primary/20'
                        }`}
                    title={item.name}
                >
                    <item.icon className="text-2xl" />

                    {/* Tooltip */}
                    <span className="absolute right-full mr-4 px-3 py-1 bg-surface border border-border rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                        {item.name} Identity
                    </span>
                </button>
            ))}
        </div>
    );
};

export default IdentitySwitcher;
