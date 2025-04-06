import paymentPng from '@public/images/payment.png';

import br from '@public/images/br.png';

import bc from '@public/images/bclogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonIconText } from '@/components/buttons/ButtonCustomTextIcon';
import { Plus } from 'lucide-react';
import { ButtonIcon } from '@/components/buttons/ButtonCustomIcon';
import { cookies } from 'next/headers';
import { logout, verifyHS256Token } from '@/lib/Auth';
import { redirect } from 'next/navigation';
import PaymentHeader from '@/components/header/PaymentHeader';

export default async function PaymentLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookieStore = await cookies();
	const session = cookieStore.get('token')?.value;
	if (!session) {
		cookieStore.set(
			'token',
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMTFAZ21haWwuY29tIiwiaWF0IjoxNzQzODk0MDg0LCJleHAiOjE3NDM5ODA0ODR9.4WGK7v-lmBfzbyjJ3-PvQISu4PlOKifswetkhDpYXRs',
		);
	}

	try {
		const username = await verifyHS256Token(session as string);

		return (
			<div
				className="w-full h-full pr-4"
				style={{
					backgroundImage: `url(${paymentPng.src})`,
					backgroundSize: '90% 60%',
					backgroundPosition: 'top left',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<PaymentHeader
					username={username.sub as string}
				/>
				<div className="pt-40">{children}</div>
			</div>
		);
	} catch (e) {
		redirect('/login');
	}
}
