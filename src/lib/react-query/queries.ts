import { useMutation } from '@tanstack/react-query';
import { INewUser } from '@/types/types';

import userService from '@/services/userService';
import accountService from '@services/accountService';

const useCreateUserAccount = () => {
	return useMutation({
		mutationFn: (user: INewUser) => userService.createUserAccount(user)
	});
};

const useSignInAccount = () => {
	return useMutation({
		mutationFn: (user: { email: string; password: string }) =>
			accountService.signInAccount(user)
	});
};

const useSignOutAccount = () => {
	return useMutation({
		mutationFn: accountService.signOutAccount
	});
};

const queries = {
	useCreateUserAccount,
	useSignInAccount,
	useSignOutAccount
};

export default queries;
