'use client';
import { House, Newspaper, Rocket } from 'lucide-react';
import { Button } from '../ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const PublicNavBar = ({ options }: { options: string[] }) => {
	const router = useRouter();
	const pathname = usePathname();
	const currentUrl = pathname;
	const optionList = options.map((option: string) => {
		if (option == 'users') {
			return {
				name: 'users',
				icon: <Newspaper />,
				link: '/users',
			};
		}
		if (option == 'rocket') {
			return {
				name: 'rocket',
				icon: <Rocket />,
				link: '/rocket',
			};
		}
		if (option == 'contracts') {
			return {
				name: 'contracts',
				icon: <Newspaper />,
				link: '/contracts',
			};
		}
	});
	const setColor = (link: string) => {
		if (currentUrl == link) return 'primary';
		if (currentUrl != link) return '[#E4E4E4]';
	};
	return (
		<div className="flex flex-col w-fit">
			<Button
				onClick={() => router.push('/home')}
				className={`mb-2 rounded-l-none ${
					currentUrl == '/home'
						? 'bg-primary text-white'
						: 'bg-[#E4E4E4] text-black hover:bg-primary hover:text-white'
				}`}
			>
				<House />
			</Button>
			{optionList.map((option: any) => {
				return (
					<Button
						key={option.link}
						onClick={() =>
							router.push(option.link)
						}
						className={`${
							currentUrl ==
							option.link
								? 'bg-primary text-white'
								: 'bg-[#E4E4E4] text-black hover:bg-primary hover:text-white'
						} ${
							options.findIndex(
								(o) =>
									o ==
									option.name,
							) ==
							options.length - 1
								? 'rounded-none rounded-br-sm'
								: 'rounded-none rounded-tr-sm'
						}`}
					>
						{option.icon}
					</Button>
				);
			})}
		</div>
	);
};
export { PublicNavBar };
