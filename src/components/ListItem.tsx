'use client';

import { ModalContext } from '@/app/context/ModalContext';
import { ListItem } from '@/app/types/ListItemType';
import { useContext } from 'react';
import { ButtonIcon } from './buttons/ButtonCustomIcon';
import { ChartArea, Eye, Pencil, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';

type Props = {
	item: ListItem;
	refetch: Function;
};
const ListItemComponent = ({ item, refetch }: Props) => {
	const { openModal } = useContext(ModalContext);
	const router = useRouter();
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
							<div
								key={key}
								className="flex gap-x-4"
							>
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
										<ChartArea />
									}
									className="p-0 size-8 text-white bg-yellowI border-yellowB"
									onClick={() =>
										openModal(
											'addCategoriesModal',
											{
												id: user?.id,
												refetch,
											},
										)
									}
								/>
							);
						if (b.color == 'r') {
							if (user)
								return (
									<ButtonIcon
										Icon={
											<Trash />
										}
										className="p-0 size-8 text-white bg-redI border-redB"
										onClick={() =>
											openModal(
												'deleteConfirmUserModal',
												{
													id: user.id,
													refetch,
												},
											)
										}
									/>
								);
							if (contract)
								return (
									<ButtonIcon
										Icon={
											<Trash />
										}
										className="p-0 size-8 text-white bg-redI border-redB"
										onClick={() =>
											openModal(
												'deleteConfirmContractModal',
												{
													id: contract.id,
													refetch,
												},
											)
										}
									/>
								);
						}
						if (b.color == 'g')
							return (
								<ButtonIcon
									Icon={
										<Pencil />
									}
									className="p-0 size-8 text-white bg-greenI border-greenB"
									onClick={() =>
										router.push(
											'/contracts/' +
												(
													contract as any
												)
													.id +
												'/edit',
										)
									}
								/>
							);
						if (b.color == 'b')
							return (
								<ButtonIcon
									Icon={
										<Eye />
									}
									className="p-0 size-8 text-white bg-blueI border-blueB"
									onClick={() =>
										router.push(
											'/contracts/' +
												(
													contract as any
												)
													.id,
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
