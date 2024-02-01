import { Button } from '@/components/ui/button';
import { Navigate, Outlet } from 'react-router-dom';

const RootLayout = () => {
	return (
		<div>
			RootLayout
			<Button />
			{/* <Outlet />
			<Navigate /> */}
		</div>
	);
};
export default RootLayout;
