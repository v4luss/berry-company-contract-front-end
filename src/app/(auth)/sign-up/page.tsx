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
import { login, register } from '@/lib/Auth';
import { ModalContext } from '@/app/context/ModalContext';
export default function SignUpPage() {
	const router = useRouter();
	const { openModal } = useContext(ModalContext);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const passwordConfirmRef = useRef<HTMLInputElement>(null);
	const registerHandler = async () => {
		if (
			emailRef?.current?.value &&
			passwordRef?.current?.value &&
			passwordConfirmRef?.current?.value
		)
			passwordRef?.current?.value ==
				passwordConfirmRef?.current?.value &&
			(await register(
				emailRef?.current?.value,
				passwordRef?.current?.value,
			))
				? router.push('/home')
				: openModal('errorModal', {
						error: 'register',
				  });
	};
	const loginHandler = async () => {
		true
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
					/>
					<InputCustom
						ref={passwordRef}
						type="regular-password-eye"
						placeholder="Confirme a senha"
						className="w-96"
					/>
					<InputCustom
						ref={passwordConfirmRef}
						type="regular-password-eye"
						placeholder="Confirme a senha"
						className="w-96"
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
						onClick={() =>
							registerHandler()
						}
						text="REGISTRAR-SE"
					/>
					<ButtonText
						type="bg-primary"
						className=""
						onClick={() => {
							router.push('/login');
						}}
						text="FAZER LOGIN"
					/>
				</div>
			</div>
		</div>
	);
}
