import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

declare const process:
  | {
      env?: Record<string, string | undefined>;
    }
  | undefined;

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const pagesBase = repositoryName ? `/${repositoryName}/` : '/';

export default defineConfig({
  base: pagesBase,
  plugins: [react()]
});
