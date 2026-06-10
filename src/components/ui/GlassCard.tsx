"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    glowColor?: "green" | "orange";
}

export const GlassCard = ({ children, className, delay = 0, glowColor = "green" }: GlassCardProps) => {
    const glowClass = glowColor === "green"
        ? "hover:border-cyber-green/50 hover:shadow-[0_0_15px_rgba(0,255,65,0.15)]"
        : "hover:border-bitcoin-orange/50 hover:shadow-[0_0_15px_rgba(247,147,26,0.15)]";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "relative p-6 rounded-xl border border-white/5 bg-black/40 backdrop-blur-md transition-all duration-300",
                glowClass,
                className
            )}
        >
            {children}
        </motion.div>
    );
};
