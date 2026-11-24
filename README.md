# Asistente de Estudios

Aplicación web para organizar sesiones de estudio con apoyo de IA. Permite armar planes de estudio semanales, consultar dudas sobre conceptos, generar resúmenes, practicar con quizzes y repasar con flashcards.

## Funcionalidades

- Planes de estudio semanales (lunes a domingo) guardados por usuario.
- Chat interactivo para planificación, explicación de conceptos y resúmenes con OpenAI.
- Creación y repaso de flashcards y quizzes.
- Autenticación de usuarios y subida de archivos.
- Pruebas unitarias y de componentes con Vitest y Testing Library.

## Stack

- **Frontend / Framework:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Radix UI.
- **Backend y datos:** Convex (tiempo real), OpenAI API, NextAuth, UploadThing.
- **Testing:** Vitest, Testing Library, jsdom.

## Desarrollo local

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Configura un archivo `.env.local` con tus credenciales:
   ```env
   NEXT_PUBLIC_CONVEX_URL=...
   OPENAI_API_KEY=...
   NEXTAUTH_SECRET=...
   UPLOADTHING_TOKEN=...
   ```
3. Inicia Convex y el servidor de desarrollo:
   ```bash
   npx convex dev
   npm run dev
   ```
   Corre en `http://localhost:5000`.

### Tests

```bash
npm test
```
