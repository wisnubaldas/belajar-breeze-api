import { defineConfig } from 'vite';
import vituum from 'vituum'
import pug from '@vituum/vite-plugin-pug'
import path from 'path';

export default defineConfig({
    // root: './frontend',
    base: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
    build: {
        outDir: 'dist', // Output untuk build
        rollupOptions: {
            input: [
                'src/pages/index.pug',
                'src/pages/auth/login.pug', // Update the path to the login page
            ],
        },
    },
    plugins: [
        vituum(), // Plugin utama Vituum
        pug(), // Plugin untuk Pug
    ],
    resolve: {
        alias: {
            '@styles': '/styles',  // Alias untuk folder styles
            '@assets': '/assets',  // Alias untuk folder assets
            '@scripts': '/script', // Alias untuk folder scripts
            '@plugins': '/plugins', // Alias untuk folder plugins
            '@components': '/src/components', // Alias untuk komponen
            '@pages': '/src/pages', // Alias untuk halaman
            'ziggy-js': path.resolve('../vendor/tightenco/ziggy'),
        },
    },
    server: {
        port: 3000, // Port server dev
        open: true, // Membuka browser otomatis saat server berjalan
    },
});
