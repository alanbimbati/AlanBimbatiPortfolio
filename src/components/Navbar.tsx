"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/50 backdrop-blur-md"
        >
            <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                A.<span className="text-bitcoin-orange">B</span>_
            </Link>
            <div className="flex items-center space-x-6 text-sm font-medium text-gray-400">
                <Link href="#about" className="hover:text-cyber-green transition-colors">Chi Sono</Link>
                <Link href="#projects" className="hover:text-bitcoin-orange transition-colors">Progetti</Link>
                <Link href="#community" className="hover:text-bitcoin-orange transition-colors">Community</Link>
                <Link href="#contact" className="hover:text-white transition-colors">Contatti</Link>
            </div>
        </motion.nav>
    );
};
