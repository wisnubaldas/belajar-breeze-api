import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vituum from 'vituum'
import pug from '@vituum/vite-plugin-pug'

export default defineConfig({
    plugins: [
        vituum(), 
        pug({
            root: './src'
        }),
        laravel({
            input: [
                ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@': './src',
        },
    },
});
