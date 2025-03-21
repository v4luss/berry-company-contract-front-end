'use client';
import { HomeHeader } from '@/components/header/HomeHeader';
import { PublicNavBar } from '@/components/nav/PublicNavBar';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function PublicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [token, setToken] = useState<string | undefined>();

	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		setToken(storedToken as string);
	}, []);

	if (!token) redirect('/login');
	return (
		<div className="h-full">
			<HomeHeader />
			<div className="flex h-full">
				<div className="pt-12 h-full">
					<PublicNavBar
						options={[
							'users',
							'rocket',
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
}
