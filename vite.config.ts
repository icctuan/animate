import { defineConfig, ConfigEnv, UserConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ command, mode }: ConfigEnv): UserConfig => {

  return {
    envPrefix: 'VITE_',
    plugins: [react()],
    server: {
      // host: 'dev.icctuan.animate.cn',
      port: 5564,
      open: true
    }
  }
}
