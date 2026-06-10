"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingTextProps {
    text: string;
    className?: string;
    delay?: number;
    speed?: number;
}

export const TypingText = ({ text, className, delay = 0, speed = 50 }: TypingTextProps) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        setDisplayedText("");
        let currentIndex = 0;
        let timeoutId: NodeJS.Timeout;

        const startTyping = () => {
            timeoutId = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(timeoutId);
                }
            }, speed);
        };

        const initialDelay = setTimeout(startTyping, delay * 1000);

        return () => {
            clearTimeout(initialDelay);
            clearInterval(timeoutId);
        };
    }, [text, delay, speed]);

    return (
        <div className={cn("inline-block flex-wrap", className)}>
            {displayedText}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
                className="inline-block w-2.5 h-5 ml-1 bg-cyber-green align-middle"
            />
        </div>
    );
};
