'use client';

import { ModalContext } from '@/app/context/ModalContext';
import { useContext, useState } from 'react';
import { Button } from '../ui/button';
import { OTPInput } from 'input-otp';
import { OTPInputCustom } from '../input/OTPInputCustom';
import { sendCode } from '@/lib/ResetPassword';
import { X } from 'lucide-react';
type dataType = Record<string, any>;
const ResetPasswordCodeModal = ({ data }: { data: dataType }) => {
	const { closeModal } = useContext(ModalContext);
	const [value, setValue] = useState<string>('');
	const verifyCode = async () => {
		await sendCode(value);
		data.setState('password');
		closeModal();
	};
	return (
		<div className="flex flex-col bg-[#E8EAED] rounded-sm p-4 gap-y-4 border-primary border-1 items-center text-black">
			<div className="flex justify-between w-full">
				<p className="font-bold">
					Insira o código enviado em seu Email
				</p>
				<X onClick={() => closeModal()} />
			</div>
			<div className=" flex flex-col items-center w-[420px]">
				<p className="text-gray-600 text-sm font-bold">
					Acesse seu Email e verifique sua caixa
					de entrada, enviamos um código de
					verificação pra você alterar a senha da
					sua conta.
				</p>
			</div>
			<div className="flex flex-col items-center gap-y-4">
				<OTPInputCustom
					value={value}
					setValue={setValue}
				/>
				<Button onClick={() => verifyCode()}>
					CONFIRMAR
				</Button>
			</div>
		</div>
	);
};
export { ResetPasswordCodeModal };
