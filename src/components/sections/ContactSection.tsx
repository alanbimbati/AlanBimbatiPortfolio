"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, Mail, MessageCircle } from "lucide-react";

export const ContactSection = () => {
    const socials = [
        { name: "GitHub", icon: Github, link: "https://github.com/alanbimbati" },
        { name: "Telegram", icon: MessageCircle, link: "https://t.me/AlanBimbatiBlog" },
        { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/alanbimbati/" },
        { name: "Email", icon: Mail, link: "mailto:alan.bimbati@protonmail.com" }
    ];

    return (
        <section id="contact" className="relative w-full py-20 bg-black/50 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-4 w-full flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center"
                >
                    CONTATTI
                </motion.h2>
                <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                    {socials.map((social, i) => (
                        <motion.a
                            key={social.name}
                            href={social.link}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center space-x-2 text-gray-400 hover:text-cyber-green transition-colors group"
                        >
                            <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span className="font-medium text-lg">{social.name}</span>
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};
