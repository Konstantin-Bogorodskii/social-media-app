import { account } from '@lib/appwrite/config';

async function getAccount() {
	try {
		const currentAccount = await account.get();

		return currentAccount;
	} catch (error) {
		console.log(error);
	}
}

async function signInAccount(user: { email: string; password: string }) {
	try {
		const session = await account.createEmailSession(user.email, user.password);

		return session;
	} catch (error) {
		console.log(error);
	}
}

async function signOutAccount() {
	try {
		const session = await account.deleteSession('current');

		return session;
	} catch (error) {
		console.log(error);
	}
}

export const accountService = {
	getAccount,
	signInAccount,
	signOutAccount
};

export default accountService;
