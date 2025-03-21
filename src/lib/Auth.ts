'use server';

import { cookies } from 'next/headers';

export async function login() {
	try {
		console.log('login');
		const cookieStore = await cookies();
		const session = cookieStore.set({
			name: 'session',
			value: JSON.stringify({ user: 'bundinha' }),
		});
		return true;
	} catch (e) {
		console.log('Erro ao fazer login: ' + e);
		return false;
	}
}
export async function logout() {
	try {
		console.log('login');
		const cookieStore = await cookies();
		cookieStore.delete('session');
		return true;
	} catch (e) {
		console.log('Erro ao fazer logout: ' + e);
		return false;
	}
}
export async function register() {
	try {
		console.log('register');
	} catch (e) {
		console.log('Erro ao fazer registro: ' + e);
	}
	return await login();
}
