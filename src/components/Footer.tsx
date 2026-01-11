import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-arch-gray-dark text-arch-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-display font-semibold mb-2">MM</h3>
                        <p className="text-sm text-arch-gray-light">
                            Arquitectura & Diseño Urbano
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-medium mb-4">Navegación</h4>
                        <ul className="space-y-2 text-sm text-arch-gray-light">
                            <li>
                                <a href="#projects" className="hover:text-arch-accent transition-colors">
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-arch-accent transition-colors">
                                    Sobre Mí
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-arch-accent transition-colors">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-display font-medium mb-4">Contacto</h4>
                        <ul className="space-y-3 text-sm text-arch-gray-light">
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-arch-accent" />
                                <span>{contactInfo.phone}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-arch-accent" />
                                <a href="mailto:mauricio.mendoza1@mail.udp.cl" className="hover:text-arch-accent transition-colors">
                                    mauricio.mendoza1@mail.udp.cl
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin size={16} className="text-arch-accent" />
                                <span>{contactInfo.location}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-arch-gray pt-8 text-center text-sm text-arch-gray-light">
                    <p>© {currentYear} Mauricio Mendoza. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
