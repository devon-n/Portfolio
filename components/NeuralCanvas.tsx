import React from 'react';
import { motion } from 'framer-motion';

const NeuralCanvas: React.FC = () => {
    // Structured layers: Input (4), Hidden (6), Output (2)
    const layers = [4, 6, 2];
    const nodeRadius = 5;

    // Generate node positions
    const network = layers.map((count, layerIdx) => {
        return Array.from({ length: count }).map((_, nodeIdx) => ({
            id: `${layerIdx}-${nodeIdx}`,
            x: 10 + (layerIdx * 40), // 10%, 50%, 90%
            y: (100 / (count + 1)) * (nodeIdx + 1),
            layer: layerIdx
        }));
    });

    // Generate all connections between adjacent layers
    const connections: any[] = [];
    network.forEach((layer, i) => {
        if (i < network.length - 1) {
            const nextLayer = network[i + 1];
            layer.forEach(source => {
                nextLayer.forEach(target => {
                    connections.push({ source, target });
                });
            });
        }
    });

    return (
        <div className="w-full aspect-video glass-card rounded-3xl my-10 relative overflow-hidden bg-gradient-to-br from-background to-primary/5">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h3 className="text-xl font-bold text-primary uppercase tracking-[0.3em] opacity-20">Neural Network Evolution</h3>
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
                            className="opacity-30"
                        />
                        {/* Moving Signal */}
                        <motion.circle
                            r="2"
                            fill="var(--primary-color)"
                            className="shadow-primary shadow-lg"
                            style={{ filter: "drop-shadow(0 0 4px var(--primary-color))" }}
                            initial={{ cx: `${conn.source.x}%`, cy: `${conn.source.y}%`, opacity: 0 }}

                            animate={{
                                cx: [`${conn.source.x}%`, `${conn.target.x}%`],
                                cy: [`${conn.source.y}%`, `${conn.target.y}%`],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2 + Math.random() * 3,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 5
                            }}
                        />
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
                                r: [nodeRadius, nodeRadius + 2, nodeRadius],
                                opacity: [0.4, 0.8, 0.4]
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
                    </g>
                ))}
            </svg>

            <div className="absolute bottom-6 left-6 p-4 glass-card bg-surface/40 rounded-xl">
                <p className="text-[10px] font-mono whitespace-pre text-primary animate-pulse">
                    {`> WEIGHTS_CALIBRATED\n> SIGNAL_FLOW: ACTIVE\n> OPTIMIZING_NEURONS...`}
                </p>
            </div>
        </div>
    );
};


export default NeuralCanvas;
