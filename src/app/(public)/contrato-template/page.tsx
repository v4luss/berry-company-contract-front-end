'use client';

import { ClauseTemplate, ContractTemplate } from '@/app/types/ClauseType';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { contractMock } from '@/mocks/clauseMocks';
import { contractMockDone } from '@/mocks/contractMock';
import { useQuery } from '@tanstack/react-query';
import { Blocks, Check, CircleX } from 'lucide-react';
import { useState } from 'react';

const ClauseComponent = ({ clause }: { clause: ClauseTemplate }) => {
	const [clauseTitle, setClauseTitle] = useState<string>(clause.title);
	const [clauseBody, setClauseBody] = useState<string>(clause.body);
	return (
		<div>
			<Input
				value={clauseTitle}
				onChange={(e) => setClauseTitle(e.target.value)}
			/>
			<textarea
				value={clauseBody}
				onChange={(e) => setClauseBody(e.target.value)}
			></textarea>
		</div>
	);
};
const HeadComponent = ({ head }: { head: string[] }) => {
	const [heads, setHeads] = useState<string[]>(head);
	const [newHead, setNewHead] = useState<string>('');
	const handleHeadDelete = (index: number) => {
		setHeads(heads.filter((i, j) => j != index));
	};
	return (
		<div>
			{heads.map((h: string, index: number) => (
				<div className="flex">
					<h1>{h}</h1>{' '}
					<CircleX
						className="cursor-pointer text-primary"
						onClick={() =>
							handleHeadDelete(index)
						}
					/>
				</div>
			))}
			<div>
				<Input
					value={newHead}
					onChange={(e) =>
						setNewHead(e.target.value)
					}
				/>{' '}
				<Check
					className="text-greenI cursor-pointer"
					onClick={() =>
						setHeads([...heads, newHead])
					}
				/>
			</div>
		</div>
	);
};
export default function ClausePage() {
	const { isLoading, data, refetch } = useQuery<ContractTemplate>({
		queryKey: ['getClauses'],
		queryFn: async () => {
			return contractMock as ContractTemplate;
		},
	});
	if (isLoading) return 'Carregando';
	return (
		<div>
			<div>
				<h1 className="font-bold text-lg">Cabeça:</h1>
				<Separator />
				<HeadComponent
					head={(
						contractMockDone as ContractTemplate
					).head.split(';')}
				/>
				<Separator />
			</div>
			<div>
				{(data as ContractTemplate).clauses.map(
					(c: ClauseTemplate, index: number) => (
						<div>
							<Separator />
							<h1 className="font-bold text-lg">
								Clausula
								{index +
									1}:{' '}
							</h1>
							<ClauseComponent
								clause={c}
							/>
							<Separator />
						</div>
					),
				)}
			</div>
		</div>
	);
}
