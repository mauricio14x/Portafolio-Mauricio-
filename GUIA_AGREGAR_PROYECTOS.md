# 📘 Guía para Agregar Nuevos Proyectos

Esta guía te explica cómo agregar nuevos proyectos al portafolio siguiendo la estructura establecida.

---

## 📁 Estructura de Carpetas

Cada proyecto debe tener la siguiente estructura en la carpeta `Proyectos`:

```
Proyectos/
├── Nombre del Proyecto/
│   ├── Detalles/          (opcional)
│   ├── Fotos/             (opcional)
│   ├── Planimetria/       (opcional)
│   └── maquetas/          (opcional)
└── info Nombre del Proyecto.txt
```

**Importante:** Si una carpeta de galería está vacía, no se mostrará en el modal del proyecto.

---

## 📝 Archivo de Información

Crea un archivo `info Nombre del Proyecto.txt` con el siguiente formato:

```
PROYECTO DETALLADO
Título
[Nombre del proyecto]

Subtítulo
[Descripción breve del proyecto]

Memoria Descriptiva
[Texto completo de la memoria descriptiva. Puede tener múltiples párrafos separados por líneas en blanco]

Programa
[Descripción del programa arquitectónico:
• Espacios
• Áreas
• Distribución]

Objetivo del Proyecto
[Pregunta o declaración principal del objetivo]

Objetivos específicos:
[Lista de objetivos específicos, uno por línea]

Ubicación
[Dirección completa, ciudad, país]

Año
[Año del proyecto] (Tipo de proyecto - ej: Proyecto Académico)

Palabras Clave
[Palabra clave 1]
[Palabra clave 2]
[Palabra clave 3]
...

M²
Tamaño terreno: [valor]
M² construidos: [valor]
Densidad habitacional: [valor] (opcional)
Número de pisos: [valor]
```

---

## 🖼️ Imágenes de Galería

### Categorías Disponibles:

1. **Detalles**: Folletos, diagramas conceptuales, esquemas
2. **Fotos**: Renders, fotografías del proyecto
3. **Planimetría**: Planos, cortes, elevaciones
4. **Maquetas**: Fotografías de maquetas físicas

### Formatos Aceptados:
- `.jpg`, `.jpeg`, `.png`

### Recomendaciones:
- Usa nombres descriptivos para las imágenes
- Mantén un tamaño razonable (máx 2-3 MB por imagen)
- Asegúrate de que las imágenes sean de buena calidad

---

## 🔧 Pasos para Agregar un Proyecto

### 1. Preparar las Carpetas

```powershell
# En la raíz del proyecto
cd Proyectos
mkdir "Nombre del Proyecto"
cd "Nombre del Proyecto"
mkdir Detalles, Fotos, Planimetria, maquetas
```

### 2. Agregar las Imágenes

Copia tus imágenes a las carpetas correspondientes:
- Renders → `Fotos/`
- Planos → `Planimetria/`
- Folletos → `Detalles/`
- Fotos de maquetas → `maquetas/`

### 3. Crear el Archivo de Información

Crea `info Nombre del Proyecto.txt` en la carpeta `Proyectos/` (no dentro de la carpeta del proyecto) siguiendo el formato mostrado arriba.

### 4. Copiar Imágenes a Public

```powershell
# Desde la raíz del portafolio
New-Item -ItemType Directory -Path "public\proyectos\nombre-del-proyecto" -Force
Copy-Item -Path "Proyectos\Nombre del Proyecto\*" -Destination "public\proyectos\nombre-del-proyecto" -Recurse -Force
```

**Nota:** Usa el nombre del proyecto en minúsculas y con guiones en lugar de espacios para la carpeta en `public`.

### 5. Actualizar el Código

Edita `src/data/portfolio.ts` y agrega el nuevo proyecto al array `projects`:

```typescript
{
  id: 'nombre-del-proyecto',
  title: 'Título del Proyecto',
  subtitle: 'Subtítulo descriptivo',
  year: 2024,
  location: 'Ciudad, País',
  memoriaDescriptiva: 'Texto completo de la memoria...',
  programa: `Descripción del programa...`,
  objetivo: 'Objetivo principal del proyecto',
  objetivosEspecificos: [
    'Objetivo específico 1',
    'Objetivo específico 2',
    // ...
  ],
  palabrasClave: [
    'Palabra clave 1',
    'Palabra clave 2',
    // ...
  ],
  m2Terreno: '1,000 m²',
  m2Construidos: '500 m²',
  densidad: 'Valor de densidad (opcional)',
  numeroPisos: '3 pisos',
  coverImage: '/proyectos/nombre-del-proyecto/Fotos/imagen-principal.png',
  gallery: [
    {
      name: 'Detalles',
      images: [
        '/proyectos/nombre-del-proyecto/Detalles/imagen1.jpg',
        // ...
      ]
    },
    {
      name: 'Fotos',
      images: [
        '/proyectos/nombre-del-proyecto/Fotos/imagen1.png',
        // ...
      ]
    },
    {
      name: 'Planimetría',
      images: [
        '/proyectos/nombre-del-proyecto/Planimetria/plano1.jpg',
        // ...
      ]
    },
    {
      name: 'Maquetas',
      images: [
        '/proyectos/nombre-del-proyecto/maquetas/maqueta1.jpg',
        // ...
      ]
    }
  ],
  // Legacy fields (mantener para compatibilidad)
  tags: ['Tag1', 'Tag2', 'Tag3'],
  description: 'Descripción breve',
  memoria: 'Memoria corta',
  images: ['/proyectos/nombre-del-proyecto/Fotos/imagen-principal.png']
}
```

### 6. Verificar el Build

```powershell
npm run build
```

Si no hay errores, ¡el proyecto está listo!

---

## 🎨 Ejemplo Completo

Ver el proyecto **"Raíces Compartidas"** en `src/data/portfolio.ts` como referencia completa.

---

## ✅ Checklist

Antes de considerar el proyecto completo, verifica:

- [ ] Carpeta del proyecto creada en `Proyectos/`
- [ ] Imágenes organizadas en categorías (Detalles, Fotos, Planimetria, Maquetas)
- [ ] Archivo `info Nombre del Proyecto.txt` creado con toda la información
- [ ] Imágenes copiadas a `public/proyectos/nombre-del-proyecto/`
- [ ] Proyecto agregado al array en `src/data/portfolio.ts`
- [ ] Rutas de imágenes correctas (empiezan con `/proyectos/...`)
- [ ] Build exitoso (`npm run build`)
- [ ] Proyecto visible en el portafolio (`npm run dev`)

---

## 🚨 Errores Comunes

### Error: "Cannot find module"
- **Causa:** Ruta de imagen incorrecta
- **Solución:** Verifica que las rutas empiecen con `/proyectos/` y que las imágenes estén en `public/`

### Error: "Property 'X' is possibly undefined"
- **Causa:** Campo faltante en el objeto del proyecto
- **Solución:** Asegúrate de incluir todos los campos requeridos (title, subtitle, year, location, etc.)

### Imagen no se muestra
- **Causa:** Imagen no está en la carpeta `public/`
- **Solución:** Copia las imágenes a `public/proyectos/nombre-del-proyecto/`

---

## 💡 Tips

1. **Nombres consistentes:** Usa el mismo nombre (con formato adecuado) en:
   - Carpeta del proyecto
   - Archivo info
   - ID del proyecto en el código
   - Carpeta en public

2. **Imagen de portada:** Elige la mejor imagen del proyecto para `coverImage`

3. **Orden de galerías:** El orden en el array `gallery` es el orden en que aparecerán en el modal

4. **Categorías vacías:** Si una categoría no tiene imágenes, simplemente no la incluyas en el array `gallery`

---

¿Necesitas ayuda? Revisa el proyecto "Raíces Compartidas" como ejemplo de referencia completo.
