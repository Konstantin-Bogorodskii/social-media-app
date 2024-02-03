import { RouteObject } from 'react-router-dom';
import PATHS from '@/constants/paths';

// components
import App from '@/App';
import SignInForm from '@auth/forms/SignInForm';
import SignUpForm from '@auth/forms/SignUpForm';

// pages
import { HomePage } from '@/pages';

// layouts
import { AuthLayout, RootLayout } from '@/layouts';

export const publicRoutes: RouteObject[] = [
	{
		element: <App />,
		children: [
			{
				path: PATHS.ROOT,
				element: <AuthLayout />,
				children: [
					{ path: PATHS.SIGN_IN, element: <SignInForm /> },
					{ path: PATHS.SIGN_UP, element: <SignUpForm /> }
				]
			}
		]
	}
];

export const privateRoutes: RouteObject[] = [
	{
		element: <App />,
		children: [
			{
				element: <RootLayout />,
				path: PATHS.ROOT,
				children: [{ path: PATHS.ROOT, element: <HomePage /> }]
			}
		]
	}
];
