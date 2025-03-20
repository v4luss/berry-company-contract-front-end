'use client';

import { ModalContext } from '@/app/context/ModalContext';
import { ListItem } from '@/app/types/ListItemType';
import { useContext } from 'react';
import { ButtonIcon } from './buttons/ButtonCustomIcon';
import { ChartArea, Trash } from 'lucide-react';

type Props = {
	item: ListItem;
	refetch: Function;
};
const ListItemComponent = ({ item, refetch }: Props) => {
	const { openModal } = useContext(ModalContext);
	const { user, subItems, buttons } = item;

	return (
		<div className="flex items-center w-full justify-between h-24">
			<div className="flex flex-col justify-between items-start gap-y-6">
				<p>{user.name}</p>
				<div className="flex gap-x-6">
					{Object.entries(subItems).map(
						([key, value]) => (
							<div className="flex gap-x-4">
								<p className="text-gray-700 text-sm">
									{key}:
								</p>
								<p className="text-gray-500 text-sm">
									{value}
								</p>
							</div>
						),
					)}
				</div>
			</div>
			<div className="flex items-center gap-x-4">
				{buttons.map((b: any) => (
					<ButtonIcon
						Icon={
							b.icon == 'Trash' ? (
								<Trash />
							) : (
								<ChartArea />
							)
						}
						className={`p-0 size-8 text-white ${
							b.icon == 'Trash'
								? 'bg-red-400 hover:bg-red-600 hover:text-black'
								: 'bg-amber-300 hover:bg-amber-600 hover:text-gray-600'
						} `}
						onClick={() =>
							b.icon == 'Trash'
								? openModal(
										'deleteConfirmUserModal',
										{
											id: user.id,
											refetch: refetch,
										},
								  )
								: openModal(
										b.modalId,
										{
											id: user.id,
											name: user.name,
											refetch: refetch,
										},
								  )
						}
					/>
				))}
			</div>
		</div>
	);
};
export { ListItemComponent };
