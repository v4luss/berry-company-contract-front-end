'use client';
import { HomeHeader } from '@/components/header/HomeHeader';
import { PublicNavBar } from '@/components/nav/PublicNavBar';
import { verifyHS256Token } from '@/lib/Auth';
import { redirect, usePathname } from 'next/navigation';
import { CookieProvider, useCookies } from '../context/CookieContext';
import path from 'path';
export default function PublicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { email } = useCookies();
	const pathname = usePathname();
	try {
		return (
			<div
				className={` ${
					pathname.startsWith('/contracts/')
						? 'bg-white text-black'
						: 'bg-[#1E1E1E] text-white'
				}`}
			>
				<HomeHeader username={email as string} />
				<div className="flex h-full">
					<div className="pt-12 h-full">
						<PublicNavBar
							options={[
								'users',
								'contracts',
							]}
						/>
					</div>
					<div className="w-full h-full pt-16 px-36">
						{children}
					</div>
				</div>
			</div>
		);
	} catch (e) {
		redirect('/login');
	}
}
