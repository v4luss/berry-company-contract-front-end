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
import { redirect, useRouter } from 'next/navigation';
import { login } from '@/lib/Auth';
import { ModalContext } from '@/app/context/ModalContext';
export default function LoginPage() {
	const router = useRouter();
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const { openModal } = useContext(ModalContext);
	const loginHandler = async () => {
		if (emailRef?.current?.value && passwordRef.current?.value)
			(await login(
				emailRef.current.value,
				passwordRef.current.value,
			))
				? router.push('/home')
				: openModal('errorModal', { error: 'login' });
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
								loginHandler()
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
								loginHandler()
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
