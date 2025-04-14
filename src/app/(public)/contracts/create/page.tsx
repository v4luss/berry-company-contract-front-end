'use client';

import { ModalContext } from '@/app/context/ModalContext';
import { ButtonText } from '@/components/buttons/ButtonCustomText';
import { SelectSingleItem } from '@/components/SelectSingleItem';
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
import { contractMockDone } from '@/mocks/contractMock';
import { api } from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import { CircleMinus, CirclePlus, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useContext, useRef, useState } from 'react';
type Props = {
	members: any[];
	setMembers: Dispatch<SetStateAction<any[]>>;
	services: any[];
	setServices: Dispatch<SetStateAction<any[]>>;
};
function MembersTable({ members, setMembers }: Props) {
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
			valueHour: perHour,
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
					<TableHead className="bg-white">
						<CirclePlus
							className="text-green-500 cursor-pointer"
							onClick={() =>
								addMember()
							}
						/>
					</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody className="bg-[#3434341A]  ">
				{members.map((member, index) => (
					<TableRow
						key={member.invoice}
						className="border-b-transparent"
					>
						<TableCell className="font-medium text-center w-60">
							{member.name}
						</TableCell>
						<TableCell className="text-center w-60">
							{member.stack}
						</TableCell>
						<TableCell className="text-center w-60">
							{member.valueHr}
						</TableCell>
						<TableCell className="text-center w-60">
							{member.finalValue}
						</TableCell>
						<TableCell className="text-center  w-60">
							{member.terms}
						</TableCell>
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
					</TableRow>
				))}
				{newMember ? (
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
					<TableRow className="">
						<TableCell className="font-medium rounded-bl-md w-60"></TableCell>
						<TableCell className=" w-60"></TableCell>
						<TableCell className=" w-60"></TableCell>
						<TableCell className=" w-60"></TableCell>
						<TableCell className="text-center rounded-br-md w-60"></TableCell>
						<TableCell className=" text-right bg-white"></TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
function ServicesTable({ services, setServices }: Props) {
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
		if (!services || services.length == 0) return 0;
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

					<TableHead className="bg-white">
						<CirclePlus
							className="text-green-500 cursor-pointer"
							onClick={() =>
								addMember()
							}
						/>
					</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody className="bg-[#3434341A]  w-full">
				{services.map((service, index) => (
					<TableRow
						key={service.name}
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
							R${service.finalValue}
						</TableCell>

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
					</TableRow>
				))}
				{newService && (
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
							{sumValues(
								services,
							)?.toString()}
						</p>
					</TableCell>
					<TableCell className=" w-62 text-center">
						<p className="text-yellow-500">
							{calculateTotalDiscountPercentage(
								services,
							)?.toString()}
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

					<TableCell className=" text-right bg-white"></TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}

export default function CreateContractPage() {
	const { openModal } = useContext(ModalContext);
	const router = useRouter();
	const [members, setMembers] = useState<any[]>([]);
	const [username, setUsername] = useState<string | undefined>();
	const [userId, setUserId] = useState<string | undefined>();
	const [services, setServices] = useState<any[]>([]);
	const nameRef = useRef<HTMLInputElement>(null);
	const companyName = useRef<HTMLInputElement>(null);
	const cnpj = useRef<HTMLInputElement>(null);
	const clientName = useRef<HTMLInputElement>(null);
	const clientCnpjCpf = useRef<HTMLInputElement>(null);

	const { data, isLoading } = useQuery({
		queryKey: ['getUsers'],
		queryFn: async () => {
			const users = await api.get('/users');
			return users.data;
		},
	});

	const createContractHandler = async () => {
		if (
			nameRef.current &&
			companyName.current &&
			cnpj.current &&
			clientName.current &&
			clientCnpjCpf.current
		) {
			const header = `NOME DA EMPRESA: ${companyName.current.value}\nCNPJ: ${cnpj.current.value}\nNOME DO CLIENTE: ${clientName.current.value}\nCPF/CNPJ: ${clientCnpjCpf.current.value}`;
			const contract = {
				clauses: [
					{
						templateId: 'db2015e6-00ef-4ee2-8a63-8bb90b6db80d',
					},
					{
						templateId: 'f0b82d79-2565-42e7-b977-712e91ca8a3a',
					},
					{
						templateId: '0f8d875f-8c62-41bc-b5d7-e523f43e8bbe',
					},
					{
						templateId: 'c1cd6aea-3cbc-4c3a-9a46-fb12761ddbd1',
					},
					{
						templateId: '2260413f-982d-43f7-9a1c-f6a84f415d1c',
					},
					{
						templateId: 'f1599d7e-c838-4b87-81f2-d5ffc67d0eac',
					},
					{
						templateId: 'b603826f-146e-4d9f-8147-c933eb69aa70',
					},
					{
						templateId: 'fbe31b6b-163f-4a11-8a4e-5de518c5f7f4',
					},
				],
				header: { content: header },
				project: {
					name: nameRef.current.value,
					gb: '128gb',
					userId,
					teams: [{ members }],
					services: services,
				},
			};
			const res = await api.post('/contracts', contract);

			openModal('confirmContractCreationModal', {
				id: res?.data?.id,
				userId,
				members,
				services,
				name: nameRef?.current.value,
				header,
			});
		}
	};
	if (isLoading) return 'Carregando...';
	return (
		<div className="flex flex-col items-center justify-center gap-y-16">
			<p>NOME DO PROJETO: </p>
			<Input placeholder="Nome do projeto..." ref={nameRef} />
			<div className="flex flex-col gap-y-4 justify-between w-full self-start">
				<div className="flex items-center gap-x-4 justify-between">
					<p className="whitespace-nowrap">
						NOME DA EMPRESA:{' '}
					</p>
					<Input ref={companyName} />
					<p className="whitespace-nowrap">
						CNPJ:
					</p>{' '}
					<Input ref={cnpj} />
				</div>
				<div className="flex items-center gap-x-4">
					<p className="whitespace-nowrap">
						NOME DO CLIENTE:
					</p>{' '}
					<Input ref={clientName} />
					<p>CPF/CNPJ: </p>
					<Input ref={clientCnpjCpf} />
				</div>
			</div>
			<div>
				<SelectSingleItem
					values={data.map((u: any) => {
						return {
							value: u.id,
							text: u.username,
							setValue: setUserId,
						};
					})}
				/>
			</div>
			<MembersTable
				services={services}
				setServices={setServices}
				members={members}
				setMembers={setMembers}
			/>
			<ServicesTable
				services={services}
				setServices={setServices}
				members={members}
				setMembers={setMembers}
			/>
			<div className="flex gap-x-6 mb-12">
				<ButtonText
					className=""
					onClick={() => router.push('/home')}
					text="CANCELAR"
					type="regular"
				/>
				<ButtonText
					className=""
					onClick={() => createContractHandler()}
					text="CRIAR"
					type="bg-primary"
				/>
			</div>
		</div>
	);
}
