import { CyberButton } from "@/components/ui/CyberButton";
import { GlitchText } from "@/components/ui/GlitchText";
import { TypingText } from "@/components/ui/TypingText";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { KnowledgeGraphSection } from "@/components/sections/KnowledgeGraphSection";
import { CommunitiesSection } from "@/components/sections/CommunitiesSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center w-full min-h-screen pt-20 overflow-hidden text-center">
                <div className="z-10 px-4">
                    <h1 className="text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl text-white mb-6">
                        <GlitchText text="ALAN BIMBATI" />
                    </h1>

                    <div className="h-12 sm:h-8 mb-8 text-lg sm:text-xl md:text-2xl font-mono text-gray-400">
                        <TypingText
                            text="Developer · Bitcoiner · Buddista"
                            delay={0.5}
                            speed={60}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <a href="#projects">
                            <CyberButton variant="primary">Esplora i Progetti</CyberButton>
                        </a>
                    </div>
                </div>
            </section>

            <AboutSection />
            <ProjectsSection />
            <KnowledgeGraphSection />
            <CommunitiesSection />
            <ContactSection />

        </main>
    );
}
