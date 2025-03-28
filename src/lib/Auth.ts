'use server';
import { jwtVerify, createRemoteJWKSet } from 'jose';
import { api, apiPublic } from '@/services/api';
import { cookies } from 'next/headers';
import { decodeBase64 } from 'bcryptjs';

export async function login(email: string, password: string) {
	try {
		const index = email.indexOf('@');
		const username = email.substring(0, index);
		const res = await apiPublic.post('/login', {
			username,
			email,
			password,
		});
		const token = res.data;
		const cookieStore = await cookies();
		const session = cookieStore.set({
			name: 'session',
			value: JSON.stringify({ token }),
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
export async function register(email: string, password: string) {
	try {
		const index = email.indexOf('@');
		const username = email.substring(0, index);
		await apiPublic.post('/sign-up', {
			username,
			email,
			password,
		});
	} catch (e) {
		console.log('Erro ao fazer registro: ' + e);
	}
	return await login(email, password);
}
export async function verifyHS256Token(token: string) {
	try {
		const secret = Buffer.from(process.env.JWT_SECRET!, 'base64');
		const secretKey = new Uint8Array(secret);

		const { payload } = await jwtVerify(token, secretKey, {
			algorithms: ['HS256'], // Explicitly specify the algorithm
		});

		return payload;
	} catch (error) {
		console.error('JWT verification failed:', error);
		throw new Error('Invalid token');
	}
}
