// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig(({ mode }) => ({
//   plugins: [react(), tailwindcss()],
  // base: mode === 'production' ? '/Sahils-portfolio/' : '/',

// }))
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Sahils-portfolio/',
})
