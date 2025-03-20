'use client'; // Mark this as a Client Component

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ModalProvider } from '@/app/context/ModalContext';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<ModalProvider>{children}</ModalProvider>
		</QueryClientProvider>
	);
}
