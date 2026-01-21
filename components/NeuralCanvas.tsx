import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ServiceCategory } from '../types';

const NeuralCanvas: React.FC = () => {
    // Structured layers: Input (4), Hidden (6), Output (2)
    const layers = [4, 6, 2];
    const nodeRadius = 5;

    // Standard: Use Enum values for display and identification
    const inputLabels: ServiceCategory[] = Object.values(ServiceCategory);

    // Generate node positions
    const network = useMemo(() => layers.map((count, layerIdx) => {
        return Array.from({ length: count }).map((_, nodeIdx) => ({
            id: `${layerIdx}-${nodeIdx}`,
            x: 10 + (layerIdx * 40), // 10%, 50%, 90%
            y: (100 / (count + 1)) * (nodeIdx + 1),
            layer: layerIdx,
            label: layerIdx === 0 ? inputLabels[nodeIdx] : null
        }));
    }), []);

    // Generate all connections between adjacent layers
    const connections = useMemo(() => {
        const conns: any[] = [];
        network.forEach((layer, i) => {
            if (i < network.length - 1) {
                const nextLayer = network[i + 1];
                layer.forEach(source => {
                    nextLayer.forEach(target => {
                        conns.push({ source, target });
                    });
                });
            }
        });
        return conns;
    }, [network]);

    return (
        <div className="w-full aspect-video glass-card rounded-3xl my-10 relative overflow-hidden bg-gradient-to-br from-background to-primary/5 shadow-[0_0_20px_rgba(var(--primary-rgb),0.05)]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h3 className="text-xl font-bold text-primary uppercase tracking-[0.3em] opacity-10">Neural Intelligence Layer</h3>
            </div>

            <svg className="w-full h-full">
                {/* Connections */}
                {connections.map((conn, idx) => (
                    <g key={`conn-${idx}`}>
                        <line
                            x1={`${conn.source.x}%`}
                            y1={`${conn.source.y}%`}
                            x2={`${conn.target.x}%`}
                            y2={`${conn.target.y}%`}
                            stroke="var(--primary-color)"
                            strokeWidth="1"
                            className="opacity-20"
                        />
                        {/* Moving Signal */}
                        <motion.g
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                duration: 2 + Math.random() * 3,
                                repeat: Infinity,
                                delay: Math.random() * 5
                            }}
                        >
                            <motion.circle
                                r="2"
                                fill="var(--primary-color)"
                                className="shadow-primary shadow-lg"
                                style={{ filter: "drop-shadow(0 0 4px var(--primary-color))" }}
                                animate={{
                                    cx: [`${conn.source.x}%`, `${conn.target.x}%`],
                                    cy: [`${conn.source.y}%`, `${conn.target.y}%`],
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: Math.random() * 5
                                }}
                            />
                        </motion.g>
                    </g>
                ))}

                {/* Nodes */}
                {network.flat().map((node) => (
                    <g key={node.id}>
                        <motion.circle
                            cx={`${node.x}%`}
                            cy={`${node.y}%`}
                            r={nodeRadius}
                            fill="var(--background)"
                            className="stroke-primary stroke-[1px]"
                            animate={{
                                r: [nodeRadius, nodeRadius + 1.5, nodeRadius],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 2
                            }}
                        />

                        <circle
                            cx={`${node.x}%`}
                            cy={`${node.y}%`}
                            r={nodeRadius / 2}
                            fill="var(--primary-color)"
                            className="opacity-40"
                        />

                        {/* Permanent Node Label */}
                        {node.label && (
                            <text
                                x={`${node.x}%`}
                                y={`${node.y + 4.5}%`}
                                textAnchor="middle"
                                className="text-[6px] md:text-[8px] fill-primary font-mono font-bold uppercase tracking-tighter"
                            >
                                {node.label}
                            </text>
                        )}
                    </g>
                ))}
            </svg>

            <div className="absolute top-6 right-6 flex flex-col items-end gap-1">
                <div className="text-[10px] font-mono text-primary animate-pulse tracking-widest">SYSTEM_READY</div>
                <div className="h-0.5 w-16 bg-primary/30" />
            </div>

        </div >
    );
};

export default NeuralCanvas;
