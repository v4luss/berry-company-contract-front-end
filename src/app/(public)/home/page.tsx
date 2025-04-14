'use client';
import { ButtonText } from '@/components/buttons/ButtonCustomText';
import { logout } from '@/lib/Auth';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();
	const logoutHanlder = async () => {
		const lo = await logout();
		if (lo) {
			router.push('/login');
		}
	};
	return (
		<div className="w-full h-[480px] flex flex-col gap-y-8 justify-center items-center">
			<h1 className="font-bold text-3xl">
				Desculpe, não foi possível encontrar esta
				pagina.
			</h1>
			<ButtonText
				className=""
				onClick={() => logoutHanlder()}
				text="Voltar"
				type="bg-primary"
			/>
		</div>
	);
}
