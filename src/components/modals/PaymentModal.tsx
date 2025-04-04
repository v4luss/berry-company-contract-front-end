'use client';

import { useContext, useState } from 'react';
import { InputCustom } from '../input/InputCustom';
import { Separator } from '../ui/separator';
import { ButtonText } from '../buttons/ButtonCustomText';
import { CheckCheck, CheckCircle, Copy, LoaderIcon, X } from 'lucide-react';
import { ModalContext } from '@/app/context/ModalContext';
import { ButtonIconText } from '../buttons/ButtonCustomTextIcon';
import { Button } from '../ui/button';

const PaymentModal = ({ data }: { data: Record<string, any> }) => {
	const { closeModal } = useContext(ModalContext);
	const { method } = data;
	const [done, setDone] = useState<boolean>(false);
	const [name, setName] = useState<string | undefined>();
	const [card, setCard] = useState<string | undefined>();
	const [date, setDate] = useState<string | undefined>();
	const [cvv, setCvv] = useState<string | undefined>();
	const [tax, setTax] = useState<string | undefined>();

	const handlePayment = () => {
		setDone(true);
	};
	if (method == 'card' && !done)
		return (
			<div className="flex flex-col rounded-md border-1 border-primary bg-[#E8EAED]">
				<div className="flex items-center justify-end w-full p-2">
					<X
						className="cursor-pointer"
						onClick={() => closeModal()}
					/>
				</div>
				<div className="flex items-start  px-8 py-6 ">
					<div className="flex flex-col justify-center gap-8">
						<InputCustom
							ref={null}
							onChange={(e) =>
								setName(
									e.target
										.value,
								)
							}
							value={name}
							type="regular"
							placeholder="Nome do titular"
						/>
						<InputCustom
							ref={null}
							onChange={(e) =>
								setCard(
									e.target
										.value,
								)
							}
							value={card}
							type="regular"
							placeholder="Número do cartão"
						/>
						<div className="flex gap-x-6">
							<InputCustom
								ref={null}
								onChange={(e) =>
									setDate(
										e
											.target
											.value,
									)
								}
								value={date}
								type="regular"
								placeholder="Data"
							/>
							<InputCustom
								ref={null}
								onChange={(e) =>
									setCvv(
										e
											.target
											.value,
									)
								}
								value={cvv}
								type="regular"
								placeholder="CVV"
							/>
						</div>
						<InputCustom
							ref={null}
							onChange={(e) =>
								setName(
									e.target
										.value,
								)
							}
							value={name}
							type="regular"
							placeholder="Nome do titular"
						/>
					</div>
					<div className="flex flex-col justify-center pl-20 pr-12">
						<div className="flex flex-col justify-center bg-white w-72 px-4 py-6">
							<div className="flex justify-start  pb-2">
								<h3>
									Data de
									pagamento
								</h3>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Dia
								</p>
								<p className="text-[#343434] text-sm">
									{
										data.id
									}
								</p>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Mês
								</p>
								<p className="text-[#343434] text-sm">
									{
										data.id
									}
								</p>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Ano
								</p>
								<p className="text-[#343434] text-sm">
									{
										data.id
									}
								</p>
							</div>
							<Separator className="my-2" />
							<div className="flex justify-start  pb-2">
								<h3>
									Data de
									assinatura
								</h3>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Dia
								</p>
								<p className="text-[#343434] text-sm">
									{
										data.id
									}
								</p>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Mês
								</p>
								<p className="text-[#343434] text-sm">
									{
										data.id
									}
								</p>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Ano
								</p>
								<p className="text-[#343434] text-sm">
									{
										data.id
									}
								</p>
							</div>
							<Separator className="my-2" />

							<div className="flex justify-start pb-2">
								<h3>
									Assinatura
								</h3>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Valor
								</p>
								<p className="text-[#343434] text-sm">
									{
										data.id
									}
								</p>
							</div>
						</div>
						<ButtonText
							className="mt-4"
							onClick={() =>
								handlePayment()
							}
							text="COMPRAR"
							type="bg-primary"
						/>
					</div>
				</div>
			</div>
		);
	if (method == 'pix' && !done)
		return (
			<div className="flex flex-col rounded-md border-1 border-primary bg-[#E8EAED]">
				<div className="flex items-center justify-end w-full p-2">
					<X
						className="cursor-pointer"
						onClick={() => closeModal()}
					/>
				</div>
				<div className="flex items-start  px-8 py-6 ">
					<div className="flex flex-col items-center gap-8">
						<div>
							<div className="flex pb-2">
								<LoaderIcon className="text-primary" />
								<h3>
									Aguardando
									pagamento...
								</h3>
							</div>
							<p className="text-sm text-[#343434]/80 pl-6">
								Após realizar o
								pagamento com
								seu banco,
								aguarde a
								aprovação do
								sistema.
							</p>
						</div>
						<div className="bg-gray-600 size-64 rounded-md"></div>
						<Button className=" flex justify-between w-full border-primary bg-transparent border-1 text-[#343434]">
							<div></div>
							Copiar código pix{' '}
							<Copy className="text-primary" />
						</Button>
					</div>
					<div className="flex flex-col justify-center pl-20 pr-12">
						<div className="flex flex-col justify-center bg-white w-72 px-4 py-6">
							<div className="flex justify-start  pb-2">
								<h3>
									Data de
									pagamento
								</h3>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Dia
								</p>
								<p className="text-[#343434] text-sm">
									{
										data.id
									}
								</p>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Mês
								</p>
								<p className="text-[#343434] text-sm">
									{
										data.id
									}
								</p>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Ano
								</p>
								<p className="text-[#343434] text-sm">
									{
										data.id
									}
								</p>
							</div>
							<Separator className="my-2" />
							<div className="flex justify-start  pb-2">
								<h3>
									Data de
									assinatura
								</h3>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Dia
								</p>
								<p className="text-[#343434] text-sm">
									{
										data.id
									}
								</p>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Mês
								</p>
								<p className="text-[#343434] text-sm">
									{
										data.id
									}
								</p>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Ano
								</p>
								<p className="text-[#343434] text-sm">
									{
										data.id
									}
								</p>
							</div>
							<Separator className="my-2" />

							<div className="flex justify-start pb-2">
								<h3>
									Assinatura
								</h3>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Valor
								</p>
								<p className="text-[#343434] text-sm">
									{
										data.id
									}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	if (done)
		return (
			<div className="w-[500px] h-[300px] gap-y-6 bg-[#E8EAED] flex flex-col justify-center items-center border-1 border-primary rounded-md p-4">
				<CheckCircle className="size-72 text-green-500" />
				<ButtonText
					className=" w-full"
					onClick={() => closeModal()}
					text="VOLTAR"
					type="bg-primary"
				/>
			</div>
		);
	return <div></div>;
};

export default PaymentModal;
