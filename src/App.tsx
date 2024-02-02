import { RouterProvider } from 'react-router-dom';
import router from '@/router/router';

import { Toaster } from '@/components/ui/toaster';

const App: React.FC = () => {
	return (
		<>
			<main className="flex h-screen">
				<RouterProvider router={router} />
			</main>
			<Toaster />
		</>
	);
};
export default App;
