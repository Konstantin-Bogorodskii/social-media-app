import { Navigate, Outlet } from 'react-router-dom';

import SideImg from '@assets/images/side-img.svg';

const AuthLayout = () => {
	const isAuthenticated = false;

	return (
		<main className="flex h-screen">
			{isAuthenticated ? (
				<Navigate to="/" />
			) : (
				<>
					<section className="flex flex-1 justify-center items-center flex-col py-10">
						<Outlet />
					</section>

					<img
						src={SideImg}
						alt=""
						className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
					/>
				</>
			)}
		</main>
	);
};
export default AuthLayout;
