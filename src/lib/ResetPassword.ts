export async function sendCode() {
	try {
		console.log('send verification code');
		return true;
	} catch (e) {
		console.log('Erro ao enviar código: ' + e);
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
