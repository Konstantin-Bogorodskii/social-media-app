import { Link } from 'react-router-dom';
import PATHS from '@/constants/paths';

function NotFound() {
	return (
		<div className="flex-center h-screen flex-col">
			<h2 className="mb-4">Page Not Found...</h2>

			<Link to={PATHS.HOME}>Go to the Home Page.</Link>
		</div>
	);
}

export default NotFound;
