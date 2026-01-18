import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface TickerProps {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
    duration?: number;
}

const StatCounter: React.FC<TickerProps> = ({ value, label, prefix = "", suffix = "", duration = 2 }) => {
    const springValue = useSpring(0, { stiffness: 50, damping: 30 });
    const displayValue = useTransform(springValue, (latest) =>
        Math.floor(latest).toLocaleString()
    );

    useEffect(() => {
        springValue.set(value);
    }, [value, springValue]);

    return (
        <div className="flex flex-col items-center justify-center p-6 glass-card rounded-2xl min-w-[200px]">
            <div className="text-4xl font-black text-primary flex items-baseline">
                <span>{prefix}</span>
                <motion.span>{displayValue}</motion.span>
                <span className="ml-1">{suffix}</span>
            </div>
            <div className="text-text-muted text-sm font-bold uppercase tracking-widest mt-2">
                {label}
            </div>
        </div>
    );
};

const ImpactTicker: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
            <StatCounter value={55} label="Bridged Volume" prefix="$" suffix="M+" />
            <StatCounter value={30} label="Voting Power" prefix="$" suffix="M+" />
            <StatCounter value={60} label="Active Players" suffix="K" />
            <StatCounter value={14282} label="Fast Withdrawals" />
        </div>
    );
};

export default ImpactTicker;
