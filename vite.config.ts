import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
      },
    },
    define: {
      // Define your environment variable here
      'process.env.VITE_API_ZIP_URL': JSON.stringify(env.VITE_API_ZIP_URL),
      'process.env.VITE_API_MULTIMC_URL': JSON.stringify(env.VITE_API_MULTIMC_URL),
      'process.env.VITE_API_API_URL': JSON.stringify(env.VITE_API_API_URL),
      // Add more variables as needed
    },
  };
});
