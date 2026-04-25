import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
const root = path.resolve(__dirname, 'src');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': root,
      '@layouts': path.resolve(__dirname, root, 'layouts'),
      '@pages': path.resolve(__dirname, root, 'pages'),
      '@features': path.resolve(__dirname, root, 'features'),
      '@services': path.resolve(__dirname, root, 'services'),
      '@shared': path.resolve(__dirname, root, 'shared'),
      '@app': path.resolve(__dirname, root, 'app'),
      '@constants': path.resolve(__dirname, root, 'constants'),
    },
  }
})
