'use client';

import { ListItem } from '@/app/types/ListItemType';
import { ListItemComponent } from './ListItem';
import { Separator } from '@radix-ui/react-separator';

const ListComponent = ({
	items,
	value,
	refetch,
}: {
	items: ListItem[];
	value: string;
	refetch: Function;
}) => {
	return (
		<div className="w-full border-1 border-primary rounded-sm px-4 overflow-y-auto h-86 ">
			{(value
				? items.filter((i: ListItem) =>
						(
							(i.user
								?.name as string) ||
							(i.contract
								?.name as string)
						)
							.toLowerCase()
							.includes(
								value.toLowerCase(),
							),
				  )
				: items
			).map((i: ListItem, index) => (
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
