import { MouseEventHandler } from 'react';
import { Button } from '../ui/button';

const ButtonText = ({
	text,
	onClick,
	className,
	icon,
}: {
	text: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
	className: string;
	icon?: React.ReactNode;
}) => {
	return (
		<Button
			className={`p-1 border-primary border-1 bg-transparent text-foreground font-normal px-8 rounded-sm ${className}`}
			onClick={onClick}
		>
			{icon}
			{text}
		</Button>
	);
};
export { ButtonText };
