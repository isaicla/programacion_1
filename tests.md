# Terapeuta247 - Tests de la Landing Page

## Tests de Verificación

### 1. Título de la página
- [ ] El título debe decir "Terapeuta247"
- [ ] Verificar en: `<title>` en index.html línea 6

### 2. SEO Meta tags
- [ ] Description presente y contiene "Terapeuta247"
- [ ] Viewport configurado para mobile

### 3. Navegación
- [ ] Menú sticky funciona
- [ ] Links: Inicio, ¿Cómo funciona?, Beneficios, Terapia Individual
- [ ] Botón "Suscribirme Ahora" visible

### 4. Secciones principales (orden)
- [ ] Hero (id="inicio")
- [ ] Propuesta de Valor (id="como-funciona")
- [ ] Beneficios/Dolores (id="beneficios")
- [ ] Pricing (id="pricing")
- [ ] Payment (id="payment")
- [ ] Sobre mí (id="sobre-mi")
- [ ] FAQ (id="faq")
- [ ] Footer

### 5. Contenido Hero
- [ ] Título: "Tu bienestar emocional no puede esperar a la próxima cita."
- [ ] Subtítulo menciona "24/7" y "WhatsApp"
- [ ] Precio $10/mes visible
- [ ] Botón CTA lleva a #pricing

### 6. Pricing
- [ ] Precio tachado $20 visible
- [ ] Precio oferta $10/mes prominente
- [ ] Incluye: Bot 24/7, Terapia Grupal, Material descargable, Comunidad

### 7. Botones CTA
- [ ] "¡Empezar mi suscripción ahora!" en Hero
- [ ] "¡Suscribirme Ahora!" en Pricing lleva a #payment
- [ ] "Agendar Mi Sesión" para terapia individual

### 8. Responsive
- [ ] Menu mobile muestra/oculta correctamente
- [ ] Grid se adapta a mobile (1 columna)

### 9. FAQ
- [ ] 4 preguntas presentes
- [ ] Funciona toggle (abrir/cerrar)

### 10. Footer
- [ ] Copyright con año 2026
- [ ] Links legales
- [ ] Redes sociales

## Checklist de Funcionalidad

| Elemento | Status | Notas |
|----------|--------|-------|
| CSS externo-linked | ✅ | styles.css |
| JS externo linked | ✅ | script.js |
| Google Fonts | ✅ | Playfair Display, Source Sans 3 |
| Smooth scroll | ✅ | En script.js |
| Animaciones scroll | ✅ | data-animate en JS |