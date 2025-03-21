'use client';

import { ModalContext } from '@/app/context/ModalContext';
import { ListItem } from '@/app/types/ListItemType';
import { useContext } from 'react';
import { ButtonIcon } from './buttons/ButtonCustomIcon';
import { ChartArea, Eye, Pencil, Trash } from 'lucide-react';

type Props = {
	item: ListItem;
	refetch: Function;
};
const ListItemComponent = ({ item, refetch }: Props) => {
	const { openModal } = useContext(ModalContext);
	const { contract, user, subItems, buttons } = item;

	return (
		<div className="flex items-center w-full justify-between h-24">
			<div className="flex flex-col justify-between items-start gap-y-6">
				<p>
					{(user?.name as string) ||
						(contract?.name as string)}
				</p>
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
				{buttons.map(
					(b: {
						icon: string;
						modalId: string;
						color: string;
						borderColor: string;
					}) => {
						if (b.color == 'y')
							return (
								<ButtonIcon
									Icon={
										b.icon ==
										'Trash' ? (
											<Trash />
										) : b.icon ==
										  'ChartArea' ? (
											<ChartArea />
										) : b.icon ==
										  'Pencil' ? (
											<Pencil />
										) : (
											<Eye />
										)
									}
									className="p-0 size-8 text-white bg-y border-yb"
									onClick={() =>
										b.icon ==
										'Trash'
											? openModal(
													'deleteConfirmUserModal',
											  )
											: openModal(
													b.modalId,
											  )
									}
								/>
							);
						if (b.color == 'r')
							return (
								<ButtonIcon
									Icon={
										b.icon ==
										'Trash' ? (
											<Trash />
										) : b.icon ==
										  'ChartArea' ? (
											<ChartArea />
										) : b.icon ==
										  'Pencil' ? (
											<Pencil />
										) : (
											<Eye />
										)
									}
									className="p-0 size-8 text-white bg-r border-rb"
									onClick={() =>
										b.icon ==
										'Trash'
											? openModal(
													'deleteConfirmUserModal',
											  )
											: openModal(
													b.modalId,
											  )
									}
								/>
							);
						if (b.color == 'g')
							return (
								<ButtonIcon
									Icon={
										b.icon ==
										'Trash' ? (
											<Trash />
										) : b.icon ==
										  'ChartArea' ? (
											<ChartArea />
										) : b.icon ==
										  'Pencil' ? (
											<Pencil />
										) : (
											<Eye />
										)
									}
									className="p-0 size-8 text-white bg-g border-gb"
									onClick={() =>
										b.icon ==
										'Trash'
											? openModal(
													'deleteConfirmUserModal',
											  )
											: openModal(
													b.modalId,
											  )
									}
								/>
							);
						if (b.color == 'b')
							return (
								<ButtonIcon
									Icon={
										b.icon ==
										'Trash' ? (
											<Trash />
										) : b.icon ==
										  'ChartArea' ? (
											<ChartArea />
										) : b.icon ==
										  'Pencil' ? (
											<Pencil />
										) : (
											<Eye />
										)
									}
									className="p-0 size-8 text-white bg-b border-bb"
									onClick={() =>
										b.icon ==
										'Trash'
											? openModal(
													'deleteConfirmUserModal',
											  )
											: openModal(
													b.modalId,
											  )
									}
								/>
							);
					},
				)}
			</div>
		</div>
	);
};
export { ListItemComponent };
