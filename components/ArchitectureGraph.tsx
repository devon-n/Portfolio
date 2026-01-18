import React from 'react';
import { motion } from 'framer-motion';

const ArchitectureGraph: React.FC = () => {
    const nodes = [
        { id: 'l1', label: 'Tezos/Ethereum L1', x: 100, y: 100, color: '#7000FF' },
        { id: 'l2', label: 'Etherlink L2', x: 400, y: 100, color: '#00F5FF' },
        { id: 'indexer', label: 'Custom Indexers', x: 250, y: 250, color: '#39FF14' },
        { id: 'monitor', label: 'GCP Monitoring', x: 550, y: 250, color: '#FFD700' },
    ];

    const connections = [
        { from: 'l1', to: 'l2', label: 'Bridge ($55M+)' },
        { from: 'l2', to: 'indexer', label: 'Events' },
        { from: 'indexer', to: 'monitor', label: 'Stats' },
    ];

    return (
        <div className="w-full aspect-video glass-card rounded-3xl p-8 my-10 relative overflow-hidden">
            <h3 className="text-xl font-bold mb-8 text-primary uppercase tracking-widest">Multi-Chain Ecosystem Architecture</h3>
            <svg viewBox="0 0 700 400" className="w-full h-full">
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
                            <text
                                x={(from.x + to.x) / 2}
                                y={(from.y + to.y) / 2 - 10}
                                textAnchor="middle"
                                className="text-[10px] fill-text-muted font-mono"
                            >
                                {conn.label}
                            </text>
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
                            className="text-xs font-bold fill-text-main"
                        >
                            {node.label}
                        </text>
                        <circle cx={node.x} cy={node.y} r="4" fill={node.color} />
                    </motion.g>
                ))}
            </svg>

            {/* Legend/Note */}
            <div className="absolute bottom-6 right-6 text-[10px] font-mono text-text-muted max-w-[200px] text-right">
                * Real-time monitoring of L1/L2 state transitions and liquidity flows.
            </div>
        </div>
    );
};

export default ArchitectureGraph;
