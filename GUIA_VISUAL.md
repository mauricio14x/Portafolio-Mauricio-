# 🎨 Guía Visual del Portafolio

## ✅ Tu portafolio está corriendo en: http://localhost:5174/

---

## 📍 Lo que deberías ver al abrir el navegador:

### 1. **Hero Section** (Primera pantalla)
- Fondo oscuro con imagen arquitectónica
- Texto grande: "Mauricio Arquitecto"
- Subtítulo: "Arquitectura del Paisaje & Diseño Urbano"
- Botón "Ver Proyectos"
- Scroll indicator animado en la parte inferior

### 2. **Sobre Mí** (Al hacer scroll)
- Título "Sobre Mí"
- Foto profesional a la izquierda (placeholder)
- Texto del perfil a la derecha
- 3 cards con iconos:
  - 🏔️ Arquitectura del Paisaje
  - 🧭 Diseño Urbano
  - 👥 Escala Humana

### 3. **Educación**
- Título "Educación"
- 2 cards:
  - Universidad Diego Portales (2022-2025)
  - Colegio Juan Luis Undurraga Aninat (2018-2021)

### 4. **Proyectos** ⭐ (SECCIÓN PRINCIPAL)
- Fondo oscuro
- Título "Proyectos"
- **Scroll horizontal** con 4 proyectos:
  1. Parque Ribera Mapocho
  2. Centro Comunitario Quilicura
  3. Plan Maestro Cerro Renca
  4. Vivienda Social Sustentable

**Interacciones:**
- Pasa el mouse sobre una card → Se revelan detalles
- Click en una card → Se abre modal con:
  - Información completa del proyecto
  - Memoria arquitectónica
  - Galería de imágenes
  - Botón X para cerrar

**Navegación:**
- Flechas izquierda/derecha (desktop)
- Scroll horizontal con mouse o trackpad
- En mobile: scroll vertical

### 5. **Contacto**
- Información de contacto con iconos
- Formulario de contacto
- Teléfono: +56 9 2030 7035
- Email: contacto@arquitectura.cl
- Ubicación: Quilicura, Santiago, Chile

### 6. **Footer**
- Fondo oscuro
- Links de navegación
- Copyright 2026

---

## 🎬 Animaciones que deberías ver:

1. **Al cargar la página:**
   - Hero text aparece con fade-in
   - Scroll indicator pulsa suavemente

2. **Al hacer scroll:**
   - Cada sección aparece con fade-in
   - Cards se deslizan desde abajo

3. **En Proyectos:**
   - Hover en cards: zoom sutil + información aparece
   - Modal: fade-in con backdrop oscuro

4. **Header:**
   - Fijo en la parte superior
   - Backdrop blur (efecto vidrio)

---

## 🖱️ Prueba estas interacciones:

### Desktop:
1. ✅ Hover sobre project cards
2. ✅ Click en "Ver Proyectos" en el Hero
3. ✅ Click en una project card para abrir modal
4. ✅ Usa las flechas para navegar proyectos
5. ✅ Scroll horizontal en proyectos
6. ✅ Click en X para cerrar modal
7. ✅ Hover sobre botones y links

### Mobile (reduce el ancho del navegador):
1. ✅ Menú hamburguesa funciona
2. ✅ Proyectos en scroll vertical
3. ✅ Todo responsive

---

## 🎨 Paleta de Colores que verás:

- **Fondo claro:** #F8F8F8 (casi blanco)
- **Fondo oscuro:** #1A1A1A (gris muy oscuro)
- **Texto:** #0A0A0A (negro)
- **Acento:** #8B7355 (tierra/marrón suave)
- **Grises:** Varios tonos neutros

---

## 🔧 Si quieres hacer cambios:

1. **Edita los archivos** en `src/`
2. **Guarda** → Vite recargará automáticamente
3. **Ve los cambios** instantáneamente en el navegador

---

## 📱 Para ver en tu teléfono:

1. Asegúrate de estar en la misma red WiFi
2. Ejecuta: `npm run dev -- --host`
3. Verás una URL de Network (ej: http://192.168.1.x:5174)
4. Abre esa URL en tu teléfono

---

## 🚀 Siguiente paso: Deploy a Vercel

Cuando estés listo para publicar:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Seguir las instrucciones
# ¡Tu portafolio estará online en minutos!
```

---

**¡Abre http://localhost:5174/ en tu navegador para ver tu portafolio! 🎉**
