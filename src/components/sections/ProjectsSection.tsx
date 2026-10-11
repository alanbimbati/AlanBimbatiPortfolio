"use client";

import { CyberButton } from "@/components/ui/CyberButton";
import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
    title: string;
    description: string;
    link: string;
    glowColor: "orange" | "green";
    btnText: string;
    image?: string;
    video?: string;
};

const projects: Project[] = [
    {
        title: "Ortix",
        description: "Un orticello digitale, una wiki personale dove porto tutta la mia conoscenza gratuitamente verso la sovranità digitale e Bitcoin.",
        link: "https://ortix.vercel.app/",
        glowColor: "orange" as const,
        btnText: "Visita Ortix",
        image: "/images/Ortix.png"
    },
    {
        title: "To The Mooon",
        description: "Un libro e un gioco da tavolo per imparare Bitcoin divertendosi, in modo accessibile e coinvolgente per tutti.",
        link: "https://tothemooon.it",
        glowColor: "orange" as const,
        btnText: "Scopri To The Mooon",
        image: "/images/tothemooon.png"
    },
    {
        title: "Blog Telegram",
        description: "Il mio diario pubblico. Qui posto tutto ciò che riguarda me, le mie riflessioni personali, lo sviluppo tech e la decentralizzazione.",
        link: "https://t.me/s/AlanBimbatiBlog",
        glowColor: "green" as const,
        btnText: "Leggi il Blog",
        image: "/images/AlanBimbatiBlog.png"
    },
    {
        title: "Sviluppatore di Bot Telegram",
        description: "Realizzo bot Telegram automatizzati per ottimizzare flussi di lavoro, gestire dati e implementare funzioni avanzate.",
        link: "https://btcpay.davidcoen.it/apps/jtghn4EuKVcbi5WxbxHde9QYGY6/pos",
        glowColor: "green" as const,
        btnText: "Supporta/Info",
        image: "/images/BotDeveloper.png"
    },
    {
        title: "Referente Bitcoin Edu Verona",
        description: "Attivo nella divulgazione e nell'organizzazione di iniziative formative per l'adozione e la comprensione di Bitcoin sul territorio veronese.",
        link: "https://t.me/AlanBimbati",
        glowColor: "orange" as const,
        btnText: "Scrivimi su Telegram",
        image: "/images/ReferenteEduVerona.png"
    },
    {
        title: "Barattolo",
        description: "Il mercatino decentralizzato in satoshi su Nostr: compra e vendi oggetti pagando direttamente in Bitcoin, senza intermediari né censura.",
        link: "https://barattolo.store/",
        glowColor: "orange" as const,
        btnText: "Visita Barattolo",
        video: "/images/Barattolo.mp4"
    }
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="relative w-full py-20 flex flex-col items-center">
            <div className="max-w-5xl mx-auto px-4 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-3xl font-bold tracking-tight text-white text-center sm:text-4xl"
                >
                    PROGETTI & INIZIATIVE
                </motion.h2>

                <div className="flex flex-col space-y-32">
                    {projects.map((project, index) => (
                        <div key={project.title} className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Project Image */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="w-full md:w-1/2 aspect-video bg-white/5 border border-white/10 rounded-xl overflow-hidden relative flex items-center justify-center group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 group-hover:from-black/40 transition-colors" />
                                {project.video ? (
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    />
                                ) : project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    />
                                ) : null}
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="w-full md:w-1/2 flex flex-col items-start text-left"
                            >
                                <h3 className={`text-3xl font-bold mb-4 ${project.glowColor === 'orange' ? 'text-bitcoin-orange' : 'text-cyber-green'}`}>
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    {project.description}
                                </p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <CyberButton variant={project.glowColor === 'orange' ? 'bitcoin' : 'primary'}>
                                        {project.btnText}
                                    </CyberButton>
                                </a>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
