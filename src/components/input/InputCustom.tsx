'use client';
import { ChangeEventHandler, Ref, useState } from 'react';
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
	const [clicked, click] = useState<boolean>();
	if (type == 'regular')
		return (
			<Input
				className={`border-primary ring-0 ring-primary focus:ring-2 focus:active:ring-3 rounded-sm transition-all p-5 text-white  ${className}`}
				ref={ref}
				{...(value ? { value: value } : {})}
				{...(onChange ? { onChange: onChange } : {})}
				{...(placeholder
					? { placeholder: placeholder }
					: {})}
			/>
		);
	if (type == 'regular-password-eye')
		return (
			<div
				className={`flex items-center gap-x-2 ${className}`}
			>
				<Input
					className={`border-primary ring-0 ring-primary focus:ring-2 focus:active:ring-3 rounded-sm transition-all p-5 text-white `}
					ref={ref}
					{...(value ? { value: value } : {})}
					{...(onChange
						? { onChange: onChange }
						: {})}
					{...(placeholder
						? { placeholder: placeholder }
						: {})}
					type={!clicked ? 'password' : 'text'}
				/>
				<svg
					onClick={() => click(!clicked)}
					width="30"
					height="30"
					viewBox="0 0 30 30"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					className={`cursor-pointer text-[#EB1757]  transition-all duration-200 ${
						clicked
							? 'text-black'
							: 'hover:text-[#eb1757b2]'
					}`}
				>
					<path
						d="M15 20C16.5625 20 17.8906 19.4531 18.9844 18.3594C20.0781 17.2656 20.625 15.9375 20.625 14.375C20.625 12.8125 20.0781 11.4844 18.9844 10.3906C17.8906 9.29688 16.5625 8.75 15 8.75C13.4375 8.75 12.1094 9.29688 11.0156 10.3906C9.92188 11.4844 9.375 12.8125 9.375 14.375C9.375 15.9375 9.92188 17.2656 11.0156 18.3594C12.1094 19.4531 13.4375 20 15 20ZM15 17.75C14.0625 17.75 13.2656 17.4219 12.6094 16.7656C11.9531 16.1094 11.625 15.3125 11.625 14.375C11.625 13.4375 11.9531 12.6406 12.6094 11.9844C13.2656 11.3281 14.0625 11 15 11C15.9375 11 16.7344 11.3281 17.3906 11.9844C18.0469 12.6406 18.375 13.4375 18.375 14.375C18.375 15.3125 18.0469 16.1094 17.3906 16.7656C16.7344 17.4219 15.9375 17.75 15 17.75ZM15 23.75C11.9583 23.75 9.1875 22.901 6.6875 21.2031C4.1875 19.5052 2.375 17.2292 1.25 14.375C2.375 11.5208 4.1875 9.24479 6.6875 7.54688C9.1875 5.84896 11.9583 5 15 5C18.0417 5 20.8125 5.84896 23.3125 7.54688C25.8125 9.24479 27.625 11.5208 28.75 14.375C27.625 17.2292 25.8125 19.5052 23.3125 21.2031C20.8125 22.901 18.0417 23.75 15 23.75ZM15 21.25C17.3542 21.25 19.5156 20.6302 21.4844 19.3906C23.4531 18.151 24.9583 16.4792 26 14.375C24.9583 12.2708 23.4531 10.599 21.4844 9.35938C19.5156 8.11979 17.3542 7.5 15 7.5C12.6458 7.5 10.4844 8.11979 8.51562 9.35938C6.54688 10.599 5.04167 12.2708 4 14.375C5.04167 16.4792 6.54688 18.151 8.51562 19.3906C10.4844 20.6302 12.6458 21.25 15 21.25Z"
						fill="fill"
					/>
				</svg>
			</div>
		);
};
export { InputCustom };
