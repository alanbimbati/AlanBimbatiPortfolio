"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, Mail, MessageCircle } from "lucide-react";

export const TechStackContactSection = () => {
    const stack = [
        "Python", "SQL", "Linux", "Docker", "Raspberry Pi",
        "Syncthing", "Obsidian", "AI tools", "Bitcoin tools"
    ];

    const socials = [
        { name: "GitHub", icon: Github, link: "https://github.com/alanbimbati" },
        { name: "Telegram", icon: MessageCircle, link: "https://t.me/AlanBimbatiBlog" },
        { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/alanbimbati/" },
        { name: "Email", icon: Mail, link: "mailto:alan.bimbati@protonmail.com" }
    ];

    return (
        <section id="contact" className="relative w-full py-20 bg-black/50 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Tech Stack */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-8 text-2xl font-bold tracking-tight text-white"
                    >
                        TECH STACK
                    </motion.h2>
                    <div className="flex flex-wrap gap-2">
                        {stack.map((tech, i) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-3 py-1.5 text-sm font-mono border rounded border-gray-700/50 bg-gray-800/30 text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-8 text-2xl font-bold tracking-tight text-white"
                    >
                        CONTACT
                    </motion.h2>
                    <div className="flex flex-col space-y-4">
                        {socials.map((social, i) => (
                            <motion.a
                                key={social.name}
                                href={social.link}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center space-x-3 text-gray-400 hover:text-cyber-green transition-colors group w-fit"
                            >
                                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="font-medium">{social.name}</span>
                                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
