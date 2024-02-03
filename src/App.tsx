import AuthContextProvider from '@context/AuthContext';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';

const App: React.FC = () => {
	return (
		<>
			<AuthContextProvider>
				<main className="flex h-screen">
					<Outlet />
				</main>
			</AuthContextProvider>

			<Toaster />
		</>
	);
};
export default App;
