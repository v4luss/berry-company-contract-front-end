import { ChangeEventHandler, Ref } from 'react';
import { Input } from '../ui/input';

const InputCustom = ({
	type,
	ref,
	className,
	value,
	onChange,
	placeholder,
}: {
	type: string;
	ref: Ref<HTMLInputElement>;
	className?: string;
	value?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
}) => {
	if (type == 'regular')
		return (
			<Input
				className={`border-primary ring-0 ring-primary focus:ring-2 focus:active:ring-3 rounded-sm transition-all p-5 ${className}`}
				ref={ref}
				{...(value ? { value: value } : {})}
				{...(onChange ? { onChange: onChange } : {})}
				{...(placeholder
					? { placeholder: placeholder }
					: {})}
			/>
		);
};
export { InputCustom };
