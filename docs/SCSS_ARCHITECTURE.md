# Arquitectura de Estilos SCSS

## Migración de CSS a SCSS

### Estructura de Archivos

```
src/
├── styles.scss          # Variables globales, mixins, y estilos globales
├── components/
│   ├── Card.jsx         
│   ├── Card.scss        # Estilos específicos del componente
│   ├── Header.jsx
│   ├── Header.scss
│   └── ... (cada componente con su .scss)
└── pages/
    └── ... (sin estilos específicos de página por ahora)
```

### Convenciones

1. **Variables Globales** (`src/styles.scss`):
   - Colores base
   - Espacios (padding, margin)
   - Border-radius
   - Tipografías

2. **Mixins Comunes** (`src/styles.scss`):
   - `@mixin card-style` — estilos base de tarjetas
   - `@mixin flex-center` — flexbox centrado
   - Reutilizar en múltiples componentes

3. **Estilos de Componente** (`cada componente.scss`):
   - Importar desde `styles.scss` si necesitas variables/mixins
   - Mantener estilos específicos del componente
   - Usar clases BEM o nested SCSS para claridad

### Ejemplo de Uso en Componente

```jsx
import './MyComponent.scss'

export default function MyComponent() {
  return <div className="my-component">...</div>
}
```

```scss
// MyComponent.scss
@import '../styles.scss'; // Si necesitas acceso a variables/mixins

.my-component {
  @include card-style;
  
  &__title {
    font-weight: bold;
  }
  
  &__content {
    color: $text-light;
  }
}
```

### GradualMigración de `style.css` a SCSS

- Mantener `style.css` en root por ahora (para no romper referencias legacy)
- Migrar estilos globales a `src/styles.scss`
- Extraer estilos de componente a `.scss` individuales
- Una vez migrado completamente, eliminar `style.css` y `src/styles.scss`

### Compilación

Vite con `sass` en `devDependencies` compila automáticamente `.scss` a `.css` durante el build.

```bash
npm install  # instala sass si no está presente
npm run dev  # Vite compila SCSS automáticamente
```

## Próximos Pasos

- [ ] Extraer estilos de página (Home, Stats, Ranking, etc.) a `.scss`
- [ ] Revisar y limpiar `style.css` existente
- [ ] Usar variables y mixins en más componentes
- [ ] Considerar componentes de utilidad (spacing, flexbox helpers)
