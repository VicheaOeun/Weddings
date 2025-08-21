import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    tailwindcss(),
  ],
})

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'khmer-muol': ['"Khmer OS Muol"', 'sans-serif'],
        'khmer-pali': ['"Khmer OS Muol Pali"', 'sans-serif'],
      },
    },
  },
}
