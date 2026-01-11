# Portafolio de Arquitectura

Portafolio web profesional para arquitecto especializado en arquitectura del paisaje y diseño urbano. Desarrollado con React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño Minimalista**: Estética profesional inspirada en estudios de arquitectura contemporáneos
- **Sección de Proyectos Interactiva**: Scroll horizontal suave con cards animadas y modal de detalles
- **Animaciones Fluidas**: Implementadas con Framer Motion para una experiencia premium
- **Completamente Responsive**: Diseño mobile-first que se adapta a todos los dispositivos
- **Optimizado para Performance**: Lazy loading de imágenes y code splitting
- **SEO Optimizado**: Meta tags y estructura semántica HTML5

## 🛠️ Stack Tecnológico

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos utility-first
- **Framer Motion** - Librería de animaciones
- **Lucide React** - Iconos modernos

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de build de producción
npm run preview
```

## 🌐 Deployment en Vercel

### Opción 1: Desde la interfaz de Vercel

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Vercel detectará automáticamente la configuración de Vite
5. Haz click en "Deploy"

### Opción 2: Desde la CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📁 Estructura del Proyecto

```
portafolio/
├── src/
│   ├── components/       # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/            # Datos del portafolio
│   │   └── portfolio.ts
│   ├── hooks/           # Custom hooks
│   │   └── useIntersectionObserver.ts
│   ├── types/           # TypeScript types
│   │   └── index.ts
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Entry point
│   └── index.css        # Estilos globales
├── public/              # Archivos estáticos
├── index.html           # HTML template
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎨 Personalización

### Actualizar Información Personal

Edita el archivo `src/data/portfolio.ts` para actualizar:
- Proyectos arquitectónicos
- Educación
- Información de contacto
- Texto del perfil profesional

### Modificar Colores

Edita `tailwind.config.js` para cambiar la paleta de colores:

```javascript
colors: {
  'arch-black': '#0A0A0A',
  'arch-gray-dark': '#1A1A1A',
  'arch-accent': '#8B7355', // Color de acento
  // ...
}
```

### Agregar Nuevos Proyectos

En `src/data/portfolio.ts`, agrega objetos al array `projects`:

```typescript
{
  id: 'proyecto-id',
  title: 'Título del Proyecto',
  subtitle: 'Subtítulo',
  year: 2024,
  location: 'Ubicación',
  area: '1000 m²',
  program: 'Tipo de programa',
  description: 'Descripción breve',
  memoria: 'Memoria completa del proyecto...',
  coverImage: 'URL de imagen',
  images: ['URL1', 'URL2', 'URL3'],
  tags: ['Tag1', 'Tag2'],
}
```

## 📱 Secciones del Portafolio

1. **Hero**: Presentación principal con parallax
2. **Sobre Mí**: Perfil profesional y áreas de especialización
3. **Educación**: Timeline de formación académica
4. **Proyectos**: Galería horizontal con modal de detalles (SECCIÓN PRINCIPAL)
5. **Contacto**: Información de contacto y formulario

## ⚡ Performance

- Lighthouse Score objetivo: 90+
- Lazy loading de imágenes
- Code splitting automático
- Optimización de fuentes con preconnect
- Animaciones a 60fps

## 🎯 Características Destacadas

### Sección de Proyectos
- **Scroll horizontal suave** con snap scrolling
- **Cards con hover effects** que revelan información
- **Modal detallado** con galería de imágenes
- **Responsive**: scroll vertical en mobile
- **Navegación** con botones y indicadores

### Animaciones
- Fade-in al hacer scroll (Intersection Observer)
- Parallax sutil en hero
- Transiciones fluidas en modales
- Hover effects elegantes

## 📄 Licencia

Este proyecto es de uso personal para portafolio profesional.

## 👤 Contacto

- **Teléfono**: +56 9 2030 7035
- **Email**: contacto@arquitectura.cl
- **Ubicación**: Quilicura, Santiago, Chile

---

Desarrollado con ❤️ para arquitectos que valoran el diseño y la atención al detalle.
