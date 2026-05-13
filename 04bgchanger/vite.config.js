import { defineConfig } from 'vite'
// import tailwind from '@tailwindcss/vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),
//     tailwindcss(),
//   ],
// })

import tailwindcss from '@tailwindcss/vite'  // ← naam match karo
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],  // ✅
})
