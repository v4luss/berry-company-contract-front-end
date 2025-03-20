'use client';

import { Newspaper, Rocket, X } from 'lucide-react';
import { SelectComponent } from '../SelectComponent';
import { ButtonText } from '../buttons/ButtonCustomText';
import { useContext, useState } from 'react';
import { ModalContext } from '@/app/context/ModalContext';

const AddCategoryModal = ({ data }: { data: Record<string, any> }) => {
	const [dev, setDev] = useState<boolean>();
	const [client, setClient] = useState<boolean>();
	const [message, setMessage] = useState<string | undefined>();
	const { closeModal } = useContext(ModalContext);
	const values = [
		{
			value: dev,
			setValue: setDev,
			Icon: <Rocket className="text-primary" />,
		},
		{
			value: client,
			setValue: setClient,
			Icon: <Newspaper className="text-primary" />,
		},
	];
	const handleAddCategories = async () => {
		data.refetch();
		closeModal();
	};
	const validateInput = () => {
		if (!dev && !client) {
			setMessage('Atribua uma categoría ao usuário.');
			return;
		}
		handleAddCategories();
	};
	return (
		<div className="bg-[#E8EAED] px-4 py-2 rounded-md border-1 space-y-4 border-primary">
			<div className="flex justify-between w-full">
				<h1 className="font-bold text-lg">
					Sete as categorias
				</h1>
				<X
					onClick={() => closeModal()}
					className="cursor-pointer"
				/>
			</div>
			<p className="text-gray-600">
				Marque quais categorias pretende setar para este
				usuário, isso irá liberar para ele.
			</p>
			<h1 className="font-bold">Usuário</h1>
			<p className="text-sm">@{data.name}</p>
			<div>
				<h1 className="font-bold">
					Selecione os cargos:
				</h1>
			</div>
			<SelectComponent values={values as any} />
			<div className="w-full flex justify-between">
				<p className="text-primary">{message}</p>
				<ButtonText
					type="bg-primary"
					className=""
					onClick={() => validateInput()}
					text="ADICIONAR"
				/>
			</div>
		</div>
	);
};

export { AddCategoryModal };
