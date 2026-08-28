import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],

    server: {
        port: 3000,
        open: false
    },

    build: {
        outDir: 'build'
    },

    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.js',
        css: false,
        // Valeurs factices : les tests ne doivent pas dependre d'un .env local,
        // et src/config leve une erreur si une variable manque.
        env: {
            VITE_API_BASE_URL: 'http://localhost:8000/api',
            VITE_SOCKET_URL: 'http://localhost:4000',
            VITE_STRIPE_PK: 'pk_test_dummy',
            VITE_PUBLIC_URL: 'http://localhost:3000'
        }
    }
})
