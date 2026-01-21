import React, { useEffect, useState } from 'react';

const accomplishments = [
    "SHIPPED: Cross-chain bridge frontend (>$55M bridged volume)",
    "OPTIMIZED: Fast withdrawals (reduced 2-week latency to minutes)",
    "DEPLOYED: Tezos governance UI (supporting >$30M voting power)",
    "SCALED: Sole Solidity dev for 60K players / 500K NFT owners",
    "INTERFACED: LayerZero token bridge for Astrafer (Polygon-ETH)",
    "ARCHITECTED: Upgradeable contracts (Transparent Proxy Pattern)",
    "EXECUTED: Polygon NFT contract (12,000+ on-chain transactions)",
    "ENGINEERED: Dynamic NFT EC2->S3 metadata rendering pipeline",
    "MONITORED: RPC/Indexer alerting system with PagerDuty integration",
    "INSTRUCTED: Substitute Blockchain/AI teacher @ Monash University",
    "DEVELOPED: StratX - Advanced Algo Crypto Trading Platform",
    "BUILT: MLB & NBA AI Betting Predictor models",
    "PROTOTYPED: Custom Telegram Mini Apps ecosystem",
    "LAUNCHED: Multiple NFT minting dapps and marketplaces",
    "CAPABILITY: Smart Contract Development (EVM/Tezos)",
    "CAPABILITY: Security Auditing & Formal Verification",
    "CAPABILITY: Full-stack UI Design (Next.js/Framer)",
    "CAPABILITY: Backend API Engineering (Node/Go/Python)",
    "CAPABILITY: Telegram Bot & Mini App Ecosystems",
];

const CyberTerminal: React.FC = () => {
    const [leftLines, setLeftLines] = useState<string[]>([]);
    const [rightLines, setRightLines] = useState<string[]>([]);

    useEffect(() => {
        let idx = 0;
        let side: 'left' | 'right' = 'left';

        const interval = setInterval(() => {
            const line = `[SYSTEM_LOG] ${accomplishments[idx]}`;

            if (side === 'left') {
                setLeftLines(prev => [...prev.slice(-14), line]);
                side = 'right';
            } else {
                setRightLines(prev => [...prev.slice(-14), line]);
                side = 'left';
            }

            idx = (idx + 1) % accomplishments.length;
        }, 800);

        return () => clearInterval(interval);
    }, []);

    // Standardized style for terminal lines
    const lineStyle = "text-primary text-[9px] md:text-[10px] font-medium opacity-90 animate-terminal-fadeIn border-l border-primary/10 pl-2 truncate";

    return (
        <div className="w-full h-[400px] bg-black border-2 border-primary my-10 font-mono relative overflow-hidden group flex flex-col md:flex-row shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 animate-scanline pointer-events-none z-20" />

            {/* Left Column */}
            <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-primary/20 overflow-hidden relative flex flex-col bg-black/40">
                <div className="flex justify-between items-center border-b border-primary/30 pb-2 mb-4 shrink-0">
                    <span className="text-primary text-[10px] font-bold tracking-tighter uppercase">LOG_STREAM_A</span>
                    <div className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    </div>
                </div>
                <div className="space-y-1 overflow-hidden flex-1">
                    {leftLines.map((line, idx) => (
                        <div key={idx} className={lineStyle}>
                            {line}
                        </div>
                    ))}
                    <div className="text-primary animate-pulse inline-block text-[10px] ml-2">_</div>
                </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 p-4 overflow-hidden relative bg-black/60 flex flex-col border-l border-primary/10">
                <div className="flex justify-between items-center border-b border-primary/30 pb-2 mb-4 shrink-0">
                    <span className="text-primary text-[10px] font-bold tracking-tighter uppercase">LOG_STREAM_B</span>
                </div>
                <div className="space-y-1 overflow-hidden flex-1">
                    {rightLines.map((line, idx) => (
                        <div key={idx} className={lineStyle}>
                            {line}
                        </div>
                    ))}
                    <div className="text-primary animate-pulse inline-block text-[10px] ml-2">_</div>
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none bg-gradient-to-t from-primary/10 to-transparent z-10" />
            <div className="absolute bottom-4 left-4 text-[8px] text-primary/40 uppercase tracking-[0.5em] z-20">
                Matrix Sequential Trace Active
            </div>
        </div>
    );
};

export default CyberTerminal;
