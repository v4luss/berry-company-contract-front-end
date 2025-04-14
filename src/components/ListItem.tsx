'use client';

import { ModalContext } from '@/app/context/ModalContext';
import { ListItem } from '@/app/types/ListItemType';
import React, { useContext } from 'react';
import { ButtonIcon } from './buttons/ButtonCustomIcon';
import { ChartArea, Download, Eye, Pencil, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCookies } from '@/app/context/CookieContext';
import jsPDF from 'jspdf';
import { api } from '@/services/api-client';

type Props = {
	item: any;
	refetch: Function;
};
const ListItemComponent = ({ item, refetch }: Props) => {
	const { openModal } = useContext(ModalContext);
	const router = useRouter();
	const { role } = useCookies();
	const generatePDF = async (id: string) => {
		const doc = new jsPDF();

		const res = await api.get('/contracts/' + id);
		const contract = res.data;
		const header = contract?.header?.content || '';
		const clausesText =
			contract?.clauses?.map((c: any) => c.body).join('\n') ||
			'';
		const finalContract = (
			await api.get('/contracts/signature/' + id)
		).data.signature;
		// Combine header + clauses
		const rawText = `${header}\n\n${clausesText}`;

		// Split and wrap
		const lines = rawText.split('\\n');
		const wrappedLines = lines.flatMap((line) =>
			doc.splitTextToSize(line, 180),
		);

		doc.text(wrappedLines, 10, 10);

		// Handle image
		const imgData = finalContract.startsWith('data:image')
			? finalContract
			: 'data:image/png;base64,' + finalContract;

		// Position the image after the text
		const textHeight = 10 + wrappedLines.length * 7; // approximate
		const pageWidth = doc.internal.pageSize.getWidth();
		const pageHeight = doc.internal.pageSize.getHeight();
		const imgWidth = 100;
		const imgHeight = 40;

		const xPos = pageWidth - imgWidth - 10; // 10 is the right margin
		const yPos = pageHeight - imgHeight - 10; // 10 is the bottom margin

		doc.addImage(imgData, 'PNG', xPos, yPos, imgWidth, imgHeight);

		doc.save('contract.pdf');
	};
	return (
		<div className="flex items-center w-full justify-between h-24">
			<div className="flex flex-col justify-between items-start gap-y-6">
				<p>
					{(item?.user &&
						(item?.user
							.username as string)) ||
						(item?.contract &&
							(item?.contract?.project
								.name as string))}
				</p>
				<div className="flex gap-x-6">
					{item?.contract ? (
						<div className="flex gap-x-4">
							<p className="text-white/60 text-sm">
								{'Status'}:
							</p>
							<p className="text-white/40 text-sm">
								{
									item
										.contract
										.id
								}
							</p>
						</div>
					) : (
						<div className="flex gap-x-4">
							<p className="text-white/60 text-sm">
								{'Status'}:
							</p>
							<p className="text-white/40 text-sm">
								{item.user.role}
							</p>
							<p className="text-white/60 text-sm">
								{'Data'}:
							</p>
							<p className="text-white/40 text-sm">
								{
									item
										.user
										.createdAt
								}
							</p>
						</div>
					)}
				</div>
			</div>
			<div className="flex items-center gap-x-4">
				{item?.buttons.map(
					(
						b: {
							icon: string;
							modalId: string;
							color: string;
							borderColor: string;
						},
						index: number,
					) => {
						if (b.color == 'y')
							return (
								<ButtonIcon
									key={
										index
									}
									Icon={
										<ChartArea />
									}
									className="p-0 size-8 text-white bg-yellowI border-yellowB"
									onClick={() =>
										openModal(
											'addCategoriesModal',
											{
												id: item
													?.user
													.id,
												username: item
													?.user
													?.username,
												refetch,
											},
										)
									}
								/>
							);
						if (b.color == 'r') {
							if (item?.user)
								return (
									<ButtonIcon
										key={
											index
										}
										Icon={
											<Trash />
										}
										className="p-0 size-8 text-white bg-redI border-redB"
										onClick={() =>
											openModal(
												'deleteConfirmUserModal',
												{
													id: item
														?.user
														.id,
													refetch,
												},
											)
										}
									/>
								);
							if (
								item?.contract &&
								role ==
									'Administrador'
							)
								return (
									<ButtonIcon
										key={
											index
										}
										Icon={
											<Trash />
										}
										className="p-0 size-8 text-white bg-redI border-redB"
										onClick={() =>
											openModal(
												'deleteConfirmContractModal',
												{
													id: item
														?.contract
														.id,
													refetch,
												},
											)
										}
									/>
								);
						}
						if (
							b.color == 'g' &&
							role == 'Administrador'
						)
							return (
								<ButtonIcon
									key={
										index
									}
									Icon={
										<Pencil />
									}
									className="p-0 size-8 text-white bg-greenI border-greenB"
									onClick={() =>
										router.push(
											'/contracts/' +
												(
													item.contract as any
												)
													.id,
										)
									}
								/>
							);
						if (b.color == 'b')
							return (
								<ButtonIcon
									key={
										index
									}
									Icon={
										<Eye />
									}
									className="p-0 size-8 text-white bg-blueI border-blueB"
									onClick={() =>
										router.push(
											'/contracts/' +
												(
													item.contract as any
												)
													.id,
										)
									}
								/>
							);

						if (b.color == 'ui')
							return (
								<ButtonIcon
									Icon={
										<Download />
									}
									className=""
									onClick={() =>
										generatePDF(
											item
												?.contract
												.id,
										)
									}
								/>
							);
						return <div></div>;
					},
				)}
			</div>
		</div>
	);
};
export { ListItemComponent };
