'use client';
import { AddCategoryModal } from '@/components/modals/AddCategoryModal';
import { AddUserModal } from '@/components/modals/AddUserModal';
import { ConfirmContractCreationModal } from '@/components/modals/ConfirmContractCreation';
import { DeleteConfirmContractModal } from '@/components/modals/DeleteConfirmContractModal';
import { DeleteConfirmUserModal } from '@/components/modals/DeleteConfirmUserModal';
import PaymentModal from '@/components/modals/PaymentModal';
import { ResetPasswordCodeModal } from '@/components/modals/ResetPasswordCodeModal.tsx';
import { createContext, useState, ReactNode, useContext } from 'react';

// Define the type for a single modal
type Modal = {
	id: string; // Unique ID for each modal
	content: (data?: Record<string, any>) => ReactNode; // Function to render dynamic content
	data?: Record<string, any>; // Dynamic data to feed into the modal (optional)
};

// Define the type for the context value
type ModalContextType = {
	modals: Modal[]; // Array of open modals
	openModal: (id: string, data?: Record<string, any>) => void; // Function to open a modal by ID
	closeModal: () => void; // Function to close the most recent modal
};

// Create the context with a default value
const ModalContext = createContext<ModalContextType>({
	modals: [],
	openModal: () => {},
	closeModal: () => {},
});

// Define the ModalProvider component
type ModalProviderProps = {
	children: ReactNode;
};

// Predefined modal content functions
const MODAL_CONTENT: Record<string, (data?: Record<string, any>) => ReactNode> =
	{
		resetPasswordCodeModal: (data) => (
			<ResetPasswordCodeModal
				data={data as Record<string, any>}
			/>
		),
		addCategoriesModal: (data) => (
			<AddCategoryModal data={data as Record<string, any>} />
		),
		addUserModal: (data) => (
			<AddUserModal data={data as Record<string, any>} />
		),
		deleteConfirmUserModal: (data) => (
			<DeleteConfirmUserModal
				data={data as Record<string, any>}
			/>
		),
		deleteConfirmContractModal: (data) => (
			<DeleteConfirmContractModal
				data={data as Record<string, any>}
			/>
		),
		confirmContractCreationModal: (data) => (
			<ConfirmContractCreationModal
				data={data as Record<string, any>}
			/>
		),
		paymentModal: (data) => (
			<PaymentModal data={data as Record<string, any>} />
		),
	};

function ModalProvider({ children }: ModalProviderProps) {
	const [modals, setModals] = useState<Modal[]>([]);

	// Function to open a modal by ID
	const openModal = (id: string, data?: Record<string, any>) => {
		const contentFn = MODAL_CONTENT[id]; // Look up the content function by ID
		if (!contentFn) {
			console.error(`Modal with ID "${id}" not found.`);
			return;
		}

		const newModal: Modal = {
			id: Math.random().toString(36).substring(2, 9), // Generate a unique ID
			content: contentFn, // Pass the content function
			data, // Pass the data
		};
		setModals((prev) => [...prev, newModal]); // Add the new modal to the array
	};

	// Function to close the most recent modal
	const closeModal = () => {
		setModals((prev) => prev.slice(0, -1)); // Remove the last modal from the array
	};

	return (
		<ModalContext.Provider
			value={{ modals, openModal, closeModal }}
		>
			{children}
			{modals.map((modal) => (
				<Modal
					key={modal.id}
					content={modal.content}
					data={modal.data}
				/>
			))}
		</ModalContext.Provider>
	);
}

// Define the Modal component
type ModalProps = {
	content: (data?: Record<string, any>) => ReactNode; // Function to render dynamic content
	data?: Record<string, any>; // Data passed to the modal
};

function Modal({ content, data }: ModalProps) {
	const { closeModal } = useContext(ModalContext);

	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div>{content(data)} </div>
		</div>
	);
}

export { ModalContext, ModalProvider };
