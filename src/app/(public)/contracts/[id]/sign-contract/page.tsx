'use client';

import { ModalContext } from '@/app/context/ModalContext';
import { ButtonText } from '@/components/buttons/ButtonCustomText';
import { InputCustom } from '@/components/input/InputCustom';
import { Check } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useContext, useEffect, useRef, useState } from 'react';

export default function SignPage() {
	const router = useRouter();
	const [warnings, setWarnings] = useState<string | undefined>();
	const name = useRef<HTMLInputElement>(null);
	const cpfCnpj = useRef<HTMLInputElement>(null);
	const signing = useRef<HTMLInputElement>(null);
	const { openModal } = useContext(ModalContext);
	const [isSigned, sign] = useState<boolean>(false);
	const handleSign = () => {
		sign(true);
		// setWarnings('Dados inválidos.');
		console.log(isSigned);
	};
	const params = useParams(); // Access the params directly
	const id = params.id; // Get the id from params

	// Handle loading state or undefined id
	if (!id) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			{!isSigned ? (
				<div className="flex flex-col items-center">
					<div className="pb-4">
						<h3 className="text-3xl">
							ASSINATURA
						</h3>
					</div>
					<div className="w-full space-y-6 pb-14">
						<InputCustom
							ref={name}
							type="regular"
							placeholder="Nome Completo..."
						/>
						<InputCustom
							ref={cpfCnpj}
							type="regular"
							placeholder="CPF/CNPJ..."
						/>
						<InputCustom
							ref={signing}
							type="regular"
							placeholder="Assinatura..."
						/>
					</div>
					<p className="text-primary pb-12">
						{warnings}
					</p>
					<div className="flex justify-center items-center gap-x-24 pb-24">
						<ButtonText
							className=""
							onClick={() =>
								router.push(
									'/contracts/' +
										id,
								)
							}
							text="VOLTAR"
							type="regular"
						/>
						<ButtonText
							className=""
							onClick={handleSign}
							text="ASSINAR"
							type="bg-primary"
						/>
					</div>
				</div>
			) : (
				<div>
					<div className="flex flex-col items-center gap-y-4 pb-24">
						<h3 className="text-2xl">
							CONTRATO ASSINADO
						</h3>
						<Check className="text-green-600 size-24" />
					</div>
					<div className="flex justify-center items-center gap-x-24 pb-24">
						<ButtonText
							className=""
							onClick={() =>
								router.push(
									'/contracts/' +
										id,
								)
							}
							text="VOLTAR"
							type="regular"
						/>
						<ButtonText
							className=""
							onClick={() =>
								router.push(
									'payment',
								)
							}
							text="PAGAR"
							type="bg-primary"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
