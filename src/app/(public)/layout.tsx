import { HomeHeader } from '@/components/header/HomeHeader';
import { PublicNavBar } from '@/components/nav/PublicNavBar';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
export default async function PublicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookieStore = await cookies();
	const session = cookieStore.get('session');
	if (!session) redirect('/login');
	return (
		<div className="h-full">
			<HomeHeader />
			<div className="flex h-full">
				<div className="pt-12 h-full">
					<PublicNavBar
						options={['users', 'contracts']}
					/>
				</div>
				<div className="w-full h-full pt-16 px-36">
					{children}
				</div>
			</div>
		</div>
	);
}
