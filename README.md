# 7days-stats

Requisitos

- Node.js 18+

Instalación

```bash
# clona el repo (si no lo has hecho)
git clone <repo-url>
cd 7days-stats

# instala dependencias
npm install
```

Desarrollo (servidor local)

```bash
# arranca Vite en modo dev
npm run dev
```

Comprobaciones y linting

```bash
# ejecutar ESLint (ver advertencias/errores)
npm run lint

# intentar arreglar automáticamente problemas de formato
npm run lint:fix

# comprobación de tipos TypeScript
npx tsc --noEmit
```

Build y previsualización

```bash
# compilar assets para producción
npm run build

# previsualizar build (servidor estático)
npm run preview
```

Archivos importantes

- `src/main.tsx` — punto de entrada
- `src/App.tsx` — rutas y layout principal
- `src/components` — componentes reutilizables (cada uno con su `.scss`)
- `src/pages` — vistas/ rutas
- `style.css` — estilos globales

Notas

- Si trabajas en Windows, asegúrate de que tu editor use finales de línea LF para evitar cambios de formato con Prettier/ESLint.
- `src/utils/api.ts` contiene llamadas de ejemplo a endpoints JSON locales; adáptalo a tu API real.
