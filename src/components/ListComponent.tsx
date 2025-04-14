'use client';

import { ListItemComponent } from './ListItem';
import { Separator } from '@radix-ui/react-separator';

const ListComponent = ({
	items = [], // Default to empty array if undefined
	value,
	refetch,
}: {
	items: any[];
	value: string | undefined;
	refetch: Function;
}) => {
	const filteredItems = value
		? items.filter((i: any) =>
				(
					(i?.user?.username as string) ||
					(i?.contract?.project
						?.name as string) ||
					''
				)
					.toLowerCase()
					.includes(value.toLowerCase()),
		  )
		: items;

	return (
		<div className="w-full border-1 border-primary rounded-sm px-4 overflow-y-auto h-86 mb-24">
			{filteredItems.map((i: any, index) => (
				<div key={index}>
					<ListItemComponent
						refetch={refetch}
						item={i}
					/>
					<Separator
						orientation="horizontal"
						className="border-gray-300 border-1 w-full"
					/>
				</div>
			))}
		</div>
	);
};

export { ListComponent };
