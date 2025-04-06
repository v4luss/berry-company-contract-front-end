'use client';
import Image from 'next/image';
import { ButtonIcon } from '../buttons/ButtonCustomIcon';
import { Plus } from 'lucide-react';
import { ButtonIconText } from '../buttons/ButtonCustomTextIcon';
import Link from 'next/link';
import bc from '@public/images/bclogo.png';
import br from '@public/images/br.png';
import { logout } from '@/lib/Auth';
import { useRouter } from 'next/navigation';
const PaymentHeader = ({ username }: { username: string }) => {
	const router = useRouter();
	const logoutHandler = async () => {
		await logout();
		router.push('/login');
	};
	return (
		<header className="px-4 flex items-center justify-between">
			<div className="flex items-center gap-x-24">
				<Image src={bc} alt="" className="size-24" />
				<div className="flex text-white gap-x-12 text-sm">
					<Link href={'#'}>INICIO</Link>
					<Link href={'#'}>PORTIFÓLIO</Link>
					<Link href={'#'}>WEBCLOUD</Link>
					<Link href={'#'}>TERMOS</Link>
				</div>
			</div>
			<div className="flex items-center gap-x-8">
				<ButtonIconText
					Icon={<Plus />}
					className="h-10 px-4 rounded-sm"
					onClick={() => logoutHandler()}
					text={username}
					reverse
				/>
				<ButtonIcon
					Icon={
						<Image
							alt=""
							src={br}
							className=""
						/>
					}
					onClick={(e) => {}}
					className="size-10 rounded-sm"
				/>
			</div>
		</header>
	);
};
export default PaymentHeader;
