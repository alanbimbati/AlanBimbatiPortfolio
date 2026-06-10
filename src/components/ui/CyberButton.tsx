"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CyberButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "bitcoin";
    className?: string;
}

export const CyberButton = ({ children, onClick, variant = "primary", className }: CyberButtonProps) => {
    const baseStyle = "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 rounded group";
    const variants = {
        primary: "border border-cyber-green/50 hover:border-cyber-green bg-cyber-green/5 hover:bg-cyber-green/10 shadow-[0_0_10px_rgba(0,255,65,0.2)] hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]",
        secondary: "border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10",
        bitcoin: "border border-bitcoin-orange/50 hover:border-bitcoin-orange bg-bitcoin-orange/5 hover:bg-bitcoin-orange/10 shadow-[0_0_10px_rgba(247,147,26,0.2)] hover:shadow-[0_0_20px_rgba(247,147,26,0.4)]",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={cn(baseStyle, variants[variant], className)}
        >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative">{children}</span>
        </motion.button>
    );
};
