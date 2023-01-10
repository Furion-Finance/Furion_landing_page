import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  include: ['**/.{vue,js}', '*/**/*.{vue,js}'],
  theme: {},
  plugins: [require('windicss/plugin/line-clamp')],
});
