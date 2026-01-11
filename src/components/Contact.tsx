import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { contactInfo } from '@/data/portfolio';

const Contact: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });

    const contactItems = [
        { icon: Phone, label: 'Teléfono', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
        { icon: Mail, label: 'Email', value: 'mauricio.mendoza1@mail.udp.cl', href: 'mailto:mauricio.mendoza1@mail.udp.cl' },
        { icon: MapPin, label: 'Ubicación', value: contactInfo.location, href: null },
    ];

    return (
        <section id="contact" ref={ref} className="py-24 bg-arch-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
                        Contacto
                    </h2>

                    <div className="max-w-2xl mx-auto">
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-2xl font-display font-semibold mb-6 text-center">
                                Información de Contacto
                            </h3>
                            <p className="text-arch-gray mb-8 leading-relaxed text-center">
                                Estoy disponible para colaboraciones, consultas y nuevos proyectos.
                                No dudes en contactarme para discutir cómo podemos trabajar juntos.
                            </p>

                            <div className="space-y-6">
                                {contactItems.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-arch-accent/10 rounded-full flex items-center justify-center">
                                            <item.icon size={20} className="text-arch-accent" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-arch-gray mb-1">
                                                {item.label}
                                            </p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-arch-black hover:text-arch-accent transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-arch-black">{item.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
