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
        <div className="flex flex-col items-center justify-center p-3 sm:p-4 md:px-4 md:py-6 glass-card rounded-2xl min-w-0 border border-border/50">
            <div className="text-xl sm:text-2xl md:text-3xl font-black text-primary flex items-baseline">
                <span>{prefix}</span>
                <motion.span>{displayValue}</motion.span>
                <span className="ml-0.5">{suffix}</span>
            </div>
            <div className="text-[9px] md:text-xs text-text-muted font-bold uppercase tracking-wider mt-1 md:mt-2 text-center leading-tight">
                {label}
            </div>
        </div>
    );
};

const ImpactTicker: React.FC = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 my-6 md:my-10">
            <StatCounter value={55} label="Bridged Volume" prefix="$" suffix="M+" />
            <StatCounter value={30} label="Voting Power" prefix="$" suffix="M+" />
            <StatCounter value={60} label="Active Players" suffix="K" />
            <StatCounter value={14282} label="Fast Withdrawals" />
        </div>
    );
};

export default ImpactTicker;
