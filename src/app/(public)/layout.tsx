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
		<div>
			<HomeHeader />
			<div>
				<div className="pt-12">
					<PublicNavBar
						options={[
							'contracts',
							'rocket',
						]}
					/>
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
}
