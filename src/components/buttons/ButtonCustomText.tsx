import { MouseEventHandler } from 'react';
import { Button } from '../ui/button';

const ButtonText = ({
	type,
	text,
	onClick,
	className,
	icon,
	disabled,
}: {
	type: string;
	disabled?: boolean;
	text: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
	className: string;
	icon?: React.ReactNode;
}) => {
	if (type == 'regular')
		return (
			<Button
				disabled={disabled == true}
				className={`p-1 border-primary border-1 bg-transparent text-foreground font-normal px-8 rounded-sm duration-200 transition-all hover:text-white hover:bg-primary ${className}`}
				onClick={onClick}
			>
				{icon}
				{text}
			</Button>
		);
	if (type == 'bg-primary')
		return (
			<Button
				disabled={disabled == true}
				className={`p-1 border-primary border-1 bg-primary text-white font-normal px-8 rounded-sm duration-200 transition-all hover:text-black hover:bg-transparent ${className}`}
				onClick={onClick}
			>
				{icon}
				{text}
			</Button>
		);
};
export { ButtonText };
