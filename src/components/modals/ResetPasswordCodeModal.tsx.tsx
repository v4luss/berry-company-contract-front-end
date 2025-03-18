'use client';

import { ModalContext } from '@/app/context/ModalContext';
import { useContext } from 'react';
import { Button } from '../ui/button';
type dataType = Record<string, any>;
const ResetPasswordCodeModal = ({ data }: { data: dataType }) => {
	const { closeModal } = useContext(ModalContext);
	const verifyCode = () => {
		data.setState('password');
		closeModal();
	};
	return (
		<div>
			<Button onClick={() => verifyCode()}>casd</Button>
		</div>
	);
};
export { ResetPasswordCodeModal };
