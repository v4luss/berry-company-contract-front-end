import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/Providers';
import { cookies } from 'next/headers';
import { verifyHS256Token } from '@/lib/Auth';

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
	const token = cookiesStore.get('session')?.value;
	const email = token ? (await verifyHS256Token(token)).sub : undefined;
	return (
		<html lang="en">
			<body
				className={`h-[480px] ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Providers cookies={{ email }}>
					{children}
				</Providers>
			</body>
		</html>
	);
}
