'use client';

import { ListItem } from '@/app/types/ListItemType';
import { ButtonIcon } from '@/components/buttons/ButtonCustomIcon';
import { ListComponent } from '@/components/ListComponent';
import { SearchComponentBar } from '@/components/SearchBarComponent';
import { usersMocks } from '@/mocks/UsersMocks';
import { useQuery } from '@tanstack/react-query';
import { ChartArea, Delete, Trash } from 'lucide-react';
import { useState } from 'react';

export default function UsersPage() {
	const [value, setValue] = useState<string>('');

	const { isLoading, data, refetch } = useQuery({
		queryKey: ['getUsers'],
		queryFn: async () => {
			return usersMocks;
		},
	});
	if (isLoading) return 'Carregando';
	return (
		<div className="w-full flex flex-col items-center gap-y-6">
			<SearchComponentBar
				placeHolder="Busque por um usuário..."
				setValue={setValue}
				value={value}
			/>
			<ListComponent
				refetch={refetch}
				value={value}
				items={data as ListItem[]}
			/>
		</div>
	);
}
