export async function sendCode(value: string) {
	try {
		console.log('send verification code: ' + value);
		return true;
	} catch (e) {
		console.log('Erro ao enviar código: ' + e);
		return false;
	}
}
export async function verifyCode(value: string) {
	try {
		console.log('veify code: ' + value);
		return true;
	} catch (e) {
		console.log('Erro ao verificar código: ' + e);
		return false;
	}
}

export async function updatePassword() {
	try {
		console.log('update password');
		return true;
	} catch (e) {
		console.log('Erro ao atualizar senha: ' + e);
		return false;
	}
}
