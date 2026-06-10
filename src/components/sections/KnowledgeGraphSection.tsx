"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

interface Node {
    id: number;
    x: number;
    y: number;
    label: string;
    color: string;
    href: string;
    size: number;
}

const graphNodes = [
    { label: "Alan Bimbati", color: "#ffffff", href: "#about", isCentral: true },
    { label: "Bitcoin", color: "#F7931A", href: "#projects" },
    { label: "Telegram", color: "#00FF41", href: "#contact" },
    { label: "Sovranità Digitale", color: "#F7931A", href: "#projects" },
    { label: "Privacy", color: "#00FF41", href: "#projects" },
    { label: "Open Source", color: "#ffffff", href: "#projects" },
];

export const KnowledgeGraphSection = () => {
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<[number, number][]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const buildGraph = useCallback(() => {
        if (!containerRef.current) return;
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        const cx = width / 2;
        const cy = height / 2;

        const newNodes: Node[] = [{
            id: 0,
            x: cx,
            y: cy,
            label: "Alan Bimbati",
            color: "#ffffff",
            href: "#about",
            size: 20,
        }];

        const orbiters = graphNodes.slice(1);
        const radius = Math.min(width, height) * 0.36;
        orbiters.forEach((n, i) => {
            const angle = (i / orbiters.length) * 2 * Math.PI - Math.PI / 2;
            newNodes.push({
                id: i + 1,
                x: cx + radius * Math.cos(angle),
                y: cy + radius * Math.sin(angle),
                label: n.label,
                color: n.color,
                href: n.href,
                size: 10,
            });
        });

        const newEdges: [number, number][] = [];
        for (let i = 1; i < newNodes.length; i++) {
            newEdges.push([0, i]);
        }
        const interconnections: [number, number][] = [
            [1, 3], [1, 4], [3, 4], [2, 6], [4, 5], [5, 7], [6, 7]
        ];
        interconnections.forEach(e => {
            if (e[0] < newNodes.length && e[1] < newNodes.length) newEdges.push(e);
        });

        setNodes(newNodes);
        setEdges(newEdges);
    }, []);

    useEffect(() => {
        buildGraph();
        window.addEventListener("resize", buildGraph);
        return () => window.removeEventListener("resize", buildGraph);
    }, [buildGraph]);

    return (
        <section id="graph" className="relative w-full py-20 flex flex-col items-center overflow-hidden min-h-[80vh] bg-[#050505] border-t border-b border-white/5">
            <div className="max-w-6xl mx-auto px-4 w-full flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-3xl font-bold tracking-tight text-white text-center sm:text-4xl"
                >
                    KNOWLEDGE GRAPH
                </motion.h2>

                <div
                    ref={containerRef}
                    className="relative w-full h-[600px] border border-white/5 bg-black/40 rounded-xl overflow-hidden backdrop-blur-md"
                >
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        {edges.map(([source, target], i) => {
                            const n1 = nodes[source];
                            const n2 = nodes[target];
                            if (!n1 || !n2) return null;
                            const isSpoke = source === 0 || target === 0;
                            return (
                                <motion.line
                                    key={i}
                                    x1={n1.x} y1={n1.y}
                                    x2={n2.x} y2={n2.y}
                                    stroke={isSpoke ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.07)"}
                                    strokeWidth={isSpoke ? 1 : 0.5}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: i * 0.06 }}
                                />
                            );
                        })}
                    </svg>

                    {nodes.map((node, i) => (
                        <motion.a
                            key={node.id}
                            href={node.href}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.2 }}
                            className="absolute flex flex-col items-center cursor-pointer group"
                            style={{
                                left: node.x,
                                top: node.y,
                                translateX: "-50%",
                                translateY: "-50%",
                            }}
                        >
                            <div
                                className="rounded-full transition-all duration-300 group-hover:shadow-lg"
                                style={{
                                    width: node.size * 2,
                                    height: node.size * 2,
                                    backgroundColor: node.color,
                                    boxShadow: `0 0 ${node.size}px ${node.color}`,
                                }}
                            />
                            <span
                                className="mt-2 text-xs sm:text-sm font-mono text-center whitespace-nowrap pointer-events-none"
                                style={{ color: node.color, textShadow: `0 0 8px ${node.color}` }}
                            >
                                {node.label}
                            </span>
                        </motion.a>
                    ))}
                </div>
                <p className="mt-4 text-xs text-gray-500 font-mono">Clicca su un nodo per navigare alla sezione</p>
            </div>
        </section>
    );
};
