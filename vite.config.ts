import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [react(), vike({
    prerender: true,
  })],
  resolve: {
    alias: {
      '@/': './',
    },
  },
  optimizeDeps: { include: ['cross-fetch', 'react/jsx-runtime'] }
}

export default config
