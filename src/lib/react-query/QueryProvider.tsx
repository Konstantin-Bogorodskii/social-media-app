import React from 'react';
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@lib/react-query/queryClient';

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	);
};

export default QueryProvider;
