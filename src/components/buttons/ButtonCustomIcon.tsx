'use client';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { MouseEventHandler } from 'react';

const ButtonIcon = ({
	Icon,
	className,
	onClick,
}: {
	Icon: React.ReactNode;
	className: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
	const pathname = usePathname();
	return (
		<Button
			onClick={onClick}
			className={`p-1 border-primary border-1 bg-transparent size-fit text-white ${
				pathname.startsWith('/contracts/')
					? ' text-black'
					: ' text-white'
			}  ${className} `}
		>
			{Icon}
		</Button>
	);
};
export { ButtonIcon };
