'use client';

import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
} from '@/components/ui/select'; // Shadcn Select
import { Button } from '@/components/ui/button'; // Shadcn Button
import { ArrowDown } from 'lucide-react';

type Props = {
	value: string;
	setValue: (value: string) => void;
	Icon?: React.ReactNode;
	text?: string;
};

const SelectSingleItem = ({
	values,
	classNameOutter,
	classNameButtons,
}: {
	values: Props[];
	classNameOutter?: string;
	classNameButtons?: string;
}) => {
	return (
		<Select>
			<SelectTrigger
				className={`w-full border border-primary p-2 rounded-sm flex items-center justify-between ${classNameOutter}`}
			>
				<SelectValue placeholder="Selecione" />
			</SelectTrigger>
			<SelectContent className="bg-white border border-gray-200 rounded-sm shadow-lg w-full">
				{values.map((v, index) => (
					<SelectItem
						key={index}
						value={
							v.value ||
							`item-${index}`
						}
						className={`flex items-center gap-x-2 p-2 hover:bg-gray-100 cursor-pointer ${classNameButtons}`}
					>
						{v.Icon && (
							<span className="w-full justify-center flex">
								{v.Icon}
							</span>
						)}
						{v.text && (
							<span className="w-full">
								{v.text}
							</span>
						)}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

export { SelectSingleItem };
