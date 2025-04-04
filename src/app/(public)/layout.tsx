import { HomeHeader } from '@/components/header/HomeHeader';
import { PublicNavBar } from '@/components/nav/PublicNavBar';
import { verifyHS256Token } from '@/lib/Auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
export default async function PublicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookieStore = await cookies();
	const session = cookieStore.get('token')?.value;

	try {
		const username = await verifyHS256Token(session as string);

		return (
			<div className="h-full">
				<HomeHeader username={username.sub as string} />
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
