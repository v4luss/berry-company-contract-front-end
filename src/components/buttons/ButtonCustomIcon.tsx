'use client';
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
	return (
		<Button
			onClick={onClick}
			className={`p-1 border-primary border-1 bg-transparent size-fit ${className}`}
		>
			{Icon}
		</Button>
	);
};
export { ButtonIcon };
