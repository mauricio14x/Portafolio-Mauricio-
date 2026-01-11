import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { projects } from '@/data/portfolio';
import { Project } from '@/types';
import ProjectModal from './ProjectModal';

const Projects: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [direction, setDirection] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const currentProject = projects[currentIndex];
    const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
    const nextProject = projects[(currentIndex + 1) % projects.length];

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleOpenProject = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '50%' : '-50%',
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? '-50%' : '50%',
            opacity: 0,
            scale: 0.95,
        }),
    };

    return (
        <>
            <section id="projects" ref={ref} className="relative py-24 bg-arch-gray-dark overflow-hidden">
                {/* Header */}
                <div className="container mx-auto px-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-arch-white">
                                Proyectos
                            </h2>
                            <div className="flex items-center gap-2 text-arch-white">
                                <span className="text-2xl font-semibold">{String(currentIndex + 1).padStart(2, '0')}</span>
                                <span className="text-lg">/</span>
                                <span className="text-lg">{String(projects.length).padStart(2, '0')}</span>
                            </div>
                        </div>
                        <p className="text-arch-gray-light max-w-2xl">
                            Explora una selección de proyectos que integran análisis territorial,
                            diseño urbano y arquitectura del paisaje.
                        </p>
                    </motion.div>
                </div>

                {/* Carousel Container */}
                <div className="relative h-[700px] md:h-[800px]">
                    {/* Navigation Arrows - Section Only (Absolute) */}
                    {projects.length > 1 && (
                        <>
                            <button
                                onClick={handlePrev}
                                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-arch-white/10 hover:bg-arch-white hover:text-arch-black backdrop-blur-md rounded-full transition-all duration-300 border border-arch-white/30 hover:border-arch-white shadow-2xl z-40"
                                aria-label="Proyecto anterior"
                            >
                                <ChevronLeft size={32} strokeWidth={2.5} />
                            </button>

                            <button
                                onClick={handleNext}
                                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-arch-white/10 hover:bg-arch-white hover:text-arch-black backdrop-blur-md rounded-full transition-all duration-300 border border-arch-white/30 hover:border-arch-white shadow-2xl z-40"
                                aria-label="Proyecto siguiente"
                            >
                                <ChevronRight size={32} strokeWidth={2.5} />
                            </button>
                        </>
                    )}

                    {/* Projects Container */}
                    <div className="relative h-full flex items-center justify-center">
                        {/* Previous Project - Left Peek */}
                        {projects.length > 1 && (
                            <div
                                onClick={handlePrev}
                                className="absolute left-0 md:left-8 lg:left-16 w-32 md:w-48 lg:w-64 h-[400px] md:h-[500px] z-10 cursor-pointer"
                            >
                                <div className="relative h-full rounded-lg overflow-hidden shadow-xl opacity-30 hover:opacity-50 transition-all duration-300">
                                    <img
                                        src={prevProject.coverImage}
                                        alt={prevProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-arch-black/50" />
                                </div>
                            </div>
                        )}

                        {/* Current Project - Center (Larger) */}
                        <div className="relative z-20 w-full max-w-5xl mx-auto px-4">
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.3 },
                                        scale: { duration: 0.3 },
                                    }}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    onClick={() => handleOpenProject(currentProject)}
                                    className="relative h-[650px] md:h-[750px] rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={currentProject.coverImage}
                                            alt={currentProject.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-arch-black/70 via-transparent to-arch-black/90" />
                                        <div className={`absolute inset-0 bg-arch-black/0 group-hover:bg-arch-black/20 transition-all duration-500`} />
                                    </div>

                                    {/* Content - Title/Subtitle at Top */}
                                    <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                                        {/* Top Section */}
                                        <div className="space-y-3">
                                            <motion.div
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-arch-white leading-tight">
                                                    {currentProject.title}
                                                </h3>
                                                <p className="text-base md:text-lg text-arch-white/90 mt-2">
                                                    {currentProject.subtitle}
                                                </p>
                                            </motion.div>

                                            {/* Keywords - Smaller */}
                                            <motion.div
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                                className="flex flex-wrap gap-1.5"
                                            >
                                                {currentProject.palabrasClave?.slice(0, 6).map((keyword) => (
                                                    <span
                                                        key={keyword}
                                                        className="px-2.5 py-1 bg-arch-white/10 backdrop-blur-sm text-arch-white text-xs font-medium rounded-full border border-arch-white/20"
                                                    >
                                                        {keyword}
                                                    </span>
                                                ))}
                                            </motion.div>
                                        </div>

                                        {/* Bottom Section */}
                                        <div className="space-y-4">
                                            {/* Memoria on Hover */}
                                            <AnimatePresence>
                                                {isHovered && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 20 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="bg-arch-white/10 backdrop-blur-md p-5 rounded-lg border border-arch-white/20 max-w-3xl"
                                                    >
                                                        <h4 className="text-xs font-semibold uppercase tracking-wide mb-2 text-arch-white/80">
                                                            Memoria Descriptiva
                                                        </h4>
                                                        <p className="text-sm text-arch-white/90 leading-relaxed line-clamp-4">
                                                            {currentProject.memoriaDescriptiva}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Click Indicator */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                            >
                                                <p className="text-arch-white/90 text-sm font-medium">
                                                    Click para ver detalles completos →
                                                </p>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Next Project - Right Peek */}
                        {projects.length > 1 && (
                            <div
                                onClick={handleNext}
                                className="absolute right-0 md:right-8 lg:right-16 w-32 md:w-48 lg:w-64 h-[400px] md:h-[500px] z-10 cursor-pointer"
                            >
                                <div className="relative h-full rounded-lg overflow-hidden shadow-xl opacity-30 hover:opacity-50 transition-all duration-300">
                                    <img
                                        src={nextProject.coverImage}
                                        alt={nextProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-arch-black/50" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-2">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`transition-all duration-300 rounded-full ${index === currentIndex
                                    ? 'w-10 h-2 bg-arch-white'
                                    : 'w-2 h-2 bg-arch-white/40 hover:bg-arch-white/60'
                                    }`}
                                aria-label={`Ir al proyecto ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default Projects;
