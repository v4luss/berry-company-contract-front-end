'use client';
import { ButtonIcon } from '@/components/buttons/ButtonCustomIcon';
import { InputCustom } from '@/components/input/InputCustom';
import Image from 'next/image';
import { useContext, useRef, useState } from 'react';
import google from '@public/images/google.png';
import dc from '@public/images/dc.png';
import br from '@public/images/br.png';
import Link from 'next/link';
import { ButtonText } from '@/components/buttons/ButtonCustomText';
import { useRouter } from 'next/navigation';
import { ModalContext } from '@/app/context/ModalContext';
import { sendCode, updatePassword } from '@/lib/ResetPassword';
export default function PasswordPage() {
	const router = useRouter();
	const modalId = 'resetPasswordCodeModal';
	const [state, setState] = useState<string>('email');
	const [code, setCode] = useState<string>('');
	const [currentEmail, setEmail] = useState<string | undefined>();
	const email = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);
	const passwordConfirm = useRef<HTMLInputElement>(null);
	const { openModal } = useContext(ModalContext);
	const sendCodeToEmail = async () => {
		setEmail(email.current?.value);
		(await sendCode(email.current?.value as string))
			? openModal(modalId, {
					setState,
					setCode,
					email: email.current?.value as string,
			  })
			: openModal('errorModal', {
					error: 'Erro ao enviar código, verifique os dados e tente novamente. Se o problema persistir, entre em contato conosco.',
			  });
	};
	const sendNewPassword = async () => {
		if (password.current?.value == passwordConfirm.current?.value)
			(await updatePassword(
				code,
				currentEmail as string,
				password.current?.value as string,
			))
				? router.push('/login')
				: openModal('errorModal', {
						error: 'Erro ao atualizar senha, verifique os dados e tente novamente. Se o problema persistir, entre em contato conosco',
				  });
	};
	return (
		<div className="flex flex-col justify-between h-[550px]">
			<div className="flex justify-end">
				<ButtonIcon
					Icon={
						<Image
							src={br}
							alt=""
							className="size-full"
						/>
					}
					className="w-10 h-10"
					onClick={() => {}}
				/>
			</div>
			{state == 'email' ? (
				<div className="space-y-16 pb-8 w-96">
					<div className="flex flex-col gap-y-6 items-center">
						<h2>RECUPERE SUA SENHA</h2>
						<p>
							Insira seu email e
							receba seu código para
							sua senha.
						</p>
					</div>
					<div className=" gap-y-4 flex flex-col items-center">
						<InputCustom
							ref={email}
							type="regular"
							placeholder="Email"
						/>

						<p>
							Leia os Termos{' '}
							<Link
								href={'/terms'}
								className="text-primary"
							>
								Clique aqui
							</Link>
						</p>
					</div>
					<div className="flex justify-center gap-x-8">
						<ButtonText
							type="regular"
							className=""
							onClick={() => {
								router.push(
									'/login',
								);
							}}
							text="CANCELAR"
						/>
						<ButtonText
							type="bg-primary"
							className=""
							onClick={() =>
								sendCodeToEmail()
							}
							text="CONFIRMAR"
						/>
					</div>
				</div>
			) : state == 'password' ? (
				<div className="space-y-16 pb-8 w-96">
					<div className="flex flex-col gap-y-6 items-center">
						<h2>RECUPERE SUA SENHA</h2>
						<p>
							Insira seu email e
							receba seu código para
							sua senha.
						</p>
					</div>
					<div className=" gap-y-4 flex flex-col items-center">
						<InputCustom
							ref={password}
							type="regular-password-eye"
							placeholder="Nova Senha"
						/>
						<InputCustom
							ref={passwordConfirm}
							type="regular-password-eye"
							placeholder="Confirme a Senha"
						/>
						<p>
							Leia os Termos{' '}
							<Link
								href={
									'/new-password'
								}
								className="text-primary"
							>
								Clique aqui
							</Link>
						</p>
					</div>
					<div className="flex justify-center gap-x-8">
						<ButtonText
							type="regular"
							className=""
							onClick={() => {
								router.push(
									'/login',
								);
							}}
							text="CANCELAR"
						/>
						<ButtonText
							type="bg-primary"
							className=""
							onClick={() =>
								sendNewPassword()
							}
							text="ENVIAR"
						/>
					</div>
				</div>
			) : (
				<div className="space-y-16 pb-36 w-96">
					<div className="flex flex-col gap-y-6 items-center">
						<h2>DADOS INCORRETOS</h2>
						<p>Volte e tente novamente.</p>
					</div>

					<div className="flex justify-center gap-x-8">
						<ButtonText
							type="bg-primary"
							className=""
							onClick={() => {
								router.push(
									'/login',
								);
							}}
							text="VOLTAR"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
