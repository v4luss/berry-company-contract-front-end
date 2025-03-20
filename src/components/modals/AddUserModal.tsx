'use client';

import { ModalContext } from '@/app/context/ModalContext';
import {
	AppWindowMac,
	Atom,
	Blocks,
	BookCheck,
	Bot,
	Boxes,
	Cable,
	Castle,
	Code,
	CodeXml,
	Database,
	Delete,
	Infinity,
	Notebook,
	PencilRuler,
	Shield,
	Tally1,
	Tally2,
	Tally3,
	Tally4,
	User,
	X,
} from 'lucide-react';
import { useContext, useState } from 'react';
import { SelectComponent } from '../SelectComponent';
import { Label } from '@radix-ui/react-dropdown-menu';
import { InputCustom } from '../input/InputCustom';
import { SelectSingleItem } from '../SelectSingleItem';
import { Separator } from '../ui/separator';
import { ButtonText } from '../buttons/ButtonCustomText';
const DevSection = ({ values, cnpj, setCnpj }: any) => {
	return (
		<div className="w-full space-y-4">
			<Separator orientation="horizontal" />
			<div className="flex items-center gap-x-8">
				<p className="w-36">Stack:</p>
				<div className="w-64">
					<SelectComponent
						classNameButtons="w-96"
						classNameOutter="w-96"
						values={values}
					/>
				</div>
			</div>
			<div className="flex items-center gap-x-8">
				<p className="w-36">CNPJ:</p>
				<div className="w-64">
					<InputCustom
						ref={null}
						type="regular"
						className=" p-0 px-2"
						onChange={(e) =>
							setCnpj(e.target.value)
						}
						placeholder=""
						value={cnpj}
					/>
				</div>
			</div>
		</div>
	);
};
const ClientSection = ({
	values,
	cnpj,
	setCnpj,
	enterprise,
	setEnterprise,
}: any) => {
	return (
		<div className="w-full space-y-4">
			<Separator orientation="horizontal" />
			<div className="flex items-center gap-x-8">
				<p className="w-36">Plano Assinado:</p>
				<div className="w-64">
					<SelectSingleItem
						classNameOutter="w-96"
						values={values}
					/>
				</div>
			</div>

			<div className="flex items-center gap-x-8">
				<p className="w-36">CNPJ:</p>
				<div className="w-64">
					<InputCustom
						ref={null}
						type="regular"
						className=" p-0 px-2"
						onChange={(e) =>
							setCnpj(e.target.value)
						}
						placeholder=""
						value={cnpj}
					/>
				</div>
				<p className="w-36">Empresa:</p>
				<div className="w-64">
					<InputCustom
						ref={null}
						type="regular"
						className=" p-0 px-2"
						onChange={(e) =>
							setEnterprise(
								e.target.value,
							)
						}
						placeholder=""
						value={enterprise}
					/>
				</div>
			</div>
		</div>
	);
};
const AddUserModal = ({ data }: Record<string, any>) => {
	const { closeModal } = useContext(ModalContext);
	const [message, setMessage] = useState<string | undefined>();
	const [admin, setAdmin] = useState<boolean>(false);
	const [dev, setDev] = useState<boolean>(false);
	const [client, setClient] = useState<boolean>(false);
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [cpf, setCpf] = useState<string>('');
	const [cnpj, setCnpj] = useState<string>('');
	const [enterprise, setEnterprise] = useState<string>('');
	const [front, setFront] = useState<boolean>(false);
	const [back, setBack] = useState<boolean>(false);
	const [fullstack, setFullstack] = useState<boolean>(false);
	const [devOps, setDevOps] = useState<boolean>(false);
	const [designer, setDesigner] = useState<boolean>(false);
	const [dba, setDba] = useState<boolean>(false);
	const [lt, setLt] = useState<boolean>(false);
	const [scrumMaster, setScrumMaster] = useState<boolean>(false);
	const [ceo, setCeo] = useState<boolean>(false);
	const [po, setPo] = useState<boolean>(false);
	const [cto, setCto] = useState<boolean>(false);
	const [intern, setIntern] = useState<boolean>(false);
	const [pm, setPm] = useState<boolean>(false);
	const [plan, setPlan] = useState<string>('');
	const handleAddUser = async () => {
		console.log('adduser');
		closeModal();
	};

	const values = [
		{
			value: admin,
			setValue: setAdmin,
			Icon: <Shield />,
			text: 'Admin',
		},
		{
			value: dev,
			setValue: setDev,
			Icon: <CodeXml />,
			text: 'Dev',
		},
		{
			value: client,
			setValue: setClient,
			Icon: <User />,
			text: 'Client',
		},
	];
	const devValues = [
		{
			value: front,
			setValue: setFront,
			Icon: <Code />,
			text: 'Frontend',
		},
		{
			value: back,
			setValue: setBack,
			Icon: <CodeXml />,
			text: 'Backend',
		},
		{
			value: fullstack,
			setValue: setFullstack,
			Icon: <Atom />,
			text: 'Fullstack',
		},
		{
			value: devOps,
			setValue: setDevOps,
			Icon: <Infinity />,
			text: 'DevOps',
		},
		{
			value: designer,
			setValue: setDesigner,
			Icon: <PencilRuler />,
			text: 'Designer',
		},
		{
			value: dba,
			setValue: setDba,
			Icon: <Database />,
			text: 'DBA',
		},
		{
			value: lt,
			setValue: setLt,
			Icon: <Bot />,
			text: 'Líder Tecnico',
		},
		{
			value: scrumMaster,
			setValue: setScrumMaster,
			Icon: <Cable />,
			text: 'Scrum Master',
		},
		{
			value: cto,
			setValue: setCto,
			Icon: <Boxes />,
			text: 'CTO',
		},
		{
			value: ceo,
			setValue: setCeo,
			Icon: <Castle />,
			text: 'CEO',
		},
		{
			value: po,
			setValue: setPo,
			Icon: <BookCheck />,
			text: 'Project Owner',
		},
		{
			value: intern,
			setValue: setIntern,
			Icon: <Notebook />,
			text: 'Estagiário',
		},
		{
			value: pm,
			setValue: setPm,
			Icon: <AppWindowMac />,
			text: 'Project Manager',
		},
	];
	const clientValues = [
		{
			value: 'noPlan',
			setValue: setPlan,
			Icon: <Delete />,
			text: 'Nenhum plano.',
		},
		{
			value: 'basicPlan',
			setValue: setPlan,
			Icon: <Tally1 />,
			text: 'Básico',
		},
		{
			value: 'mediumPlan',
			setValue: setPlan,
			Icon: <Tally2 />,
			text: 'Médio',
		},
		{
			value: 'advancedPlan',
			setValue: setPlan,
			Icon: <Tally3 />,
			text: 'Avançado',
		},
		{
			value: 'enterprisePlan',
			setValue: setPlan,
			Icon: <Tally4 />,
			text: 'Empresarial',
		},
	];
	const verifyCanCreateUser = () => {
		if (!name) {
			return 'Preencha o nome completo.';
		}
		if (!email) {
			return 'Preencha o email para contato.';
		}
		if (!password) {
			return 'Preencha a senha.';
		}
		if (!cpf) {
			return 'Preencha o CPF.';
		}
		if (!dev && !admin && !client) {
			return 'Atribua um papel para o usuário.';
		}
		if (client) {
			if (plan != '')
				return 'Você precisa preencher o plano do cliente.';
		}
		if (dev) {
			if (
				devValues.filter((d: any) => d.value == true)
					.length == 0
			)
				return 'Você precisa adicionar uma stack para o dev.';
			if (!cnpj)
				return 'Você precisa preencher o CNPJ do dev.';
		}
		handleAddUser();
	};
	return (
		<div className="bg-[#E8EAED] rounded-md border-1 border-primary px-4 py-2 space-y-4 ">
			<div className="flex items-center justify-between w-full">
				<h1 className="font-bold text-lg">
					Adicionar um usuário
				</h1>
				<X
					onClick={() => closeModal()}
					className="cursor-pointer"
				/>
			</div>
			<div className="flex items-center gap-x-8">
				<p className="w-36">Nome Completo:</p>
				<div className="w-64">
					<InputCustom
						ref={null}
						type="regular"
						className=" p-0 px-2"
						onChange={(e) =>
							setName(e.target.value)
						}
						placeholder=""
						value={name}
					/>
				</div>

				<p className="w-36">Email Contato:</p>

				<div className="w-64">
					<InputCustom
						ref={null}
						type="regular"
						className=" p-0 px-2"
						onChange={(e) =>
							setEmail(e.target.value)
						}
						placeholder=""
						value={email}
					/>
				</div>
			</div>
			<div className="flex items-center gap-x-8">
				<p className="w-36">Senha:</p>
				<div className="w-64">
					<InputCustom
						ref={null}
						type="regular"
						className=" p-0 px-2"
						onChange={(e) =>
							setPassword(
								e.target.value,
							)
						}
						placeholder=""
						value={password}
					/>
				</div>

				<p className="w-36">CPF:</p>
				<div className="w-64">
					<InputCustom
						ref={null}
						type="regular"
						className=" p-0 px-2"
						onChange={(e) =>
							setCpf(e.target.value)
						}
						placeholder=""
						value={cpf}
					/>
				</div>
			</div>
			<div className="flex items-center gap-x-8">
				<h1 className=" w-36">Tipo:</h1>
				<SelectComponent
					classNameOutter="w-96"
					classNameButtons="w-96"
					values={values}
				/>
			</div>

			<div>
				{dev && (
					<DevSection
						values={devValues}
						cnpj={cnpj}
						setCnpj={setCnpj}
					/>
				)}
			</div>
			<div>
				{client && (
					<ClientSection
						values={clientValues}
						cnpj={cnpj}
						setCnpj={setCnpj}
						enterprise={enterprise}
						setEnterprise={setEnterprise}
					/>
				)}
			</div>

			<div className="w-full flex justify-between">
				<p className="text-primary">{message}</p>
				<ButtonText
					text="CRIAR USUÁRIO"
					className=""
					onClick={() =>
						setMessage(
							verifyCanCreateUser(),
						)
					}
					type="bg-primary"
				/>
			</div>
		</div>
	);
};

export { AddUserModal };
