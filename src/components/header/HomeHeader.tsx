'use client';
import bclogo from '@public/images/bcc.png';
import bclogo2 from '@public/images/bclogopublic.png';
import br from '@public/images/br.png';
import { Plus, SeparatorVertical } from 'lucide-react';
import Image from 'next/image';
import { ButtonIcon } from '../buttons/ButtonCustomIcon';
import { ButtonIconText } from '../buttons/ButtonCustomTextIcon';
import { useContext } from 'react';
import { ModalContext } from '@/app/context/ModalContext';
import { BreadCrumbsCustom } from '../BreadCrumbsCustom';
import { usePathname, useRouter } from 'next/navigation';
import { logout } from '@/lib/Auth';
import { NotificationDropDownButton } from '../NotificationsDropDown';
const HomeHeader = ({ username }: { username: string }) => {
	const router = useRouter();
	const logoutHandler = async () => {
		await logout();
		router.push('/login');
	};
	const pathname = usePathname();
	return (
		<header className="py-4 px-8 flex items-center justify-between pt-8">
			<div className="flex items-center gap-4">
				<div>
					<Image
						src={
							pathname.startsWith(
								'/contracts/',
							)
								? bclogo2
								: bclogo
						}
						alt=""
						className="w-24"
					/>
				</div>

				<div className="border-l-1 border-l-white h-12 flex items-center pl-4">
					<BreadCrumbsCustom />
				</div>
			</div>
			<div className="flex items-center gap-x-8">
				<NotificationDropDownButton />
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
export { HomeHeader };
