import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: '/Sahils-portfolio/',
})



// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig(({ mode }) => ({
//   plugins: [react(), tailwindcss()],
  // base: mode === 'production' ? '/Sahils-portfolio/' : '/',

// }))