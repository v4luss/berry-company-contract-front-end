'use client';
import { MouseEventHandler } from 'react';
import { Button } from '../ui/button';

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
	return (
		<Button
			onClick={onClick}
			className={` p-1 border-primary border-1 bg-transparent size-fit text-black ${className}`}
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
