import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // A configuração base: './' é fundamental para o GitHub Pages.
  // Ela garante que o HTML busque o JS e CSS na mesma pasta relativa,
  // e não na raiz absoluta do domínio.
  base: './', 
});