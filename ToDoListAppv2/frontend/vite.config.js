import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
        plugins: [react()],
        build: {
            outDir: 'dist',
        },
        base: "/",
        server: {
            proxy: {
                '/api': {
                    target: import.meta.env.VITE_BACKEND_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        }
    }
);
