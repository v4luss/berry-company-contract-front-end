import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/Providers';
import { cookies } from 'next/headers';
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
	const token = cookiesStore.get('token')?.value;
	const user = token ? await verifyHS256Token(token) : undefined;

	return (
		<html lang="en">
			<body
				className={`h-[480px] ${geistSans.variable} ${geistMono.variable} antialiased bg-[#1E1E1E]`}
			>
				<Providers
					cookies={{
						email: user?.sub,
						username: user?.sub?.substring(
							0,
							user.sub.indexOf('@'),
						),
						id: randomUUID(),
					}}
				>
					{children}
				</Providers>
			</body>
		</html>
	);
}
