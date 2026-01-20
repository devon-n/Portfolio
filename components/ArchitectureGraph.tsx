import React from 'react';
import { motion } from 'framer-motion';

const ArchitectureGraph: React.FC = () => {
    const nodes = [
        { id: 'tezos', label: 'Tezos L1', x: 100, y: 100, color: '#7000FF' },
        { id: 'etherlink', label: 'Etherlink L2', x: 350, y: 100, color: '#00F5FF' },
        { id: 'evm', label: 'EVM Chains', x: 600, y: 100, color: '#39FF14' },
        { id: 'gcp', label: 'GCP Monitoring', x: 350, y: 280, color: '#FFD700' },
    ];

    const connections = [
        { from: 'tezos', to: 'etherlink', bidirectional: true },
        { from: 'etherlink', to: 'evm', bidirectional: true },
        { from: 'tezos', to: 'gcp', label: 'Metrics' },
        { from: 'etherlink', to: 'gcp', label: 'Stats' },
        { from: 'evm', to: 'gcp', label: 'Events' },
    ];

    return (
        <div className="w-full aspect-[2/1] glass-card rounded-3xl p-8 my-10 relative overflow-hidden bg-background/30 shadow-[0_0_20px_rgba(var(--primary-rgb),0.05)]">
            <h3 className="text-xl font-bold mb-8 text-primary uppercase tracking-widest relative z-10">Multi-Chain Ecosystem Architecture</h3>
            <svg viewBox="0 0 700 400" className="w-full h-full relative z-10">
                {/* Connections */}
                {connections.map((conn, i) => {
                    const from = nodes.find(n => n.id === conn.from)!;
                    const to = nodes.find(n => n.id === conn.to)!;

                    return (
                        <g key={i}>
                            <motion.line
                                x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                                stroke="var(--primary-color)"
                                strokeWidth="2"
                                strokeDasharray="10 5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.3 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                            {conn.label && (
                                <text
                                    x={(from.x + to.x) / 2}
                                    y={(from.y + to.y) / 2 + 20}
                                    textAnchor="middle"
                                    className="text-[10px] fill-text-muted font-mono"
                                >
                                    {conn.label}
                                </text>
                            )}
                        </g>
                    );
                })}

                {/* Nodes */}
                {nodes.map((node) => (
                    <motion.g
                        key={node.id}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12 }}
                    >
                        <circle cx={node.x} cy={node.y} r="40" fill="var(--surface-color)" stroke={node.color} strokeWidth="2" className="drop-shadow-lg" />
                        <text
                            x={node.x}
                            y={node.y + 60}
                            textAnchor="middle"
                            className="text-[10px] font-bold fill-text-main uppercase tracking-tighter"
                        >
                            {node.label}
                        </text>
                        <circle cx={node.x} cy={node.y} r="4" fill={node.color} />
                    </motion.g>
                ))}
            </svg>

            <div className="absolute bottom-6 right-6 text-sm font-bold text-primary max-w-[300px] text-right bg-background/50 px-2 py-1 rounded backdrop-blur-sm z-10">
                ENGINEERING CORE ENABLED
            </div>
        </div>
    );
};

export default ArchitectureGraph;
