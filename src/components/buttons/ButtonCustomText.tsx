import { MouseEventHandler } from 'react';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';

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
	const pathname = usePathname();
	if (type == 'regular')
		return (
			<Button
				disabled={disabled == true}
				className={`p-1 border-primary border-1  bg-transparent  font-normal px-8 rounded-sm duration-200 transition-all hover:text-black hover:bg-primary ${
					pathname.startsWith('/contracts/')
						? ' text-black'
						: ' text-white'
				} ${className}`}
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
				className={`p-1 border-primary border-1 bg-primary text-white font-normal px-8 rounded-sm duration-200 transition-all hover:text-primary hover:bg-transparent ${
					pathname.startsWith('/contracts/')
						? 'text-white'
						: 'text-black'
				} ${className}`}
				onClick={onClick}
			>
				{icon}
				{text}
			</Button>
		);
};
export { ButtonText };
