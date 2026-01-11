import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Maximize2, Target, Users, ChevronRight, ChevronLeft } from 'lucide-react';
import { Project } from '@/types';

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentCategory, setCurrentCategory] = useState<string | null>(null);
    const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

    if (!project) return null;

    // Block body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const toggleCategory = (categoryName: string) => {
        const newExpanded = new Set(expandedCategories);
        if (newExpanded.has(categoryName)) {
            newExpanded.delete(categoryName);
        } else {
            newExpanded.add(categoryName);
        }
        setExpandedCategories(newExpanded);
    };

    const openLightbox = (image: string, categoryName: string, imageIndex: number) => {
        setSelectedImage(image);
        setCurrentCategory(categoryName);
        setCurrentImageIndex(imageIndex);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        setCurrentCategory(null);
        setCurrentImageIndex(0);
    };

    const getCurrentCategoryImages = () => {
        if (!currentCategory || !project.gallery) return [];
        const category = project.gallery.find(cat => cat.name === currentCategory);
        return category ? category.images : [];
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        const images = getCurrentCategoryImages();
        if (images.length === 0) return;

        let newIndex = currentImageIndex;
        if (direction === 'prev') {
            newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
        } else {
            newIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
        }

        setCurrentImageIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const currentImages = getCurrentCategoryImages();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-arch-black/95 z-50"
                    />

                    {/* Modal - 3 Column Layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed inset-4 md:inset-8 z-50 bg-arch-white rounded-lg overflow-hidden flex flex-col shadow-2xl max-w-[1800px] mx-auto border border-arch-gray-light/30"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-5 border-b border-arch-gray-light bg-arch-white sticky top-0 z-10">
                            <div className="flex-1">
                                <h2 className="text-2xl md:text-3xl font-display font-bold">
                                    {project.title}
                                </h2>
                                <p className="text-sm text-arch-gray mt-1">{project.subtitle}</p>
                                {project.subsubtitle && (
                                    <p className="text-xs text-arch-black mt-1 italic font-semibold">{project.subsubtitle}</p>
                                )}
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-arch-gray-light rounded-full transition-colors flex-shrink-0 ml-4"
                                aria-label="Cerrar"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* 3-Column Content */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="grid lg:grid-cols-12 gap-6 p-6">

                                {/* LEFT COLUMN - Info Puntual (Sticky) */}
                                <div className="lg:col-span-3 space-y-4">
                                    <div className="lg:sticky lg:top-6 space-y-4">
                                        {/* Quick Info */}
                                        <div className="bg-arch-white p-4 rounded-lg space-y-3 border border-arch-gray-light shadow-lg">
                                            <h3 className="text-sm font-semibold uppercase tracking-wide text-arch-accent">
                                                Información
                                            </h3>

                                            <div>
                                                <p className="text-xs text-arch-gray mb-1">Año</p>
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={14} className="text-arch-accent" />
                                                    <p className="text-sm font-semibold">{project.year}</p>
                                                </div>
                                            </div>

                                            {project.m2Terreno && (
                                                <div>
                                                    <p className="text-xs text-arch-gray mb-1">Terreno</p>
                                                    <div className="flex items-center gap-2">
                                                        <Maximize2 size={14} className="text-arch-accent" />
                                                        <p className="text-sm font-semibold">{project.m2Terreno}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {project.m2Construidos && (
                                                <div>
                                                    <p className="text-xs text-arch-gray mb-1">Construido</p>
                                                    <div className="flex items-center gap-2">
                                                        <Maximize2 size={14} className="text-arch-accent" />
                                                        <p className="text-sm font-semibold">{project.m2Construidos}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {project.numeroPisos && (
                                                <div>
                                                    <p className="text-xs text-arch-gray mb-1">Pisos</p>
                                                    <p className="text-sm font-semibold">{project.numeroPisos}</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Location */}
                                        <div className="bg-arch-accent/10 p-4 rounded-lg border-l-4 border-arch-accent shadow-lg">
                                            <div className="flex items-start gap-2">
                                                <MapPin size={16} className="text-arch-accent flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="text-xs text-arch-gray mb-1">Ubicación</p>
                                                    <p className="text-sm text-arch-gray font-medium">{project.location}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Objetivo */}
                                        {project.objetivo && (
                                            <div className="bg-arch-accent/5 p-4 rounded-lg border border-arch-accent/30 shadow-md">
                                                <div className="flex items-start gap-2 mb-2">
                                                    <Target size={16} className="text-arch-accent flex-shrink-0 mt-0.5" />
                                                    <h4 className="text-xs font-semibold uppercase tracking-wide text-arch-accent">
                                                        Objetivo
                                                    </h4>
                                                </div>
                                                <p className="text-xs text-arch-gray leading-relaxed italic">
                                                    {project.objetivo}
                                                </p>
                                            </div>
                                        )}

                                        {/* Objetivos Preview */}
                                        {project.objetivosEspecificos && project.objetivosEspecificos.length > 0 && (
                                            <div className="bg-arch-white/60 p-4 rounded-lg border border-arch-gray-light/40 shadow-md">
                                                <div className="flex items-start gap-2 mb-2">
                                                    <Users size={16} className="text-arch-accent flex-shrink-0" />
                                                    <h4 className="text-xs font-semibold uppercase tracking-wide text-arch-accent">
                                                        Objetivos
                                                    </h4>
                                                </div>
                                                <ul className="space-y-1.5">
                                                    {project.objetivosEspecificos.slice(0, 4).map((obj, idx) => (
                                                        <li key={idx} className="text-xs text-arch-gray leading-snug flex items-start gap-1.5">
                                                            <span className="text-arch-accent mt-1">•</span>
                                                            <span>{obj}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* CENTER COLUMN - Main Content */}
                                <div className="lg:col-span-6 space-y-6">
                                    {/* Memoria Descriptiva */}
                                    <div>
                                        <h3 className="text-xl font-display font-bold mb-4 pb-2 border-b border-arch-accent">
                                            Memoria Descriptiva
                                        </h3>
                                        {project.memoriaDescriptiva && (
                                            <div className="prose max-w-none">
                                                {project.memoriaDescriptiva.split('\n').map((paragraph, index) => (
                                                    <p key={index} className="text-sm text-arch-gray leading-relaxed mb-3">
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Programa */}
                                    {project.programa && (
                                        <div>
                                            <h3 className="text-xl font-display font-bold mb-4 pb-2 border-b border-arch-accent">
                                                Programa
                                            </h3>
                                            <div className="bg-arch-white/50 p-4 rounded-lg border border-arch-gray-light/30">
                                                <pre className="whitespace-pre-wrap font-sans text-sm text-arch-gray leading-relaxed">
                                                    {project.programa}
                                                </pre>
                                            </div>
                                        </div>
                                    )}

                                    {/* Objetivos Específicos Completos */}
                                    {project.objetivosEspecificos && project.objetivosEspecificos.length > 4 && (
                                        <div>
                                            <h4 className="text-base font-display font-semibold mb-3">Objetivos Específicos Completos</h4>
                                            <div className="grid gap-2">
                                                {project.objetivosEspecificos.map((objetivo, index) => (
                                                    <div key={index} className="flex items-start gap-2 p-3 bg-arch-white/80 border border-arch-gray-light/40 rounded-lg text-sm shadow-sm">
                                                        <span className="flex-shrink-0 w-5 h-5 bg-arch-accent text-arch-white rounded-full flex items-center justify-center text-xs font-bold">
                                                            {index + 1}
                                                        </span>
                                                        <span className="text-arch-gray leading-snug">{objetivo}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* RIGHT COLUMN - Gallery with Image Previews */}
                                <div className="lg:col-span-3 space-y-4">
                                    <div className="lg:sticky lg:top-6">
                                        <h3 className="text-lg font-display font-bold mb-4 text-arch-accent">
                                            Galería
                                        </h3>

                                        {project.gallery && project.gallery.length > 0 && (
                                            <div className="space-y-4">
                                                {project.gallery.map((category) => (
                                                    category.images.length > 0 && (
                                                        <div key={category.name}>
                                                            <h4 className="text-sm font-semibold text-arch-gray mb-2">
                                                                {category.name}
                                                                <span className="ml-1.5 text-xs font-normal">({category.images.length})</span>
                                                            </h4>

                                                            {/* Always show first image as preview */}
                                                            <div
                                                                className="aspect-video bg-arch-gray-light rounded-lg overflow-hidden cursor-pointer group relative mb-2"
                                                                onClick={() => openLightbox(category.images[0], category.name, 0)}
                                                            >
                                                                <img
                                                                    src={category.images[0]}
                                                                    alt={`${project.title} - ${category.name}`}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                                    loading="lazy"
                                                                />
                                                                <div className="absolute inset-0 bg-arch-black/0 group-hover:bg-arch-black/20 transition-colors flex items-center justify-center">
                                                                    <Maximize2 className="text-arch-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                                                                </div>
                                                            </div>

                                                            {/* Expandable additional images */}
                                                            {category.images.length > 1 && (
                                                                <>
                                                                    <button
                                                                        onClick={() => toggleCategory(category.name)}
                                                                        className="w-full flex items-center justify-center gap-2 p-2 bg-arch-gray-light/30 hover:bg-arch-gray-light/50 rounded-lg transition-colors text-xs text-arch-gray font-medium"
                                                                    >
                                                                        {expandedCategories.has(category.name) ? (
                                                                            <>Ver menos</>
                                                                        ) : (
                                                                            <>Ver más ({category.images.length - 1})</>
                                                                        )}
                                                                        <ChevronRight size={14} className={`transition-transform ${expandedCategories.has(category.name) ? 'rotate-90' : ''}`} />
                                                                    </button>

                                                                    <AnimatePresence>
                                                                        {expandedCategories.has(category.name) && (
                                                                            <motion.div
                                                                                initial={{ height: 0 }}
                                                                                animate={{ height: 'auto' }}
                                                                                exit={{ height: 0 }}
                                                                                transition={{ duration: 0.15, ease: "easeInOut" }}
                                                                                className="space-y-2 overflow-hidden mt-2"
                                                                            >
                                                                                {category.images.slice(1).map((image, index) => (
                                                                                    <div
                                                                                        key={index}
                                                                                        className="aspect-video bg-arch-gray-light rounded-lg overflow-hidden cursor-pointer group relative"
                                                                                        onClick={() => openLightbox(image, category.name, index + 1)}
                                                                                    >
                                                                                        <img
                                                                                            src={image}
                                                                                            alt={`${project.title} - ${category.name} ${index + 2}`}
                                                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                                                            loading="lazy"
                                                                                        />
                                                                                        <div className="absolute inset-0 bg-arch-black/0 group-hover:bg-arch-black/20 transition-colors flex items-center justify-center">
                                                                                            <Maximize2 className="text-arch-white opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                            </motion.div>
                                                                        )}
                                                                    </AnimatePresence>
                                                                </>
                                                            )}
                                                        </div>
                                                    )
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Lightbox with Navigation */}
                    <AnimatePresence>
                        {selectedImage && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={closeLightbox}
                                    className="fixed inset-0 bg-gray-100 z-[60]"
                                />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                    className="fixed inset-8 z-[61] flex items-center justify-center"
                                >
                                    {/* Close Button */}
                                    <button
                                        onClick={closeLightbox}
                                        className="absolute top-4 right-4 p-3 bg-arch-gray hover:bg-arch-black rounded-full transition-colors z-10"
                                        aria-label="Cerrar imagen"
                                    >
                                        <X size={28} className="text-arch-white" />
                                    </button>

                                    {/* Navigation Arrows */}
                                    {currentImages.length > 1 && (
                                        <>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigateImage('prev');
                                                }}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-arch-gray hover:bg-arch-black rounded-full transition-colors z-10"
                                                aria-label="Imagen anterior"
                                            >
                                                <ChevronLeft size={32} className="text-arch-white" />
                                            </button>

                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigateImage('next');
                                                }}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-arch-gray hover:bg-arch-black rounded-full transition-colors z-10"
                                                aria-label="Imagen siguiente"
                                            >
                                                <ChevronRight size={32} className="text-arch-white" />
                                            </button>
                                        </>
                                    )}

                                    {/* Image Counter */}
                                    {currentImages.length > 1 && (
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-arch-gray rounded-full text-arch-white text-sm font-medium">
                                            {currentImageIndex + 1} / {currentImages.length}
                                        </div>
                                    )}

                                    {/* Image */}
                                    <motion.img
                                        key={selectedImage}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.1 }}
                                        src={selectedImage}
                                        alt="Vista ampliada"
                                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
