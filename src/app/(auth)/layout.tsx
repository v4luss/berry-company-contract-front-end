import Image from 'next/image';
import bclogo from '@public/images/bclogo.png';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { setToken } from '@/mocks/token';
import { Button } from '@/components/ui/button';
export default async function AuthPage({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookieStore = await cookies();
	const session = cookieStore.get('token')?.value;

	if (session) redirect('/home');
	return (
		<div className="flex bg-[#1E1E1E]/90 bg-gradient-to-tl from-primary/40 via-transparent to-transparent text-white">
			<div className="relative">
				<Image
					src={bclogo}
					alt=""
					className="absolute size-72 mt-42 ml-24 self-center bg-blue-400"
				/>
				<svg
					className="h-screen w-2xl"
					viewBox="0 0 676 1080"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						x="-1543"
						y="-275"
						width="2219"
						height="1629"
						rx="814.5"
						fill="#EB1757"
					/>{' '}
				</svg>
			</div>
			<div className="flex flex-col justify-center items-center w-xl gap-y-12">
				{children}
			</div>
		</div>
	);
}
