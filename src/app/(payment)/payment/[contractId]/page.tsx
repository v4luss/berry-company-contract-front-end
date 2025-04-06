'use client';

import { useCookies } from '@/app/context/CookieContext';
import { ButtonText } from '@/components/buttons/ButtonCustomText';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import card from '@public/images/creditCard.png';
import { Input } from '@/components/ui/input';
import { InputCustom } from '@/components/input/InputCustom';
import { Checkbox } from '@/components/ui/checkbox';
import { useContext, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { ModalContext } from '@/app/context/ModalContext';
export default function PaymentPage() {
	const { openModal } = useContext(ModalContext);
	const { contractId } = useParams();
	const { email, id, username } = useCookies();
	const [cupon, setCupon] = useState<string | undefined>('');
	const [marked, mark] = useState<boolean>(false);
	const [method, setMethod] = useState<string | undefined>();
	const handlePayment = () => {
		openModal('paymentModal', { method, id: contractId, cupon });
	};
	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="font-bolder text-3xl">PAGAMENTO</h1>
			<div className="flex">
				<div className="flex items-start  px-8 py-6 ">
					<div className="flex flex-col items-center gap-8 w-[600px]">
						<div className="bg-[#EFEFEF] w-full p-4 space-y-4 rounded-md">
							<div className="space-y-2">
								<h2 className="text-lg">
									Dados da
									conta
								</h2>
								<p className="text-[#343434]/75 text-sm">
									Analise
									se seus
									dados
									pessoais
									estão
									corretos
								</p>
							</div>
							<Separator className="bg-black/40" />
							<div className="flex justify-between">
								<div className="flex flex-col">
									<p className="text-[#343434]/90">
										Nome:
									</p>
									<p className="text-[#343434]/75 text-sm">
										{
											username
										}
									</p>
								</div>
								<div className="flex flex-col">
									<p className="text-[#343434]/90">
										Email:
									</p>
									<p className="text-[#343434]/75 text-sm">
										{
											email
										}
									</p>
								</div>
								<div className="flex flex-col">
									<p className="text-[#343434]/90">
										ID
										(Perfil):
									</p>
									<p className="text-[#343434]/75 text-sm">
										{
											id
										}
									</p>
								</div>
							</div>
						</div>
						<div className="bg-[#EFEFEF] w-full p-4 space-y-4 rounded-md">
							<div className="space-y-2">
								<h2 className="text-lg">
									Forma de
									pagamento
								</h2>
								<p className="text-sm text-[#343434]/80">
									Selecione
									a melhor
									forma
									para
									você
									assinar
									nosso
									plano
								</p>
							</div>
							<div className="flex gap-12">
								<Button
									onClick={() =>
										setMethod(
											'pix',
										)
									}
									disabled={
										method ===
										'pix'
									}
									className="flex flex-col h-24 items-start bg-[#E7E7E7] border-1 border-primary justify-around rounded-xs hover:bg-[#E7E7E7]"
								>
									<div className="flex items-center gap-x-2">
										<svg
											width="21"
											height="21"
											viewBox="0 0 21 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clip-path="url(#clip0_1654_979)">
												<path
													d="M16.3671 16.0521C15.5435 16.0521 14.7689 15.7305 14.1866 15.1467L11.0382 11.9887C10.8171 11.7664 10.4318 11.767 10.2109 11.9887L7.05093 15.1582C6.46859 15.7421 5.69397 16.0637 4.87046 16.0637H4.25L8.23756 20.0632C9.48289 21.3122 11.502 21.3122 12.7474 20.0632L16.7463 16.0521H16.3671Z"
													fill="#32BCAD"
												/>
												<path
													d="M4.87029 4.9333C5.69381 4.9333 6.46843 5.25472 7.05083 5.83821L10.2108 9.0063C10.4384 9.23455 10.8099 9.23538 11.0381 9.00604L14.1865 5.84977C14.7689 5.26628 15.5435 4.94485 16.3671 4.94485H16.7463L12.7474 0.936294C11.5019 -0.312098 9.48279 -0.312098 8.23746 0.936294L4.25 4.93331L4.87029 4.9333Z"
													fill="#32BCAD"
												/>
												<path
													d="M20.0656 8.2396L17.648 5.81708C17.5948 5.83844 17.5372 5.85177 17.4763 5.85177H16.3771C15.8089 5.85177 15.2525 6.08277 14.851 6.4854L11.7013 9.64162C11.4066 9.93697 11.0192 10.0847 10.6323 10.0847C10.245 10.0847 9.85797 9.93697 9.5633 9.64188L6.40173 6.47389C6.00019 6.0711 5.44387 5.84026 4.8756 5.84026H3.52402C3.46637 5.84026 3.41249 5.82662 3.36164 5.80743L0.934438 8.2396C-0.311479 9.48809 -0.311479 11.5121 0.934438 12.7606L3.36155 15.1926C3.41249 15.1734 3.46637 15.1598 3.52402 15.1598H4.8756C5.44387 15.1598 6.00019 14.929 6.40173 14.5263L9.56304 11.3585C10.1344 10.7865 11.1305 10.7862 11.7013 11.3588L14.851 14.5147C15.2525 14.9174 15.8089 15.1483 16.3771 15.1483H17.4763C17.5372 15.1483 17.5948 15.1617 17.648 15.1831L20.0656 12.7606C21.3115 11.5121 21.3115 9.48809 20.0656 8.2396Z"
													fill="#32BCAD"
												/>
											</g>
											<defs>
												<clipPath id="clip0_1654_979">
													<rect
														width="21"
														height="21"
														fill="white"
													/>
												</clipPath>
											</defs>
										</svg>
										<p className="text-black">
											Pix
											-
											Á
											vista
										</p>
									</div>
									<div className="text-[#000000]/60">
										Aprovação
										imediata.
									</div>
								</Button>
								<Button
									onClick={() =>
										setMethod(
											'card',
										)
									}
									disabled={
										method ===
										'card'
									}
									className="flex flex-col h-24 items-start bg-[#E7E7E7] border-1 border-primary justify-around rounded-xs hover:bg-[#E7E7E7]"
								>
									<div className="flex items-center gap-x-2">
										<Image
											alt=""
											src={
												card
											}
											className="size-6"
										/>
										<p className="text-black">
											Cartão
											de
											Crédito
										</p>
									</div>
									<div className="text-[#000000]/60">
										Prazo
										de
										até
										2
										horas.
									</div>
								</Button>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-center pl-20 pr-12 w-[415px]">
						<div className="flex flex-col justify-center bg-[#EFEFEF] w-72 px-4 py-6 mb-6">
							<div className="flex justify-start pb-2">
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
									asdf
								</p>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Mês
								</p>
								<p className="text-[#343434] text-sm">
									asdf
								</p>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Ano
								</p>
								<p className="text-[#343434] text-sm">
									asdf
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
									asdf
								</p>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Mês
								</p>
								<p className="text-[#343434] text-sm">
									asdf
								</p>
							</div>
							<div className="flex w-full justify-between items-center">
								<p className="text-[#343434]/80 text-sm">
									Ano
								</p>
								<p className="text-[#343434] text-sm">
									asdf
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
									asdf
								</p>
							</div>
							<div className="pt-4 space-y-4">
								<h1>
									Cupom
									(Desconto)
								</h1>
								<InputCustom
									className="p-2 bg-white"
									placeholder="Insira Aqui..."
									ref={
										null
									}
									type="regular"
									onChange={(
										e,
									) =>
										setCupon(
											e
												.target
												.value,
										)
									}
									value={
										cupon
									}
								/>
							</div>
						</div>
						<div className="flex items-start gap-x-2 p-4 bg-[#EFEFEF] mb-8">
							<div>
								<Checkbox
									onClick={() =>
										mark(
											!marked,
										)
									}
									className="border-1 border-primary bg-white"
								/>
							</div>
							<div className="text-sm">
								<p>
									Ao
									clicar
									no campo
									ao lado
									você
									estará
									aceitando
									todas
									nossas{' '}
									<span className="text-primary">
										diretrizes{' '}
									</span>
									e{' '}
									<span className="text-primary">
										termos
										de
										assinatura
										de
										serviço
									</span>
									, é
									muito
									importante
									que leia
									e
									certifique
									que está
									de
									acordo.{' '}
								</p>
							</div>
						</div>

						<ButtonText
							className=""
							onClick={() =>
								handlePayment()
							}
							disabled={
								!marked ||
								(method !=
									'pix' &&
									method !=
										'card')
							}
							text="FINALIZAR COMPRA"
							type="bg-primary"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
