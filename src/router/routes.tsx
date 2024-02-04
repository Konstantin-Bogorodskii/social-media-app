import { RouteObject } from 'react-router-dom';
import PATHS from '@/constants/paths';

// components
import App from '@/App';
import SignInForm from '@auth/forms/SignInForm';
import SignUpForm from '@auth/forms/SignUpForm';

// pages
import { HomePage, NotFoundPage } from '@/pages';

// layouts
import { AuthLayout, RootLayout } from '@/layouts';

const routes: RouteObject[] = [
	{
		element: <App />,
		children: [
			{
				element: <AuthLayout />,
				children: [
					{ path: PATHS.SIGN_IN, element: <SignInForm /> },
					{ path: PATHS.SIGN_UP, element: <SignUpForm /> }
				]
			},
			{
				element: <RootLayout />,
				children: [{ path: PATHS.HOME, element: <HomePage /> }]
			}
		]
	},
	{
		path: PATHS.NOT_FOUND,
		element: <NotFoundPage />
	}
];

export default routes;
