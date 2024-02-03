import { ID, Query } from 'appwrite';
import { account, avatars, databases } from '@lib/appwrite/config';
import { INewUser } from '@/types/types';
import { appwriteConfig } from './../lib/appwrite/config';

import accountService from '@services/accountService';

async function getCurrentUser() {
	try {
		const currentAccount = await accountService.getAccount();

		if (!currentAccount) throw Error;

		const currentUser = await databases.listDocuments(
			appwriteConfig.databaseId,
			appwriteConfig.usersCollectionId,
			[Query.equal('accountId', currentAccount.$id)]
		);

		if (!currentUser) throw Error;

		return currentUser.documents[0];
	} catch (error) {
		console.log(error);
		return null;
	}
}

async function createUserAccount(user: INewUser) {
	try {
		const newAccount = await account.create(ID.unique(), user.email, user.password, user.name);

		if (!newAccount) throw Error;

		const avatarUrl = avatars.getInitials(user.name);

		const newUser = await saveUserToDB({
			accountId: newAccount.$id,
			name: newAccount.name,
			email: newAccount.email,
			username: user.username,
			imageUrl: avatarUrl
		});

		return newUser;
	} catch (error) {
		console.log(error);
		return error;
	}
}

async function saveUserToDB(user: {
	accountId: string;
	email: string;
	name: string;
	imageUrl: URL;
	username?: string;
}) {
	try {
		const newUser = await databases.createDocument(
			appwriteConfig.databaseId,
			appwriteConfig.usersCollectionId,
			ID.unique(),
			user
		);

		return newUser;
	} catch (error) {
		console.log(error);
	}
}

export const userService = {
	getCurrentUser,
	createUserAccount,
	saveUserToDB
};

export default userService;
