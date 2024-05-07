import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgrPlugin from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
    build: {
        outDir: 'build',
    },
    plugins: [
        react(),
        reactRefresh(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
                // ...svgr options (https://react-svgr.com/docs/options/)
            },
        }),
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    resolve: {
        alias: [
            { find: 'src', replacement: path.resolve(__dirname, 'src') },
        ],
    },
})
