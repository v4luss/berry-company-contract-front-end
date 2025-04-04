'use client';

import { ButtonText } from '@/components/buttons/ButtonCustomText';
import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-dropdown-menu';

export default function PaymentPage() {
	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="font-bolder text-3xl">PAGAMENTO</h1>
			<div className="flex">
				<div className="flex items-start  px-8 py-6 ">
					<div className="flex flex-col items-center gap-8">
						<div className="bg-[#EFEFEF]">
							conta
						</div>
						<div className="bg-[#EFEFEF]">
							pay
						</div>
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
						</div>
						<ButtonText
							className=""
							onClick={() => {}}
							text="FINALIZAR COMPRA"
							type="bg-primary"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
