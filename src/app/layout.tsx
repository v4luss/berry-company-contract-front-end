import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/Providers';
import { cookies, headers } from 'next/headers';
import { verifyHS256Token } from '@/lib/Auth';
import { randomUUID } from 'crypto';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Berry Companys Contrato',
	description:
		'Site para administração de contratos de serviços prestados pela Berry Companys.',
};
export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookiesStore = await cookies();
	const token = cookiesStore.get('token');
	let user;
	let username;
	if (token) {
		user = token
			? await verifyHS256Token(
					JSON.parse(token.value).access_token,
			  )
			: undefined;
		username = user?.sub?.substring(0, user.sub.indexOf('@'));
	}

	return (
		<html lang="en">
			<body
				className={` ${geistSans.variable} ${geistMono.variable} antialiased `}
			>
				<Providers
					cookies={{
						email: user?.sub,
						username: username,
						id: randomUUID(),
						role: user?.role as string,
					}}
				>
					{children}
				</Providers>
			</body>
		</html>
	);
}
