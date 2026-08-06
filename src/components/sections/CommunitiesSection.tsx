"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { CyberButton } from "@/components/ui/CyberButton";

const communities = [
    {
        name: "aROMaDiVideogiochi",
        handle: "@aROMaDiVideogiochi",
        description: "Una community dedicata ai videogiochi con un bot di intrattenimento integrato per tenere viva la chat e coinvolgere la community in modo divertente e automatico.",
        link: "https://t.me/aROMaDiVideogiochi",
        glowColor: "green" as const,
        emoji: "🎮",
    },
    {
        name: "FunzioGram",
        handle: "FunzioGram",
        description: "L'ingegnerizzazione dei canali Telegram: metodi, strategie e strumenti per creare canali di qualità, capire l'algoritmo e fare crescere la propria presenza.",
        link: "https://t.me/s/FunzioGram/",
        glowColor: "green" as const,
        emoji: "⚙️",
    },
    {
        name: "San Suno AI Music Festival",
        handle: "@SanSunoAIMusicFestival",
        description: "Il festival della musica generata con l'intelligenza artificiale — con un contest annuale aperto a tutti gli artisti che vogliono esplorare il futuro del suono.",
        link: "https://t.me/SanSunoAIMusicFestival",
        glowColor: "orange" as const,
        emoji: "🎵",
    },
];

export const CommunitiesSection = () => {
    return (
        <section id="community" className="relative w-full py-20 flex flex-col items-center border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-4 text-3xl font-bold tracking-tight text-white text-center sm:text-4xl"
                >
                    COMMUNITY
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-center mb-16 text-lg"
                >
                    Spazi digitali che gestisco e animo, ognuno con la sua identità.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {communities.map((community, index) => (
                        <GlassCard key={community.name} glowColor={community.glowColor} delay={index * 0.15} className="flex flex-col">
                            <div className="text-4xl mb-4">{community.emoji}</div>
                            <h3 className={`text-xl font-bold mb-1 ${community.glowColor === "orange" ? "text-bitcoin-orange" : "text-cyber-green"}`}>
                                {community.name}
                            </h3>
                            <p className="text-xs text-gray-500 font-mono mb-4">{community.handle}</p>
                            <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                {community.description}
                            </p>
                            <a href={community.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                                <CyberButton variant={community.glowColor === "orange" ? "bitcoin" : "primary"} className="w-full text-sm py-2">
                                    Entra nella Community
                                </CyberButton>
                            </a>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
