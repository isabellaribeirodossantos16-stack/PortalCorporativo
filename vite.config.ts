import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base: ./' garante caminhos relativos (evita tela branca)
  base: './',
  build: {
    // Muda a pasta de saída de 'dist' para 'docs'
    // Isso permite usar a opção "Deploy from a branch" -> "/docs" no GitHub
    outDir: 'docs',
  }
});