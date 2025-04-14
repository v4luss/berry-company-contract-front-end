'use client';

import { useCookies } from '@/app/context/CookieContext';
import { ListItem } from '@/app/types/ListItemType';
import { ButtonIcon } from '@/components/buttons/ButtonCustomIcon';
import { ButtonText } from '@/components/buttons/ButtonCustomText';
import { ListComponent } from '@/components/ListComponent';
import { SearchComponentBar } from '@/components/SearchBarComponent';
import { contractMockDone } from '@/mocks/contractMock';
import { contractsMock, usersMocks } from '@/mocks/UsersMocks';
import { api } from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import { ChartArea, Delete, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ContractsPage() {
	const { role, id } = useCookies();
	const router = useRouter();
	const [value, setValue] = useState<string | undefined>();

	const { isLoading, data, refetch } = useQuery({
		queryKey: ['getContracts'],
		queryFn: async () => {
			const res = await api.get('/contracts');
			const contracts = res.data;
			// Filter based on role
			const filtered = contracts.filter(
				(contract: any) =>
					role == 'Administrador' ||
					contract?.project?.user?.id ==
						contract?.project?.userId,
			);

			// Map to desired structure
			return filtered.map((contract: any) => ({
				contract,
				buttons: [
					{
						icon: 'Eye',
						modalId: '', // Add modal IDs if needed
						color: 'b',
						borderColor: 'bb',
					},
					{
						icon: 'Pencil',
						modalId: '',
						color: 'g',
						borderColor: 'gb',
					},
					{
						icon: 'Trash',
						modalId: '',
						color: 'r',
						borderColor: 'rb',
					},
					,
					{
						icon: 'Trash',
						modalId: '',
						color: 'uiui',
						borderColor: 'rb',
					},
				],
			}));
		},
		enabled: !!role && !!id, // Wait for cookies to load
	});
	if (isLoading) return 'Carregando';
	return (
		<div className="w-full flex flex-col items-center gap-y-6">
			<div className="w-full flex gap-x-4">
				<SearchComponentBar
					placeHolder="Busque por um contrato..."
					setValue={setValue}
					value={value}
				/>
				{role == 'Administrador' && (
					<ButtonText
						className=""
						onClick={() =>
							router.push(
								'/contracts/create',
							)
						}
						text="CRIAR NOVO"
						type="bg-primary"
					/>
				)}
			</div>
			<ListComponent
				refetch={refetch}
				value={value}
				items={data}
			/>
		</div>
	);
}
