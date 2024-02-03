import React from 'react';
import ReactDOM from 'react-dom/client';

import QueryProvider from '@/lib/react-query/QueryProvider';
import { RouterProvider } from 'react-router-dom';
import router from '@/router/router';

import '@styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryProvider>
			<RouterProvider router={router} />
		</QueryProvider>
	</React.StrictMode>
);
