'use client';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
type Props = {
	placeHolder: string;
	value: string;
	setValue: (value: string) => void;
};
const SearchComponentBar = ({ placeHolder, value, setValue }: Props) => {
	return (
		<div className="flex items-center px-2 w-full rounded-md border-1 border-primary">
			<Search className="text-gray-600" />
			<Input
				placeholder={placeHolder}
				className="w-full border-none"
				value={value}
				onChange={(e) =>
					setValue(e.currentTarget.value)
				}
			/>
		</div>
	);
};
export { SearchComponentBar };
