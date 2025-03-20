'use client';
import { ModalContext } from '@/app/context/ModalContext';
import { X } from 'lucide-react';
import { useContext } from 'react';
import { ButtonText } from '../buttons/ButtonCustomText';

const DeleteConfirmUserModal = ({ data }: Record<string, any>) => {
	const { closeModal } = useContext(ModalContext);
	const handleDelete = async () => {
		console.log('delete id ' + data.id);
		data.refetch();
		closeModal();
	};
	return (
		<div className="px-4 py-2 rounded-md bg-[#E8EAED] w-lg h-72 border-1 border-primary">
			<div className="flex flex-col justify-between h-full pb-4">
				<div className="space-y-2">
					<div className="flex justify-between items-center">
						<h1 className="font-bold text-lg">
							Deseja excluir esta
							conta?
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
							Excluir esta conta do
							seu site? Ela poderá ser
							recuperada penas
							registrando-a novamente.
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
export { DeleteConfirmUserModal };
