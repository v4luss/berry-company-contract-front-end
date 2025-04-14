'use client';

import { useCookies } from '@/app/context/CookieContext';
import { ModalContext } from '@/app/context/ModalContext';
import { ClauseTemplate, ContractTemplate } from '@/app/types/ClauseType';
import { ButtonText } from '@/components/buttons/ButtonCustomText';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { contractMock } from '@/mocks/clauseMocks';
import { contractMockDone } from '@/mocks/contractMock';
import { contractsMock } from '@/mocks/UsersMocks';
import { api } from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import { Check, CircleMinus, CirclePlus, CircleX, X } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import {
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react';
import { Button } from './ui/button';
type Props = {
	members: any[];
	setMembers: Dispatch<SetStateAction<any[]>>;
	services: any[];
	setServices: Dispatch<SetStateAction<any[]>>;
	adminFlag: boolean;
};
function MembersTable({ members, setMembers, adminFlag }: Props) {
	const [name, setName] = useState<string>('');
	const [id, setId] = useState<string>('');
	const [stack, setStack] = useState<string>('');
	const [perHour, setPerHour] = useState<string>('');
	const [value, setValue] = useState<string>('');
	const [terms, setTerms] = useState<string>('');
	const [newMember, setNewMember] = useState<any | undefined>();
	const addMember = () => {
		if (
			name != '' &&
			perHour != '' &&
			value != '' &&
			stack != '' &&
			terms != ''
		) {
			setMembers([
				...members,
				{
					name,
					stack,
					valueHr: perHour,
					finalValue: value,
					terms,
				},
			]);
		}

		setName('');
		setPerHour('');
		setStack('');
		setTerms('');
		setValue('');
		setNewMember({
			name,
			stack,
			valueHr: perHour,
			finalValue: value,
			terms,
		});
	};
	const removeMember = (index: number) => {
		setMembers((prevMembers) =>
			prevMembers.filter((_, i) => i !== index),
		);
	};
	return (
		<Table className="rounded-md  ">
			<TableHeader className="bg-[#3434341A] rounded-t-md">
				<TableRow className="border-b-transparent rounded-t-md">
					<TableHead className=" rounded-tl-md text-center w-60">
						Member
					</TableHead>
					<TableHead className="text-center w-60">
						Stack
					</TableHead>
					<TableHead className="text-center w-60">
						Cargas Horárias
					</TableHead>
					<TableHead className="text-center w-60">
						Valores
					</TableHead>
					<TableHead className="text-center rounded-tr-md w-60">
						Termos
					</TableHead>
					{adminFlag && (
						<TableHead className="bg-white">
							<CirclePlus
								className="text-green-500 cursor-pointer"
								onClick={() =>
									addMember()
								}
							/>
						</TableHead>
					)}
				</TableRow>
			</TableHeader>

			<TableBody className="bg-[#3434341A] rounded-b-md ">
				{members?.map((member, index: number) => (
					<TableRow
						key={index}
						className={`border-b-transparent ${
							index ==
								members?.length -
									1 &&
							'rounded-bl-md'
						}`}
					>
						<TableCell
							className={`font-medium text-center w-60 ${
								index ==
									members?.length -
										1 &&
								'rounded-bl-md'
							}`}
						>
							{member?.name}
						</TableCell>
						<TableCell className="text-center w-60">
							{member?.stack}
						</TableCell>
						<TableCell className="text-center w-60">
							{member?.valueHr}
						</TableCell>
						<TableCell className="text-center w-60">
							{member?.finalValue}
						</TableCell>
						<TableCell
							className={`text-center  w-60 ${
								index ==
									members?.length -
										1 &&
								'rounded-br-md'
							}`}
						>
							{member?.terms}
						</TableCell>
						{adminFlag && (
							<TableCell className="text-center bg-white ">
								<CircleMinus
									className="text-red-500 cursor-pointer"
									onClick={() =>
										removeMember(
											index,
										)
									}
								/>
							</TableCell>
						)}
					</TableRow>
				))}
				{newMember && adminFlag ? (
					<TableRow
						key={newMember.name}
						className=""
					>
						<TableCell className="font-medium rounded-bl-md w-60">
							<Input
								className="border-none drop-shadow-none shadow-none bg-white"
								value={name}
								onChange={(e) =>
									setName(
										(
											p,
										) =>
											e
												.target
												.value,
									)
								}
							/>
						</TableCell>
						<TableCell className=" w-60">
							<Input
								value={stack}
								onChange={(e) =>
									setStack(
										(
											p,
										) =>
											e
												.target
												.value,
									)
								}
								className="border-none drop-shadow-none shadow-none bg-white "
							/>
						</TableCell>
						<TableCell className=" w-60">
							<Input
								value={perHour}
								onChange={(e) =>
									setPerHour(
										(
											p,
										) =>
											e
												.target
												.value,
									)
								}
								className="border-none drop-shadow-none shadow-none bg-white "
							/>
						</TableCell>
						<TableCell className=" w-60">
							<Input
								value={value}
								onChange={(e) =>
									setValue(
										(
											p,
										) =>
											e
												.target
												.value,
									)
								}
								className="border-none drop-shadow-none shadow-none bg-white "
							/>
						</TableCell>
						<TableCell className="text-center rounded-br-md w-60">
							<Input
								value={terms}
								onChange={(e) =>
									setTerms(
										(
											p,
										) =>
											e
												.target
												.value,
									)
								}
								className="border-none drop-shadow-none shadow-none bg-white"
							/>
						</TableCell>
						<TableCell className=" text-right bg-white"></TableCell>
					</TableRow>
				) : (
					adminFlag && (
						<TableRow className="">
							<TableCell className="font-medium rounded-bl-md w-60"></TableCell>
							<TableCell className=" w-60"></TableCell>
							<TableCell className=" w-60"></TableCell>
							<TableCell className=" w-60"></TableCell>
							<TableCell className="text-center rounded-br-md w-60"></TableCell>
							<TableCell className=" text-right bg-white"></TableCell>
						</TableRow>
					)
				)}
			</TableBody>
		</Table>
	);
}
function ServicesTable({ services, setServices, adminFlag }: Props) {
	const [name, setName] = useState<string>('');
	const [initialValue, setInitialValue] = useState<string>('');
	const [discout, setDiscout] = useState<string>('');
	const [value, setValue] = useState<string>('');
	const [newService, setNewService] = useState<any | undefined>();
	const addMember = () => {
		if (name != '' && initialValue != '' && discout != '') {
			setServices([
				...services,
				{
					name,
					initialValue,
					discount: discout,
					finalValue: value,
				},
			]);
		}

		setName('');
		setInitialValue('');
		setDiscout('');
		setNewService({
			name,
			initialValue,
			discount: discout,
			finalValue: value,
		});
	};
	const removeService = (index: number) => {
		setServices((prevMembers) =>
			prevMembers.filter((_, i) => i !== index),
		);
	};
	const calculateFinalValue = (
		initialValue: string,
		discount: string,
	): string => {
		const ini = parseFloat(initialValue); // Convert initialValue to a number
		const dis = parseFloat(discount); // Convert discount to a number
		if (isNaN(ini) || isNaN(dis)) {
			return 'Desconto ou valor inicial inválidos.';
		}
		const discountAmount = (ini * dis) / 100; // Calculate discount amount
		const finalValue = ini - discountAmount; // Calculate final value
		return finalValue.toFixed(2); // Return final value rounded to 2 decimal places
	};

	const sumInitialValues = (services: any[]): number => {
		return services
			?.map((s) => {
				const sub =
					(parseFloat(s.initialValue) *
						parseFloat(s.discount)) /
					100;
				return s.initialValue - sub;
			})
			.reduce((sum, v) => {
				return sum + v;
			});
	};

	const sumValues = (services: any[]): number => {
		return services?.reduce((sum, service) => {
			const initialValue = parseFloat(service.initialValue); // Convert initialValue to a number
			return sum + (isNaN(initialValue) ? 0 : initialValue); // Add to sum, default to 0 if invalid
		}, 0); // Start with an initial sum of 0
	};

	const getFinalValue = (service: any): number => {
		return (
			service.initialValue -
			(service.finalValue * service.discount) / 100
		);
	};

	const calculateTotalDiscountPercentage = (services: any[]): number => {
		const totalValues = sumValues(services);
		const totalInitialValues = sumInitialValues(services);

		if (totalInitialValues === 0) {
			return 0; // Avoid division by zero
		}

		return 100 - (100 * totalInitialValues) / totalValues; // Calculate the total discount percentage
	};
	const sumDiscountAmounts = (services: any[]): number => {
		return services?.reduce((sum, service) => {
			const initialValue = parseFloat(service.initialValue); // Convert initialValue to a number
			const discountPercentage = parseFloat(service.discount); // Convert discount to a number
			if (isNaN(initialValue) || isNaN(discountPercentage)) {
				return sum; // Skip invalid values
			}
			const discountAmount =
				initialValue * (discountPercentage / 100); // Calculate discount amount
			return sum + discountAmount; // Add to total discount amount
		}, 0); // Start with an initial sum of 0
	};
	return (
		<Table className="rounded-md ">
			<TableHeader className="bg-[#3434341A] rounded-t-md ">
				<TableRow className="border-b-transparent rounded-t-md ">
					<TableHead className=" w-60 rounded-tl-md text-center">
						Serviços
					</TableHead>
					<TableHead className="text-center w-60 ">
						Valor Inicial
					</TableHead>
					<TableHead className="text-center w-60 ">
						Desconto (%)
					</TableHead>
					<TableHead className="text-center rounded-tr-md w-60 ">
						Valor Final
					</TableHead>

					{adminFlag && (
						<TableHead className="bg-white">
							<CirclePlus
								className="text-green-500 cursor-pointer"
								onClick={() =>
									addMember()
								}
							/>
						</TableHead>
					)}
				</TableRow>
			</TableHeader>

			<TableBody className="bg-[#3434341A] w-full">
				{services?.map((service, index) => (
					<TableRow
						key={index}
						className="border-b-transparent w-full"
					>
						<TableCell className="font-medium text-center w-60 ">
							{service.name}
						</TableCell>
						<TableCell className="text-center w-60 ">
							R${service.initialValue}
						</TableCell>
						<TableCell className="text-center w-60 ">
							{service.discount}%
						</TableCell>
						<TableCell className="text-center w-60 ">
							R$
							{getFinalValue(service)}
						</TableCell>

						{adminFlag && (
							<TableCell className="text-right bg-white ">
								<CircleMinus
									className="text-red-500 cursor-pointer"
									onClick={() =>
										removeService(
											index,
										)
									}
								/>
							</TableCell>
						)}
					</TableRow>
				))}
				{newService && adminFlag && (
					<TableRow
						key={newService.name}
						className="border-b-transparent"
					>
						<TableCell className="font-medium rounded-bl-md w-60 ">
							<Input
								className="border-none drop-shadow-none shadow-none bg-white"
								value={name}
								onChange={(e) =>
									setName(
										(
											p,
										) =>
											e
												.target
												.value,
									)
								}
							/>
						</TableCell>
						<TableCell className=" w-60 ">
							<Input
								value={
									initialValue
								}
								onChange={(
									e,
								) => {
									setInitialValue(
										(
											p,
										) =>
											e
												.target
												.value,
									);
									setValue(
										calculateFinalValue(
											e
												.target
												.value,
											discout,
										),
									);
								}}
								className="border-none drop-shadow-none shadow-none bg-white"
							/>
						</TableCell>
						<TableCell className=" w-60 ">
							<Input
								value={discout}
								onChange={(
									e,
								) => {
									setDiscout(
										(
											p,
										) =>
											e
												.target
												.value,
									);
									setValue(
										calculateFinalValue(
											initialValue,
											e
												.target
												.value,
										),
									);
								}}
								className="border-none drop-shadow-none shadow-none bg-white"
							/>
						</TableCell>
						<TableCell className=" w-60 ">
							<Input
								value={value}
								readOnly
								className="border-none drop-shadow-none shadow-none bg-white"
							/>
						</TableCell>

						<TableCell className=" text-right bg-white"></TableCell>
					</TableRow>
				)}
				<TableRow className="">
					<TableCell className="font-medium rounded-bl-md w-62 text-center ">
						{services?.length}
					</TableCell>
					<TableCell className=" w-62 text-center">
						<p className="text-red-700">
							R$
							{sumValues(services)}
						</p>
					</TableCell>
					<TableCell className=" w-62 text-center">
						<p className="text-yellow-500">
							{calculateTotalDiscountPercentage(
								services,
							)
								?.toString()
								.substring(
									0,
									6,
								)}
							%
						</p>
					</TableCell>
					<TableCell className="rounded-br-md w-62 text-center">
						<p className="text-green-500">
							R$
							{calculateFinalValue(
								sumValues(
									services,
								)?.toString(),
								calculateTotalDiscountPercentage(
									services,
								)?.toString(),
							)?.toString()}
						</p>
					</TableCell>
					{adminFlag && (
						<TableCell className=" text-right bg-white"></TableCell>
					)}
				</TableRow>
			</TableBody>
		</Table>
	);
}

export const ClauseComponent = ({ clause }: { clause: any }) => {
	const [clauseTitle, setClauseTitle] = useState<string>(clause.title);
	const [clauseBody, setClauseBody] = useState<string>(clause.body);
	function safeReplacePlaceholders(
		text: string,
		replacements: Record<string, unknown>,
	): string {
		return text.replace(/\{(\w+)\}/g, (match, key) => {
			const value = replacements[key];
			return value !== undefined ? String(value) : match;
		});
	}
	return (
		<div className="">
			<h3 className="font-bold">{clauseTitle}</h3>
			<div>
				<br />
				<p className="whitespace-pre-line">
					{clauseBody.replace(/\\n/g, '\n')}
				</p>
			</div>
		</div>
	);
};
export const HeadComponent = ({ head }: { head: string[] }) => {
	const [heads, setHeads] = useState<string[]>(head);
	const [newHead, setNewHead] = useState<string>('');
	const handleHeadDelete = (index: number) => {
		setHeads(heads.filter((i, j) => j != index));
	};
	return (
		<div className="space-y-4">
			{heads.map((h: string, index: number) => (
				<div key={h} className="flex">
					<h1>{h}</h1>{' '}
				</div>
			))}
		</div>
	);
};
export function EditContractPage({ id }: { id: string }) {
	const { openModal } = useContext(ModalContext);
	const router = useRouter();
	const [members, setMembers] = useState<any[]>();
	const [services, setServices] = useState<any[]>();
	const { isLoading, data, refetch } = useQuery({
		queryKey: ['getClauses'],
		queryFn: async () => {
			const contract = (await api.get('/contracts/' + id))
				.data;

			return contract;
		},
	});
	const project = {
		id: data?.project?.id,
		teams: [{ projectId: data?.project?.id, members }],
		services: services,
	};
	const updateContractHandler = async () => {
		await Promise.all(
			data?.project?.teams.map((t: any) =>
				api.delete('/projects/teams/' + t.id),
			) || [],
		);
		const projId = data?.project.id;
		await api.delete('/services/' + projId);
		members?.forEach((m: any) => {
			delete m.id;
			delete m.teamId;
		});
		await api.post('/projects/teams', {
			projectId: projId,
			members,
		});
		const servicesWithProjectId = (services as any[]).map(
			(service) => ({
				...service,
				projectId: projId,
			}),
		);
		servicesWithProjectId.forEach((s: any) => delete s.id);
		await api.post('/services/multi', servicesWithProjectId);

		openModal('confirmContractCreationModal', {
			id: data?.id,
			method: 'PUT',
		});
	};

	useEffect(() => {
		if (data?.project?.teams) {
			const allMembers = data.project.teams.flatMap(
				(team: any) => team.members,
			);
			setMembers(allMembers);
		}
		if (data?.project?.services) {
			setServices(data.project.services);
		}
	}, [data]);
	if (isLoading) return 'Carregando...';
	return (
		<div className="flex flex-col items-center justify-center gap-y-16 pb-4">
			<div className="space-y-8">
				<MembersTable
					adminFlag
					services={services as any}
					setServices={setServices as any}
					members={members as any}
					setMembers={setMembers as any}
				/>

				<ServicesTable
					adminFlag
					services={services as any}
					setServices={setServices as any}
					members={members as any}
					setMembers={setMembers as any}
				/>
			</div>
			<div className=" w-full">
				<div>
					<div>
						<Separator />
						<HeadComponent
							head={data?.header?.content.split(
								'\n',
							)}
						/>
						<Separator />
					</div>
					<div>
						{data?.clauses?.map(
							(
								c: ClauseTemplate,
								index: number,
							) => (
								<div>
									<Separator />
									<ClauseComponent
										clause={
											c
										}
									/>
									<Separator />
								</div>
							),
						)}
					</div>
				</div>
			</div>
			<Button onClick={() => updateContractHandler()}>
				FINALIZAR EDIÇÃO
			</Button>
		</div>
	);
}
export function ViewContractPage({ id }: { id: string }) {
	const { openModal } = useContext(ModalContext);
	const router = useRouter();
	const [members, setMembers] = useState<any[]>();
	const [services, setServices] = useState<any[]>();
	const { isLoading, data, refetch } = useQuery({
		queryKey: ['getClauses'],
		queryFn: async () => {
			const contract = (await api.get('/contracts/' + id))
				.data;

			return contract;
		},
	});
	useEffect(() => {
		if (data?.project?.teams) {
			const allMembers = data.project.teams.flatMap(
				(team: any) => team.members,
			);
			setMembers(allMembers);
		}
		if (data?.project?.services) {
			setServices(data.project.services);
		}
	}, [data]);

	const sign = () => {
		router.push(id + '/sign-contract');
	};
	const pay = () => {
		router.push('/payment/' + id);
	};
	if (isLoading) return 'Carregando...';
	return (
		<div className="flex flex-col items-center justify-center gap-y-16">
			<div className=" w-full">
				<h1 className="font-bold text-4xl justify-self-center">
					{data?.project.name}
				</h1>
				<div>
					<div className="flex flex-col pb-8">
						<HeadComponent
							head={data.header.content.split(
								'\n',
							)}
						/>
					</div>
					<div className="flex flex-col gap-y-4">
						{data?.clauses.map(
							(
								c: any,
								index: number,
							) => (
								<div
									key={
										index
									}
									className="flex flex-col gap-y-4"
								>
									<ClauseComponent
										clause={
											c
										}
									/>
									<Separator />
								</div>
							),
						)}
					</div>
				</div>
			</div>
			<div className="space-y-8">
				<MembersTable
					adminFlag={false}
					services={services as any[]}
					setServices={setServices as any}
					members={members as any[]}
					setMembers={setMembers as any}
				/>
				<ServicesTable
					adminFlag={false}
					services={services as any[]}
					setServices={setServices as any}
					members={members as any[]}
					setMembers={setMembers as any}
				/>
			</div>
			<div className="flex justify-center items-center gap-x-24 pb-24">
				<ButtonText
					className=""
					onClick={pay}
					text="PAGAR"
					type="regular"
				/>
				<ButtonText
					className=""
					onClick={sign}
					text="ASSINAR"
					type="bg-primary"
				/>
			</div>
		</div>
	);
}
