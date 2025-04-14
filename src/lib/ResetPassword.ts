'use server';
import { api, apiPublic } from '@/services/api';

export async function sendCode(email: string) {
	try {
		const response = await apiPublic('/send-code', {
			method: 'POST',
			data: { email },
		});
		console.log(response.data);
		return true;
	} catch (e) {
		console.log('Erro ao enviar código: ' + e);
		return false;
	}
}
export async function verifyCode(code: string, email: string) {
	try {
		await apiPublic('/verify-code', {
			method: 'POST',
			data: { email, code },
		});
		return true;
	} catch (e) {
		console.log('Erro ao verificar código: ' + e);
		return false;
	}
}

export async function updatePassword(
	code: string,
	email: string,
	password: string,
) {
	try {
		await apiPublic('/reset-password', {
			method: 'POST',
			data: { email, code, password },
		});
		return true;
	} catch (e) {
		console.log('Erro ao atualizar senha: ' + e);
		return false;
	}
}
