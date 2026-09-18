import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// GitHub Pages serves this repo under /Portofilo/, but Vercel serves it from
// the domain root — only use the subpath when building in GitHub Actions.
const base = process.env.GITHUB_ACTIONS ? '/Portofilo/' : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
