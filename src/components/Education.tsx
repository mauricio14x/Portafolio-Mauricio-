import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { education } from '@/data/portfolio';

const Education: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });

    return (
        <section id="education" ref={ref} className="py-24 bg-arch-gray-light/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
                        Educación
                    </h2>

                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                className="bg-arch-white p-8 rounded-sm border border-arch-gray-light hover:border-arch-accent hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-arch-accent/10 rounded-full flex items-center justify-center">
                                            <GraduationCap size={32} className="text-arch-accent" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-display font-semibold mb-2">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-lg text-arch-accent mb-2">
                                            {edu.institution}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-arch-gray mb-3">
                                            <Calendar size={16} />
                                            <span>{edu.period}</span>
                                        </div>
                                        {edu.description && (
                                            <p className="text-arch-gray leading-relaxed">
                                                {edu.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
