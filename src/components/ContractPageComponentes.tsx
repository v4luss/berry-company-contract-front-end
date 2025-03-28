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
import { useQuery } from '@tanstack/react-query';
import { Check, CircleMinus, CirclePlus, CircleX, X } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
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
					user: { name, id },
					stack,
					perHour,
					value,
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
			user: {
				name,
				id,
			},
			stack,
			perHour,
			value,
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

			<TableBody className="bg-[#3434341A]  ">
				{members.map((member, index) => (
					<TableRow
						key={index}
						className="border-b-transparent"
					>
						<TableCell className="font-medium text-center w-60">
							{member.user.name}
						</TableCell>
						<TableCell className="text-center w-60">
							{member.stack}
						</TableCell>
						<TableCell className="text-center w-60">
							{member.perHour}
						</TableCell>
						<TableCell className="text-center w-60">
							{member.value}
						</TableCell>
						<TableCell className="text-center  w-60">
							{member.terms}
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
					discout,
					value,
				},
			]);
		}

		setName('');
		setInitialValue('');
		setDiscout('');
		setNewService({
			name,
			initialValue,
			discout,
			value,
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
		try {
			const ini = parseFloat(initialValue); // Convert initialValue to a number
			const dis = parseFloat(discount); // Convert discount to a number
			if (isNaN(ini) || isNaN(dis)) {
				return 'Desconto ou valor inicial inválidos.';
			}
			const discountAmount = (ini * dis) / 100; // Calculate discount amount
			const finalValue = ini - discountAmount; // Calculate final value
			return finalValue.toString(); // Return final value rounded to 2 decimal places
		} catch (e) {
			return 'Desconto ou valor inicial inválidos.';
		}
	};
	const sumInitialValues = (services: any[]): number => {
		return services.reduce((sum, service) => {
			const initialValue = parseFloat(service.initialValue); // Convert initialValue to a number
			return sum + (isNaN(initialValue) ? 0 : initialValue); // Add to sum, default to 0 if invalid
		}, 0); // Start with an initial sum of 0
	};
	const sumValues = (services: any[]): number => {
		return services.reduce((sum, service) => {
			const initialValue = parseFloat(service.value); // Convert initialValue to a number
			return sum + (isNaN(initialValue) ? 0 : initialValue); // Add to sum, default to 0 if invalid
		}, 0); // Start with an initial sum of 0
	};
	const sumDiscountAmounts = (services: any[]): number => {
		return services.reduce((sum, service) => {
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
	const calculateTotalDiscountPercentage = (services: any[]): number => {
		return (
			100 -
			(100 * sumValues(services)) / sumInitialValues(services)
		);
	};
	return (
		<Table className="rounded-md w-full">
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

			<TableBody className="bg-[#3434341A]  w-full">
				{services.map((service, index) => (
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
							{service.discout}%
						</TableCell>
						<TableCell className="text-center w-60 ">
							R${service.value}
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
						{services.length}
					</TableCell>
					<TableCell className=" w-62 text-center">
						<p className="text-red-700">
							R$
							{sumInitialValues(
								services,
							)}
						</p>
					</TableCell>
					<TableCell className=" w-62 text-center">
						<p className="text-yellow-500">
							{calculateTotalDiscountPercentage(
								services,
							).toString()}
							%
						</p>
					</TableCell>
					<TableCell className="rounded-br-md w-62 text-center">
						<p className="text-green-500">
							R$
							{sumValues(
								services,
							).toString()}
						</p>
					</TableCell>

					<TableCell className=" text-right bg-white"></TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}

export const ClauseComponent = ({ clause }: { clause: ClauseTemplate }) => {
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
		<div>
			<h3>{clauseTitle}</h3>
			<p>{clauseBody}</p>
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
		<div>
			{heads.map((h: string, index: number) => (
				<div className="flex">
					<h1>{h}</h1>{' '}
				</div>
			))}
		</div>
	);
};
export function EditContractPage({ id }: { id: string }) {
	const { openModal } = useContext(ModalContext);
	const router = useRouter();
	const [members, setMembers] = useState<any[]>(contractMockDone.members);
	const [services, setServices] = useState<any[]>(
		contractMockDone.services,
	);
	const updateContractHandler = async () => {
		console.log('criar e retorna o criado e o link');
		openModal('confirmContractCreationModal', {
			contract: { id: '1', members, services },
			method: 'PUT',
		});
	};
	const { isLoading, data, refetch } = useQuery({
		queryKey: ['getClauses'],
		queryFn: async () => {
			return contractMock;
		},
	});
	if (isLoading) return 'Carregando...';
	return (
		<div className="flex flex-col items-center justify-center gap-y-16">
			<MembersTable
				adminFlag
				services={services}
				setServices={setServices}
				members={members}
				setMembers={setMembers}
			/>
			<ServicesTable
				adminFlag
				services={services}
				setServices={setServices}
				members={members}
				setMembers={setMembers}
			/>
			<div className=" w-full">
				<div>
					<div>
						<h1 className="font-bold text-lg">
							Cabeça:
						</h1>
						<Separator />
						<HeadComponent
							head={
								(
									data as ContractTemplate
								).head
							}
						/>
						<Separator />
					</div>
					<div>
						{(
							data as ContractTemplate
						).clauses.map(
							(
								c: ClauseTemplate,
								index: number,
							) => (
								<div>
									<Separator />
									<h1 className="font-bold text-lg">
										Clausula
										{index +
											1}

										:{' '}
									</h1>
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
		</div>
	);
}
export function ViewContractPage({ id }: { id: string }) {
	const { openModal } = useContext(ModalContext);
	const router = useRouter();
	const [members, setMembers] = useState<any[]>(contractMockDone.members);
	const [services, setServices] = useState<any[]>(
		contractMockDone.services,
	);
	const updateContractHandler = async () => {
		console.log('criar e retorna o criado e o link');
		openModal('confirmContractCreationModal', {
			contract: { id: '1', members, services },
			method: 'PUT',
		});
	};
	const { isLoading, data, refetch } = useQuery({
		queryKey: ['getClauses'],
		queryFn: async () => {
			return contractMock;
		},
	});
	if (isLoading) return 'Carregando...';
	return (
		<div className="flex flex-col items-center justify-center gap-y-16">
			<div className=" w-full">
				<div>
					<div>
						<h1 className="font-bold text-lg">
							Cabeça:
						</h1>
						<Separator />
						<HeadComponent
							head={
								(
									data as ContractTemplate
								).head
							}
						/>
						<Separator />
					</div>
					<div>
						{(
							data as ContractTemplate
						).clauses.map(
							(
								c: ClauseTemplate,
								index: number,
							) => (
								<div>
									<Separator />
									<h1 className="font-bold text-lg">
										Clausula
										{index +
											1}

										:{' '}
									</h1>
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
			<MembersTable
				adminFlag={false}
				services={services}
				setServices={setServices}
				members={members}
				setMembers={setMembers}
			/>
			<ServicesTable
				adminFlag={false}
				services={services}
				setServices={setServices}
				members={members}
				setMembers={setMembers}
			/>
		</div>
	);
}
