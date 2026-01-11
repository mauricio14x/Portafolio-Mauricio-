export interface GalleryCategory {
    name: string;
    images: string[];
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    subsubtitle?: string;
    year: number;
    location: string;
    memoriaDescriptiva: string;
    programa: string;
    objetivo: string;
    objetivosEspecificos?: string[];
    palabrasClave: string[];
    m2Terreno?: string;
    m2Construidos?: string;
    densidad?: string;
    numeroPisos?: string;
    coverImage: string;
    gallery: GalleryCategory[];
    // Legacy fields for backward compatibility
    area?: string;
    description?: string;
    memoria?: string;
    images?: string[];
    tags?: string[];
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    period: string;
    description?: string;
}

export interface ContactInfo {
    phone: string;
    email: string;
    location: string;
    linkedin?: string;
    instagram?: string;
}
