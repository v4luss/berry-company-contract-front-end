'use client';

import { Checkbox } from '@/components/ui/checkbox'; // Shadcn Checkbox
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu'; // Shadcn DropdownMenu
import { Button } from '@/components/ui/button'; // Shadcn Button
import { ArrowDown } from 'lucide-react';

type Props = {
	value: boolean;
	setValue: (value: boolean) => void;
	Icon?: React.ReactNode;
	text?: string;
};

const SelectComponent = ({
	values,
	classNameOutter,
	classNameButtons,
}: {
	values: Props[];
	classNameOutter?: string;
	classNameButtons?: string;
}) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className={`w-full border border-primary p-2 rounded-sm flex items-center justify-between ${classNameOutter}`}
				>
					<span className="text-gray-500 text-sm">
						Selecione
					</span>
					<ArrowDown className="size-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-white border border-gray-200 rounded-sm shadow-lg w-full">
				{values.map((v, index) => (
					<DropdownMenuItem
						key={index}
						className={`p-0 w-[600px] ${classNameButtons}`} // Reset padding to allow full control
						onSelect={(e) => {
							e.preventDefault();
							v.setValue(!v.value);
						}} // Prevent closing on selection
						asChild // Use asChild to wrap content in a div
					>
						<div className="flex items-center gap-x-6 p-2 hover:bg-gray-100 cursor-pointer">
							<Checkbox
								checked={
									v.value
								}
								onCheckedChange={
									v.setValue
								}
								className="flex items-center"
							/>
							{v.Icon && (
								<span className="">
									{v.Icon}
								</span>
							)}
							{v.text && (
								<span className="">
									{v.text}
								</span>
							)}
						</div>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export { SelectComponent };
