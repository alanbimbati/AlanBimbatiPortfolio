"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export const GlitchText = ({ text, className }: GlitchTextProps) => {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 200);
        }, 3000);

        return () => clearInterval(glitchInterval);
    }, []);

    return (
        <div className={cn("relative inline-block", className)}>
            <span className={cn(isGlitching ? "opacity-0" : "opacity-100")}>{text}</span>
            {isGlitching && (
                <>
                    <span className="absolute inset-0 text-cyber-green translate-x-[-2px] mix-blend-screen">
                        {text}
                    </span>
                    <span className="absolute inset-0 text-bitcoin-orange translate-x-[2px] mix-blend-screen">
                        {text}
                    </span>
                </>
            )}
        </div>
    );
};
