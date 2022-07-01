import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteSvgLoader from 'vite-svg-loader';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'docs'),
      'buffer': 'buffer',
      'process': 'process',
      'util': 'rollup-plugin-node-polyfills/polyfills/util',
      'events': 'rollup-plugin-node-polyfills/polyfills/events',
      'stream': 'rollup-plugin-node-polyfills/polyfills/stream',
      'path': 'rollup-plugin-node-polyfills/polyfills/path',
      'querystring': 'rollup-plugin-node-polyfills/polyfills/qs',
      'url': 'rollup-plugin-node-polyfills/polyfills/url',
      'os': 'rollup-plugin-node-polyfills/polyfills/os'
    }
  },
  plugins: [
    vue(),
    viteSvgLoader({
      defaultImport: 'component',
      svgo: false
    })
  ],
  server: {
    port: 9200
  }
});
