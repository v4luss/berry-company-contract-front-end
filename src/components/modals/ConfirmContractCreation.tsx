'use client';

import { Clipboard, X } from 'lucide-react';
import { ButtonText } from '../buttons/ButtonCustomText';
import { useContext } from 'react';
import { ModalContext } from '@/app/context/ModalContext';

const ConfirmContractCreationModal = ({ data }: Record<string, any>) => {
	const { closeModal } = useContext(ModalContext);
	const fullUrl = `${window.location.origin}/contracts/${data.id}`;
	return (
		<div className="px-4 py-2 rounded-sm bg-[#E8EAED] border-1 border-primary w-lg space-y-4 text-black">
			<div className="flex justify-between items-center">
				<h1 className="font-bold">Contrato criado!</h1>{' '}
				<X
					className="cursor-pointer"
					onClick={() => closeModal()}
				/>
			</div>
			<div>
				<p className="text-gray-600">
					Envie o link logo abaixo do contrato
					criado para que o cliente possa ler
					todas as informações para assinar e
					pagar.
				</p>
			</div>
			<div>
				<h1 className="font-bold">Contrato</h1>
			</div>
			<div>
				<p className="text-gray-600">{data.name}</p>
			</div>
			<div>Copie o link a seguir:</div>
			<div className="rounded-sm border-1 border-primary flex justify-between p-2">
				<p className="text-gray-400">{fullUrl}</p>
				<Clipboard className="text-primary" />
			</div>
			<div className="flex justify-end">
				<ButtonText
					className=""
					onClick={() => closeModal()}
					text="VOLTAR"
					type="bg-primary"
				/>
			</div>
		</div>
	);
};
export { ConfirmContractCreationModal };
