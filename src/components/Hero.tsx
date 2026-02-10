'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import GradientBlinds from './GradientBlinds';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-8 lg:px-24 pt-20 pb-16 md:pb-20 lg:pb-24 relative overflow-hidden bg-black selection:bg-white selection:text-black">
            {/* Gradient Blinds Background */}
            <div className="absolute inset-0 z-0">
                <GradientBlinds
                    dpr={1}
                    gradientColors={['#000000', '#b87effff', '#000000']}
                    blindCount={20}
                    spotlightOpacity={0.8}
                    className="opacity-40"
                />
            </div>



            {/* Container - Centered Single Column - Reduced Width */}
            <div className="max-w-3xl w-full mx-auto z-10 relative flex flex-col items-center justify-center text-center">

                {/* Hero Content */}
                <div className="flex flex-col items-center w-full max-w-[90%] md:max-w-4xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-5 text-sm font-Regular  tracking-[0.2em] text-neutral-400"
                    >
                        Hiiii, Madhu Here.
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-8"
                    >
                        Building digital products <br />
                        at the intersection of <br />
                        <span className="font-serif italic font-light opacity-90 text-neutral-300">Design</span> <span className="font-serif italic font-light opacity-90 text-neutral-300">&</span> <span className="font-serif italic font-light opacity-90 text-neutral-300">Code</span>.
                    </motion.h1>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto mt-4"
                    >
                        <Link
                            href="https://cal.com/madhurjya-ray/discovery-madhu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-base hover:bg-neutral-200 transition-colors group/btn min-w-[200px]"
                        >
                            <span>Book a call</span>
                            <ArrowUpRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </Link>

                        <a
                            href="#projects"
                            className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-full font-medium text-base text-white hover:bg-white/10 transition-colors min-w-[200px]"
                        >
                            View Projects
                        </a>
                    </motion.div>
                </div>

            </div>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 font- bold text-sm animate-bounce"
            >
                scroll down
            </motion.div>
        </section>
    );
}
