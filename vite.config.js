import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        refSugar: true
      }
    })
  ],
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'src/assets/scss/base/color';
          @use 'src/assets/scss/base/typography';

          @use 'src/assets/scss/utils/breakpoint';
        `
      }
    }
  }
});
