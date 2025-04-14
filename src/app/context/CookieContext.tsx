// app/providers/cookie-provider.tsx
'use client';

import { createContext, useContext } from 'react';

type CookieContextType = {
	email?: string;
	id?: string;
	username?: string;
	role?: string;
};

const CookieContext = createContext<CookieContextType>({});

export function CookieProvider({
	cookies,
	children,
}: {
	cookies: CookieContextType;
	children: React.ReactNode;
}) {
	return (
		<CookieContext.Provider value={cookies}>
			{children}
		</CookieContext.Provider>
	);
}

export function useCookies() {
	return useContext(CookieContext);
}
