import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/desafioComponentesVueJs/' // reemplaza 'nombre-de-tu-repositorio' por el nombre de tu repo
});
