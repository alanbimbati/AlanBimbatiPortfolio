"use client";

import { motion } from "framer-motion";

export const AboutSection = () => {
    return (
        <section id="about" className="relative w-full py-20 bg-[#050505] border-t border-white/5">
            <div className="max-w-5xl px-4 mx-auto">

                {/* Intro: photo right, text left */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-left"
                    >
                        <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            CHI SONO
                        </h2>
                        <h3 className="text-xl font-semibold text-bitcoin-orange mb-6">
                            Developer · Bitcoiner · Buddista
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-5">
                            Sono un innovatore orientato al futuro. Ho scelto consapevolmente di uscire dal circuito di WhatsApp, Facebook e Instagram <span className="text-white font-semibold">più di 5 anni fa</span>, per dedicarmi con più lucidità a ciò che conta davvero.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-5">
                            La mia mente è <span className="text-cyber-green font-semibold">open source</span>: condivido tutto ciò che imparo e costruisco gratuitamente, nella convinzione che la conoscenza condivisa valga più di quella custodita.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Costruisco infrastrutture e sistemi digitali orientati a <span className="text-bitcoin-orange">privacy</span>, <span className="text-cyber-green">efficienza</span> e <span className="text-white">decentralizzazione</span>.
                        </p>
                    </motion.div>

                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-cyber-green/50 bg-white/5 flex items-center justify-center overflow-hidden"
                        style={{ boxShadow: "0 0 40px rgba(0,255,65,0.1)" }}
                    >
                        {/* Sostituisci con la tua foto: /images/alan.jpg */}
                        <img
                            src="/images/Alan.png"
                            alt="Alan Bimbati"
                            className="object-cover w-full h-full"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = "none";
                                (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-xs text-gray-500 uppercase tracking-widest">Foto Alan</span>';
                            }}
                        />
                    </motion.div>
                </div>

                {/* Buddhism */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="p-8 bg-white/3 border border-white/10 rounded-2xl relative overflow-hidden">
                        {/* Glow accent */}
                        <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-orange/5 to-transparent pointer-events-none rounded-2xl" />
                        <h4 className="text-2xl font-bold text-white mb-2 relative">
                            ☸ Buddismo di Nichiren Daishonin
                        </h4>
                        <p className="text-sm text-gray-500 font-mono mb-5 relative">
                            Membro della Soka Gakkai dal 2017
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-4 relative">
                            La pratica buddista mi ha portato a esprimere il massimo del mio valore — a dare il meglio di me stesso in ogni aspetto della vita. Questa ricerca di eccellenza interiore mi ha fatto comprendere la mia vera strada: <span className="text-white font-semibold">aiutare l&apos;umanità attraverso la tecnologia</span>.
                        </p>
                        <p className="text-gray-400 leading-relaxed relative">
                            Il mio focus attuale è <span className="text-bitcoin-orange font-semibold">Bitcoin</span> — non come semplice moneta, ma come strumento tecnologico che <span className="text-white">restituisce sovranità e libertà all&apos;umanità</span>, una persona alla volta.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
