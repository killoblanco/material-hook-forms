import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'MaterialHookForms',
      fileName: 'material-hook-forms',
    },
    rollupOptions: {
      external: [
        '@emotion/react',
        '@emotion/styled',
        '@mui/material',
        'react', 
        'react-dom'
      ],
      output: {
        globals: {
          '@emotion/react': 'Emotion',
          '@emotion/styled': 'Styled',
          '@mui/material': 'Mui',
          'react': 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
