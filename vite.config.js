var _a;
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
var repositoryName = (_a = process.env.GITHUB_REPOSITORY) === null || _a === void 0 ? void 0 : _a.split('/')[1];
var pagesBase = repositoryName ? "/".concat(repositoryName, "/") : '/';
export default defineConfig({
    base: pagesBase,
    plugins: [react()]
});
