import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const useHttps = process.env.HTTPS === 'true'
  return {
    plugins: [
      react(),
      ...(useHttps ? [mkcert()] : []),
    ],
    server: {
      host: true,
      https: useHttps ? {} : undefined,
    },
    preview: {
      host: true,
      https: useHttps ? {} : undefined,
    },
  }
})
