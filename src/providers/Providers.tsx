'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ModalProvider } from '@/app/context/ModalContext';
import { CookieProvider } from '@/app/context/CookieContext';

const queryClient = new QueryClient();

export function Providers({
	children,
	cookies,
}: {
	children: React.ReactNode;
	cookies: {
		email?: string | undefined;
	};
}) {
	return (
		<QueryClientProvider client={queryClient}>
			<ModalProvider>
				<CookieProvider cookies={cookies}>
					{children}
				</CookieProvider>
			</ModalProvider>
		</QueryClientProvider>
	);
}
