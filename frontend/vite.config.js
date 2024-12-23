import { defineConfig } from 'vite';
import vituum from 'vituum'
import pug from '@vituum/vite-plugin-pug'
import pages from 'vituum/plugins/pages.js'
import imports from 'vituum/plugins/imports.js'
import path from 'path';
export default defineConfig({
    // root: './frontend',
    base: process.env.NODE_ENV === 'production' ? '/' : '/',
    build: {
        outDir: 'dist', // Output untuk build
        sourcemap: false, // Disable source maps
        rollupOptions: {
            input: [
                'script/MyApp.js',
                'src/pages/index.pug',
                'src/pages/auth/login.pug', // Update the path to the login page
            ],
        },
    },
    plugins: [
        vituum({
            templates: ['pug'], // Aktifkan template engine tertentu
            assets: true,              // Aktifkan pengelolaan asset seperti CSS/JS
            layouts: true,             // Aktifkan layout manager
        }), // Plugin utama Vituum
        pug({
            pretty: true, // Pretty print HTML
        }), // Plugin untuk Pug
    ],
    resolve: {
        alias: {
            '@styles': '/src/styles',  // Alias untuk folder styles
            '@assets': '/src/assets',  // Alias untuk folder assets
            '@scripts': '/src/script', // Alias untuk folder scripts
            '@plugins': '/src/plugins', // Alias untuk folder plugins
            '@components': '/src/components', // Alias untuk komponen
            '@pages': '/src/pages', // Alias untuk halaman
            'ziggy-js': path.resolve('../vendor/tightenco/ziggy'),
        },
    },
    server: {
        port: 3000, // Port server dev
        open: true, // Membuka browser otomatis saat server berjalan
    },
    preview: {
        port: 8080, // Port server prod
        open: false, // Tidak membuka browser otomatis saat server berjalan
        root: 'dist', // Root directory for the preview server
        base: '/', // Base URL for the preview server
    },
});
