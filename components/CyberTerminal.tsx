import React, { useEffect, useState } from 'react';

const CyberTerminal: React.FC = () => {
    const [lines, setLines] = useState<string[]>([]);
    const mockLogs = [
        "Connecting to Ethereum Mainnet...",
        "LayerZero: Source chain validated.",
        "Solidity: Compiler optimization 200 runs.",
        "Security: Reentrancy guard verified.",
        "Proxy: Transparent pattern initialized.",
        "Bridging: 1,700 ETH volume detected.",
        "Success: Payload delivered to Polygon.",
    ];

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < mockLogs.length) {
                setLines(prev => [...prev, `[SYS] ${mockLogs[i]}`]);
                i++;
            } else {
                setLines(prev => [...prev.slice(1), `[SYS] ${mockLogs[Math.floor(Math.random() * mockLogs.length)]}`]);
            }
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full aspect-video bg-black border-2 border-primary p-6 my-10 font-mono relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 animate-scanline pointer-events-none" />

            <div className="flex justify-between items-center border-b border-primary/30 pb-2 mb-4">
                <span className="text-primary text-xs font-bold tracking-tighter uppercase underline decoration-double">Terminal ID: PG-AST-01</span>
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
            </div>

            <div className="space-y-1">
                {lines.map((line, idx) => (
                    <div key={idx} className="text-primary text-xs opacity-80 animate-fadeIn">
                        <span className="opacity-50 mr-2">[{new Date().toLocaleTimeString()}]</span>
                        {line}
                    </div>
                ))}
                <div className="text-primary animate-pulse inline-block">_</div>
            </div>

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/5 to-transparent" />

            <div className="absolute bottom-4 right-4 text-[8px] text-primary/40 uppercase tracking-[0.5em]">
                Blowfish Protocols Active
            </div>

            <style jsx>{`
                @keyframes scanline {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(400px); }
                }
                .animate-scanline {
                    animation: scanline 4s linear infinite;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateX(-10px); }
                    to { opacity: 0.8; transform: translateX(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default CyberTerminal;
