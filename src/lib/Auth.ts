'use server';

import { api, apiPublic } from '@/services/api';
import { cookies } from 'next/headers';

export async function login() {
	try {
		console.log('login');
		// const response = await apiPublic.post('/login', {});

		return true;
	} catch (e) {
		console.log('Erro ao fazer login: ' + e);
		return false;
	}
}
export async function logout() {
	try {
		console.log('login');
		localStorage.removeItem('token');
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
