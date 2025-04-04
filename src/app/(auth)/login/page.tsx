'use client';
import { ButtonIcon } from '@/components/buttons/ButtonCustomIcon';
import { InputCustom } from '@/components/input/InputCustom';
import Image from 'next/image';
import { useContext, useEffect, useRef, useState } from 'react';
import google from '@public/images/google.png';
import dc from '@public/images/dc.png';
import br from '@public/images/br.png';
import Link from 'next/link';
import { ButtonText } from '@/components/buttons/ButtonCustomText';
import { redirect, useRouter } from 'next/navigation';
import { login, loginProvider } from '@/lib/Auth';
import { ModalContext } from '@/app/context/ModalContext';
import GoogleLoginButton from '@/components/buttons/GoogleLoginButton';
import { api, apiPublic } from '@/services/api';
export default function LoginPage() {
	const router = useRouter();
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const [backendUrl, setBackendUrl] = useState<string>('');
	const [prov, setProv] = useState<string | undefined>();
	const { openModal } = useContext(ModalContext);
	const handleSetToken = async () => {
		const token =
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMiIsImlhdCI6MTc0Mzc5NjQwOSwiZXhwIjoxNzQzODgyODA5fQ.wenDJgV2VZXN3mQwYLkNj9w8oBwc2AY9yIXZfVQbxCY';
		document.cookie = `token=${token}; path=/; max-age=${
			60 * 60 * 24
		}`;
		console.log('Token set in client cookie');
	};

	const loginHandler = async () => {
		handleSetToken();
		router.push('/home');
		// if (emailRef?.current?.value && passwordRef.current?.value)
		// 	(await login(
		// 		emailRef.current.value,
		// 		passwordRef.current.value,
		// 	))
		// 		? router.push('/home')
		// 		: openModal('errorModal', { error: 'login' });
	};
	const redirectToGoogle = () => {
		setProv('google');
		window.location.href = `${backendUrl}/oauth2/authorization/google`;
	};
	const redirectToDiscord = () => {
		setProv('discord');
		window.location.href = `${backendUrl}/oauth2/authorization/discord`;
	};

	useEffect(() => {
		// Handle the response from the backend after successful login
		const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.has('code')) {
			const code = urlParams.get('code');

			// Call the backend to exchange the code for a JWT

			loginProvider(code as string, prov as string);
		}
		setBackendUrl(process.env.BACKEND_URL as string);
	}, []);
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
			<div className="space-y-16">
				<div className="flex flex-col gap-y-6 items-center">
					<h2>CONTRATO</h2>
					<div className="space-x-8">
						<ButtonIcon
							Icon={
								<Image
									src={dc}
									alt=""
									className="size-full"
								/>
							}
							className=" w-10 h-10"
							onClick={() =>
								redirectToDiscord()
							}
						/>

						<ButtonIcon
							Icon={
								<Image
									src={
										google
									}
									alt=""
									className="size-full"
								/>
							}
							className="w-10 h-10"
							onClick={() =>
								redirectToGoogle()
							}
						/>
					</div>
				</div>
				<div className=" gap-y-4 flex flex-col items-center">
					<InputCustom
						ref={emailRef}
						type="regular"
						placeholder="Email"
						className="w-96"
					/>
					<InputCustom
						ref={passwordRef}
						type="regular-password-eye"
						placeholder="Confirme a senha"
						className="w-96"
					/>

					<p>
						Esqueceu a senha?{' '}
						<Link
							href={'/new-password'}
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
						onClick={() => loginHandler()}
						text="FAZER LOGIN"
					/>
					<ButtonText
						type="bg-primary"
						className=""
						onClick={() => {
							router.push('/sign-up');
						}}
						text="REGISTRAR-SE"
					/>
				</div>
			</div>
		</div>
	);
}
