'use client';

import { ListItem } from '@/app/types/ListItemType';
import { ButtonIcon } from '@/components/buttons/ButtonCustomIcon';
import { ButtonText } from '@/components/buttons/ButtonCustomText';
import { ListComponent } from '@/components/ListComponent';
import { SearchComponentBar } from '@/components/SearchBarComponent';
import { contractMockDone } from '@/mocks/contractMock';
import { contractsMock, usersMocks } from '@/mocks/UsersMocks';
import { useQuery } from '@tanstack/react-query';
import { ChartArea, Delete, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ContractsPage() {
	const router = useRouter();
	const [value, setValue] = useState<string>('');

	const { isLoading, data, refetch } = useQuery({
		queryKey: ['getContracts'],
		queryFn: async () => {
			return contractsMock;
		},
	});
	if (isLoading) return 'Carregando';
	return (
		<div className="w-full flex flex-col items-center gap-y-6">
			<div className="w-full flex gap-x-4">
				<SearchComponentBar
					placeHolder="Busque por um usuário..."
					setValue={setValue}
					value={value}
				/>
				<ButtonText
					className=""
					onClick={() =>
						router.push('/contracts/create')
					}
					text="CRIAR NOVO"
					type="bg-primary"
				/>
			</div>
			<ListComponent
				refetch={refetch}
				value={value}
				items={data as ListItem[]}
			/>
		</div>
	);
}
