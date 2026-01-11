import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {


    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={onClick}
            className="relative h-[600px] rounded-xl overflow-hidden cursor-pointer group shadow-2xl"
            style={{ willChange: 'transform' }}
        >
            {/* Background Image */}
            <img
                src={project.coverImage}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-arch-black via-arch-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {(project.tags || project.palabrasClave)?.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-arch-white/20 backdrop-blur-sm text-arch-white text-xs rounded-full border border-arch-white/30"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-2xl md:text-3xl font-display font-bold text-arch-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                    {project.title}
                </h3>
                <p className="text-lg md:text-xl text-arch-gray-light mb-4 transform transition-transform duration-300 group-hover:-translate-y-2">
                    {project.subsubtitle || project.subtitle}
                </p>

                {/* Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-arch-gray-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{project.location}</span>
                    </div>
                </div>

                {/* Description Preview */}
                {(project.description || project.memoriaDescriptiva) && (
                    <p className="mt-4 text-arch-white/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.description || project.memoriaDescriptiva?.substring(0, 150) + '...'}
                    </p>
                )}

                {/* Click Indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-arch-white text-sm font-medium border-b border-arch-white pb-1">
                        Ver proyecto completo →
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
