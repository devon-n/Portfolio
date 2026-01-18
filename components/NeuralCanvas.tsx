import React from 'react';
import { motion } from 'framer-motion';

const NeuralCanvas: React.FC = () => {
    const nodes = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
    }));

    return (
        <div className="w-full aspect-video glass-card rounded-3xl my-10 relative overflow-hidden bg-gradient-to-br from-background to-secondary/10">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h3 className="text-xl font-bold text-secondary uppercase tracking-[0.3em] opacity-40">Autonomous Intelligence Hub</h3>
            </div>

            <svg className="w-full h-full opacity-30">
                {nodes.map((node) => (
                    <React.Fragment key={node.id}>
                        <motion.circle
                            cx={`${node.x}%`}
                            cy={`${node.y}%`}
                            r={node.size}
                            fill="var(--primary-color)"
                            animate={{
                                opacity: [0.2, 0.6, 0.2],
                                scale: [1, 1.5, 1],
                                cx: [`${node.x}%`, `${node.x + (Math.random() - 0.5) * 5}%`, `${node.x}%`],
                                cy: [`${node.y}%`, `${node.y + (Math.random() - 0.5) * 5}%`, `${node.y}%`],
                            }}
                            transition={{
                                duration: 5 + Math.random() * 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        {nodes.slice(node.id + 1, node.id + 3).map((target, idx) => (
                            <motion.line
                                key={idx}
                                x1={`${node.x}%`}
                                y1={`${node.y}%`}
                                x2={`${target.x}%`}
                                y2={`${target.y}%`}
                                stroke="var(--secondary-color)"
                                strokeWidth="0.5"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0.2, 0] }}
                                transition={{
                                    duration: 3 + Math.random() * 3,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </svg>

            <div className="absolute bottom-6 left-6 p-4 glass-card bg-surface/40 rounded-xl max-w-[300px]">
                <p className="text-[10px] font-mono whitespace-pre text-secondary">
                    {`> INITIALIZING_NEURAL_WEIGHTS...\n> EVOLVING_STRUCTURE_VIA_NEAT...\n> AGENT_STATE: OPTIMIZING`}
                </p>
            </div>
        </div>
    );
};

export default NeuralCanvas;
