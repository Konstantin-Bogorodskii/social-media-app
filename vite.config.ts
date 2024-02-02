import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@auth': path.resolve(__dirname, './src/components/auth'),
			'@shared': path.resolve(__dirname, './src/components/shared'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@styles': path.resolve(__dirname, './src/assets/styles'),
			'@constants': path.resolve(__dirname, './src/constants'),
			'@router': path.resolve(__dirname, './src/router'),
			'@layouts': path.resolve(__dirname, './src/layouts'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@types': path.resolve(__dirname, './src/types'),
			'@lib': path.resolve(__dirname, './src/lib'),
			'@services': path.resolve(__dirname, './src/services')
		}
	}
});
