'use server';
import { jwtVerify, createRemoteJWKSet } from 'jose';
import { api, apiPublic } from '@/services/api';
import { cookies } from 'next/headers';
import { decodeBase64 } from 'bcryptjs';
import { NextApiRequest } from 'next';
import { redirect } from 'next/navigation';

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
			name: 'token',
			value: JSON.stringify(token),
		});
		return true;
	} catch (e) {
		console.log('Erro ao fazer login: ' + e);
		return false;
	}
}
export async function loginProvider(code: string, prov: string) {
	try {
		const data = await api.get(
			`/login/oauth2/code/${prov}?code=${code}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		const cookieStore = await cookies();
		const token = await data?.headers['token'];
		cookieStore.delete('token');
		const session = cookieStore.set({
			name: 'token',
			value: JSON.stringify(token),
		});
	} catch (e) {
		console.log('Erro em guardar token.');
	}
}
export async function logout() {
	try {
		console.log('logout');
		const cookieStore = await cookies();
		cookieStore.delete('token');
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
		const base64Secret = process.env.JWT_SECRET;

		if (!base64Secret) {
			throw new Error(
				'JWT_SECRET is not defined in environment variables',
			);
		}

		// Decode from Base64 into a Buffer
		const secretKey = Buffer.from(base64Secret, 'base64');

		const { payload } = await jwtVerify(token, secretKey, {
			algorithms: ['HS256'], // Explicitly specify the algorithm
		});

		return payload;
	} catch (error) {
		console.error('JWT verification failed:', error);
		throw new Error('Invalid token');
	}
}
