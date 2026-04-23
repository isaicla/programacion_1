# SPEC.md - Landing Page Bienestar Emocional

## 1. Project Overview

- **Project Name**: Wellness Bot Landing
- **Type**: Single-page website (landing page de conversión)
- **Core Functionality**: Landing page para servicio de asistencia emocional con IA 24/7 vía WhatsApp
- **Target Users**: Personas que buscan apoyo emocional, ansiedad, necesidad de terapia accesible

## 2. UI/UX Specification

### Layout Structure

**Navegación (Sticky Header)**
- Logo/Marca a la izquierda
- Menú: Inicio | ¿Cómo funciona? | Beneficios | Terapia Individual
- Botón CTA "Suscribirme Ahora" (azul rey) a la derecha
- Fijo al hacer scroll

**Secciones (en orden):**
1. Hero Section
2. Propuesta de Valor (3 pilares)
3. Sección "El Por Qué" (Dolores)
4. Pricing (Tarifario)
5. Sobre la Profesional
6. FAQ
7. Footer

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

**Paleta de Colores:**
- Primary (Azul Rey): `#1E40AF`
- Secondary (Verde Calmado): `#6B9080`
- Accent (Dorado Suave): `#D4A373`
- Background: `#F7F9F9` (blanco muy suave)
- Text Principal: `#2D3748`
- Text Secundario: `#718096`
- Éxito: `#48BB78`

**Tipografía:**
- Headings: "Playfair Display", serif (elegante, profesional)
- Body: "Source Sans Pro", sans-serif (legible, moderna)
- Tamaños:
  - H1: 3rem (48px)
  - H2: 2.25rem (36px)
  - H3: 1.5rem (24px)
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)

**Espaciado:**
- Section padding: 80px vertical, 20px horizontal
- Container max-width: 1200px
- Gap entre elementos: 24px

**Efectos Visuales:**
- Sombras suaves en tarjetas: `0 4px 20px rgba(0,0,0,0.08)`
- Border radius: 12px para tarjetas, 8px para botones
- Transiciones: 0.3s ease para hover states
- Fondo con gradientes sutiles en secciones destacadas

### Componentes

**Botones:**
- Primary: Fondo azul rey (#1E40AF), texto blanco, padding 16px 32px
- Hover: oscurecer 10%, escala 1.02
- Secondary: Borde azul rey, fondo transparente

**Tarjetas:**
- Fondo blanco
- Border radius 12px
- Sombra suave
- Hover: elevar con sombra mayor

**Iconos:**
- Usar Unicode/SVG simples
- Tamaño: 48px para iconos de sección

## 3. Functionality Specification

### Secciones Detalladas

**Hero Section:**
- Título de impacto: "Tu bienestar emocional a un mensaje de distancia"
- Subtítulo: "Asistencia profesional 24/7 con IA + comunidad + opciones de terapia personalizada"
- CTA Principal: "Comenzar mi suscripción" (botón grande)
- Elemento secundario: "Desde $10/mes" con precio tachado

**Propuesta de Valor (3 pilares):**
1. Asistencia IA 24/7 vía WhatsApp - icon: 💬
2. Comunidad y Terapia Grupal - icon: 👥
3. Opción de Terapia Personalizada - icon: 🎥

**Sección "El Por Qué":**
- Títulos emocionales: "¿Sientes ansiedad a media noche?", "¿Necesitas desahogarte y no tienes con quién?", "¿Buscas herramientas prácticas ahora mismo?"
- Conectar con el dolor del visitante

**Pricing:**
- Caja principal suscripción:
  - Precio tachado: $20
  - Precio promoción: $10/mes
  - Lista de beneficios con checks:
    - ✓ Acceso ilimitado al Bot 24/7
    - ✓ 1 Sesión de Terapia Grupal al mes
    - ✓ Material descargable de salud mental
- Sección individual分开:
  - "¿Prefieres algo más privado? Agenda tu sesión individual aquí"
  - Botón a Calendly

**Sobre la Profesional:**
- Breve biografía de la psicóloga
- Foto (placeholder)
- Credenciales

**FAQ:**
- ¿Es seguro? (Privacidad de datos)
- ¿Cómo cancelo la suscripción?
- ¿El bot reemplaza a un humano?

**Footer:**
- Redes sociales (Instagram, TikTok)
- Términos y condiciones
- Aviso de Privacidad
- Contacto WhatsApp

### Interactividad

- Smooth scroll al hacer click en menú
- Animaciones fade-in al hacer scroll (intersection observer)
- Validación básica de emails en formulario de contacto (si se incluye)

## 4. Acceptance Criteria

- [ ] Page carga sin errores
- [ ] Navegación es sticky y funcional
- [ ] Todos los links de anclaje funcionan
- [ ] Diseño es responsive (mobile, tablet, desktop)
- [ ] Colores y tipografía según especificación
- [ ] Botones tienen estados hover
- [ ] Secciones del 1 al 7 están presentes
- [ ] Pricing muestra precio tachado y oferta
- [ ] Imágenes/iconos cargan correctamente
- [ ] Footer con todos los elementos requeridos