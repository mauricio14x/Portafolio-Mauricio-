import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Hero: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.3 });

    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-arch-gray-dark"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/hero-background.jpg"
                    alt="Exposición de arquitectura"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-arch-black/50 via-arch-black/30 to-arch-gray-dark/70" />
            </div>

            {/* Floating Text Content */}
            <div className="relative z-10 container mx-auto px-6 text-center text-arch-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <a
                        href="#about"
                        className="inline-block hover:opacity-80 transition-opacity cursor-pointer"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-3 tracking-tight drop-shadow-2xl">
                            Mauricio Mendoza
                        </h1>
                    </a>
                    <p className="text-xl md:text-2xl font-light text-arch-white/95 mb-2 drop-shadow-lg">
                        Licenciado en Arquitectura
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-6"
                >
                    <p className="text-base md:text-lg text-arch-white/90 max-w-2xl mx-auto mb-12 drop-shadow-lg">
                        Integrando soluciones basadas en la naturaleza con intervenciones a escala humana
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button
                        onClick={scrollToProjects}
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-arch-white/90 backdrop-blur-sm text-arch-black font-medium rounded-sm hover:bg-arch-accent hover:text-arch-white transition-all duration-300 shadow-lg"
                    >
                        Ver Proyectos
                        <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-arch-white/50 rounded-full flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-arch-white/50 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
