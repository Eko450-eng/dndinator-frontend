import { writable } from 'svelte/store';
import type { User } from '../types';

const nullUser: User = {
	id: 0,
	username: '',
	password: '',
	email: '',
	isLoggedIn: false
};

const userStore = writable(nullUser);

export async function saveUser(user: User) {
	userStore.set({ ...user, isLoggedIn: true });
	localStorage.setItem('user', user.username);
}

export default userStore;
