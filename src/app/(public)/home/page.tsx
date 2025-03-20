'use client';
import { ButtonText } from '@/components/buttons/ButtonCustomText';

export default function Home() {
	return (
		<div className="w-full h-full flex flex-col gap-y-8 justify-center items-center">
			<h1 className="font-bold text-3xl">
				Desculpe, não foi possívle encontrar esta
				pagina.
			</h1>
			<ButtonText
				className=""
				onClick={() => {}}
				text="Voltar"
				type="bg-primary"
			/>
		</div>
	);
}
