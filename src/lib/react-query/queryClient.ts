import { DefaultOptions, QueryClient } from '@tanstack/react-query';
import { CACHE_TIME, STALE_TIME } from '@/constants/api';

const queryConfig: DefaultOptions = {
	queries: {
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		retry: 2,
		gcTime: CACHE_TIME,
		staleTime: STALE_TIME
	}
};

const queryClient = new QueryClient({ defaultOptions: queryConfig });

export default queryClient;
