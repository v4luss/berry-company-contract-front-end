'use client';
import { ModalContext } from '@/app/context/ModalContext';
import { X } from 'lucide-react';
import { useContext } from 'react';
import { ButtonText } from '../buttons/ButtonCustomText';

const DeleteConfirmContractModal = ({ data }: Record<string, any>) => {
	const { closeModal } = useContext(ModalContext);
	const handleDelete = async () => {
		console.log('delete id ' + data.id);
		data.refetch();
		closeModal();
	};
	return (
		<div className="px-4 py-2 rounded-md bg-[#E8EAED] w-lg h-72 border-1 border-primary text-black">
			<div className="flex flex-col justify-between h-full pb-4">
				<div className="space-y-2">
					<div className="flex justify-between items-center">
						<h1 className="font-bold text-lg">
							Deseja excluir este
							contrato?
						</h1>
						<X
							className="cursor-pointer"
							onClick={() =>
								closeModal()
							}
						/>
					</div>
					<div>
						<p>
							Exclua esse contrato e
							mantenha o dashboard
							organizado.
						</p>
					</div>
				</div>
				<ButtonText
					className=" w-fit flex self-end"
					onClick={() => handleDelete()}
					text="EXCLUIR"
					type="bg-primary"
				/>
			</div>
		</div>
	);
};
export { DeleteConfirmContractModal };
