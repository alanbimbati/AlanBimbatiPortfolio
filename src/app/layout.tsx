import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ParticlesBackground } from '@/components/ParticlesBackground'

export const metadata: Metadata = {
    title: 'Alan Bimbati | Developer & Bitcoiner',
    description: 'Portfolio of Alan Bimbati - Developer, Bitcoiner, Buddista. Sovranità digitale e innovazione.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark bg-[#050505] text-white scroll-smooth">
            <body className="relative">
                <ParticlesBackground />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
