import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import 'dotenv/config'

export default defineConfig({

    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
                'resources/coreui/src/index.jsx'
            ],
            refresh: true,
        }),
        react(),
    ],
    build: {
        minify: false,
    },
    server: {
        hmr: {
            host: 'localhost',
        },
        host: '192.168.10.10',
        watch: {
            usePolling: true,
        },
    },

});
