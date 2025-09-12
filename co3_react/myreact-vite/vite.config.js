import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],   // Enables React + SWC support
  server: {
    port: 7799          // Runs dev server on http://localhost:7799
  }
})
