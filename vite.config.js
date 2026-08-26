import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT — `base` ka matlab:
// Agar repo ka naam "portfolio" hai  -> base: '/portfolio/'   (site: prem-2255.github.io/portfolio/)
// Agar repo ka naam "prem-2255" hai  -> base: '/'             (site: prem-2255.github.io)
// Galat base = live site pe blank white page. Repo ka naam badla to ye line bhi badalna.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
