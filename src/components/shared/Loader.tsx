import LoaderImg from '@assets/icons/loader.svg';

const Loader = () => (
	<div className="flex-center w-full">
		<img
			src={LoaderImg}
			alt="loader"
			width={24}
			height={24}
			className="animate-spin"
		/>
	</div>
);

export default Loader;
