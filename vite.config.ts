import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      copyDtsFiles: true,
    }),
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
        'react/jsx-runtime',
        'react-dom',
        'react-hook-form'
      ],
      output: {
        globals: {
          '@emotion/react': 'Emotion',
          '@emotion/styled': 'Styled',
          '@mui/material': 'Mui',
          'react': 'React',
          'react/jsx-runtime': 'JSXRuntime',
          'react-dom': 'ReactDOM',
          'react-hook-form': 'ReactHookForm'
        }
      }
    }
  }
})
