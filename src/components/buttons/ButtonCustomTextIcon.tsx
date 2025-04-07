'use client';
import { MouseEventHandler } from 'react';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';

const ButtonIconText = ({
	reverse,
	text,
	Icon,
	className,
	onClick,
}: {
	reverse?: boolean;
	text: string;
	Icon: React.ReactNode;
	className: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
	const pathname = usePathname();
	return (
		<Button
			onClick={onClick}
			className={` p-1 border-primary border-1 bg-transparent size-fit text-white ${
				pathname.startsWith('/contracts/')
					? ' text-black'
					: ' text-white'
			} ${className}`}
		>
			{reverse ? (
				<span className="flex items-center">
					{text} {Icon}
				</span>
			) : (
				<span className="flex items-center">
					{Icon}
					{text}
				</span>
			)}
		</Button>
	);
};
export { ButtonIconText };
