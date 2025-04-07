'use client';
import { ModalContext } from '@/app/context/ModalContext';
import { X } from 'lucide-react';
import { useContext } from 'react';

const ErrorModal = ({ data }: { data: Record<string, any> }) => {
	const { closeModal } = useContext(ModalContext);
	return (
		<div className="p-6">
			<div className="flex w-full justify-end">
				{' '}
				<X />
			</div>
			<div>
				<p>
					<span className="text-red-500">
						Erro
					</span>
					: {data.error}
				</p>
			</div>
		</div>
	);
};
