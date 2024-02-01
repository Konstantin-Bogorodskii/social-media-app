import { createBrowserRouter } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '@/router/routes';

const router = createBrowserRouter(publicRoutes);

export default router;
