import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 ESTA ES LA CLAVE: usar rutas relativas
export default defineConfig({
  base: "./",
  plugins: [react()],
})
