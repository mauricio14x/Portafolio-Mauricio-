import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Compass, Mountain, Users, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { profileText, education } from '@/data/portfolio';

const About: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });

    const areasInteres = [
        {
            icon: Mountain,
            title: 'Arquitectura del Paisaje',
            description: 'Soluciones basadas en la naturaleza y diseño territorial',
        },
        {
            icon: Compass,
            title: 'Diseño Urbano',
            description: 'Análisis territorial y prevención de desastres naturales',
        },
        {
            icon: Users,
            title: 'Escala Humana',
            description: 'Intervenciones orientadas a mejorar la calidad de vida',
        },
    ];

    return (
        <section id="about" ref={ref} className="py-24 bg-arch-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
                        Sobre Mí
                    </h2>

                    {/* Top Section: Photo + Profile Text */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {/* Profile Image */}
                        <div className="md:col-span-1">
                            <div className="aspect-square bg-arch-gray-light rounded-sm overflow-hidden sticky top-24">
                                <img
                                    src="/profile.jpg"
                                    alt="Mauricio Mendoza"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Profile Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="md:col-span-2 flex flex-col justify-center"
                        >
                            <div className="prose prose-lg max-w-none">
                                {profileText.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-arch-gray leading-relaxed mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Section: Continuous Layout - Estudios & Áreas de Interés */}
                    <div className="space-y-10">
                        {/* Estudios - Sin burbujas, más discreto */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3 className="text-xl font-display font-semibold mb-4 text-arch-accent border-b border-arch-accent/30 pb-2">
                                Estudios
                            </h3>

                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={edu.id}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                        className="border-l-2 border-arch-accent/40 pl-4"
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <Calendar size={14} className="text-arch-accent" />
                                            <span className="text-xs font-medium text-arch-accent">
                                                {edu.period}
                                            </span>
                                        </div>
                                        <h4 className="text-base font-semibold mb-1">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-sm text-arch-gray font-medium mb-1">
                                            {edu.institution}
                                        </p>
                                        <p className="text-xs text-arch-gray">
                                            {edu.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Áreas de Interés - Sin burbujas, más discreto */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h3 className="text-xl font-display font-semibold mb-4 text-arch-gray border-b border-arch-gray/30 pb-2">
                                Áreas de Interés
                            </h3>

                            <div className="grid md:grid-cols-3 gap-6">
                                {areasInteres.map((area, index) => {
                                    const Icon = area.icon;
                                    return (
                                        <motion.div
                                            key={area.title}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 bg-arch-accent/10 rounded-lg flex items-center justify-center">
                                                <Icon size={20} className="text-arch-accent" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-semibold mb-1">
                                                    {area.title}
                                                </h4>
                                                <p className="text-xs text-arch-gray leading-relaxed">
                                                    {area.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Programas Manejados */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <h3 className="text-xl font-display font-semibold mb-4 text-arch-gray border-b border-arch-gray/30 pb-2">
                                Programas Manejados
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {['AutoCAD', 'SketchUp', 'Archicad', 'QGIS', 'Adobe (PS, AI, PR)', 'Rhino 8 (básico)', 'Grasshopper (básico)', 'D5 Render', 'Twinmotion'].map((programa, index) => (
                                    <motion.div
                                        key={programa}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                                        className="bg-arch-gray-light/50 px-3 py-2 rounded-sm text-center"
                                    >
                                        <span className="text-xs font-medium text-arch-gray">
                                            {programa}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Idiomas */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 1.0 }}
                        >
                            <h3 className="text-xl font-display font-semibold mb-4 text-arch-gray border-b border-arch-gray/30 pb-2">
                                Idiomas
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 1.1 }}
                                    className="flex items-center gap-3 bg-arch-gray-light/30 p-3 rounded-sm"
                                >
                                    <div className="flex-1">
                                        <h4 className="text-sm font-semibold mb-1">Español</h4>
                                        <p className="text-xs text-arch-gray">Nativo</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 1.15 }}
                                    className="flex items-center gap-3 bg-arch-gray-light/30 p-3 rounded-sm"
                                >
                                    <div className="flex-1">
                                        <h4 className="text-sm font-semibold mb-1">Inglés</h4>
                                        <p className="text-xs text-arch-gray">B1</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
