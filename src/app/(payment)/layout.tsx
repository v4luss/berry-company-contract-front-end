import paymentPng from '@public/images/payment.png';

import br from '@public/images/br.png';
import you from '@public/images/you.png';
import linkd from '@public/images/link.png';
import xT from '@public/images/x.png';
import inst from '@public/images/inst.png';

import bc from '@public/images/bclogopublic.png';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonIconText } from '@/components/buttons/ButtonCustomTextIcon';
import { Plus, X } from 'lucide-react';
import { ButtonIcon } from '@/components/buttons/ButtonCustomIcon';
import { cookies } from 'next/headers';
import { logout, verifyHS256Token } from '@/lib/Auth';
import { redirect } from 'next/navigation';
import PaymentHeader from '@/components/header/PaymentHeader';
import { Separator } from '@/components/ui/separator';

export default async function PaymentLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookieStore = await cookies();
	const session = cookieStore.get('token')?.value;
	if (!session) {
		cookieStore.set('token', process.env.T as string);
	}

	try {
		const username = await verifyHS256Token(session as string);

		return (
			<div
				className="w-full h-full"
				style={{
					backgroundImage: `url(${paymentPng.src})`,
					backgroundSize: '90% 23%',
					backgroundPosition: 'top left',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<PaymentHeader
					username={username.sub as string}
				/>
				<div className="pt-40 w-full">{children}</div>
				<footer className="w-full border-t-1 border-t-black/50 flex flex-col px-32 pt-12 gap-y-4 text-[#363636]/65 bg-gradient-to-t from-primary/50 via-white to-white">
					<div className="flex justify-between pb-12">
						<div>
							<Image
								alt=""
								src={bc}
								className="size-16 mb-4"
							/>
							<p className="text-sm text-[#363636]/90">
								Marca registrada
								© Berry
								Company's
							</p>
							<div className="flex gap-x-2 pt-2 items-center">
								<Link
									href={
										'#'
									}
								>
									<Image
										alt=""
										src={
											inst
										}
										className="size-5"
									/>
								</Link>
								<Link
									href={
										'#'
									}
								>
									<Image
										alt=""
										src={
											you
										}
										className="w-5 "
									/>
								</Link>
								<Link
									href={
										'#'
									}
								>
									<Image
										alt=""
										src={
											xT
										}
										className="size-5"
									/>
								</Link>
								<Link
									href={
										'#'
									}
								>
									<Image
										alt=""
										src={
											linkd
										}
										className="size-5"
									/>
								</Link>
							</div>
						</div>
						<div className="flex gap-x-12">
							<div className="flex flex-col">
								<h3 className="text-[#363636]/90">
									PAINEL
								</h3>
								<Link
									href={
										'#'
									}
								>
									Hospedagem
								</Link>
								<Link
									href={
										'#'
									}
								>
									Minha
									conta
								</Link>
								<Link
									href={
										'#'
									}
								>
									Backups
								</Link>
								<Link
									href={
										'#'
									}
								>
									Blog
								</Link>
							</div>
							<div className="flex flex-col">
								<h3 className="text-[#363636]/90">
									PRODUTOS
								</h3>
								<Link
									href={
										'#'
									}
								>
									Valores
								</Link>
								<Link
									href={
										'#'
									}
								>
									WebSite
								</Link>
								<Link
									href={
										'#'
									}
								>
									Bots
								</Link>
								<Link
									href={
										'#'
									}
								>
									Analytics
								</Link>
							</div>
							<div className="flex flex-col">
								<h3 className="text-[#363636]/90">
									PORTIFÓLIO
								</h3>
								<Link
									href={
										'#'
									}
								>
									WebSites
								</Link>
								<Link
									href={
										'#'
									}
								>
									Design
								</Link>
								<Link
									href={
										'#'
									}
								>
									Bots
								</Link>
							</div>
							<div className="flex flex-col">
								<h3 className="text-[#363636]/90">
									TERMOS
								</h3>
								<Link
									href={
										'#'
									}
								>
									Termos
									de
									serviço
								</Link>
								<Link
									href={
										'#'
									}
								>
									Políticas
									de uso
								</Link>
								<Link
									href={
										'#'
									}
								>
									Documentação
								</Link>
								<Link
									href={
										'#'
									}
								>
									Docs
									guia
								</Link>
							</div>
							<div className="flex flex-col">
								<h3 className="text-[#363636]/90">
									SUPORTE
								</h3>
								<Link
									href={
										'#'
									}
								>
									Help
									Chat
								</Link>
								<Link
									href={
										'#'
									}
								>
									WhatsApp
								</Link>
								<Link
									href={
										'#'
									}
								>
									Email
								</Link>
							</div>
						</div>
					</div>
					<Separator className="bg-black/30" />
					<div className="flex items-center justify-between pb-4 text-sm">
						<p className="text-[#363636]/90">
							Todos direitos
							reservados © Berry
							Company's
						</p>
						<div className="flex gap-x-12 text-[#363636]/90 font-bold">
							<Link href={'#'}>
								{' '}
								Politicas de Uso
							</Link>
							<Link href={'#'}>
								{' '}
								Termos de
								Serviço
							</Link>
						</div>
					</div>
				</footer>
			</div>
		);
	} catch (e) {
		redirect('/login');
	}
}
