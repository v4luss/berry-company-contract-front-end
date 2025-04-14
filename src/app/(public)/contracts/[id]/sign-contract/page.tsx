'use client';

import { ModalContext } from '@/app/context/ModalContext';
import { ButtonText } from '@/components/buttons/ButtonCustomText';
import { InputCustom } from '@/components/input/InputCustom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useContext, useEffect, useRef, useState } from 'react';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { api } from '@/services/api-client';
import jsPDF from 'jspdf';
export default function SignPage() {
	const router = useRouter();
	const [finalContract, setFinalContract] = useState<string>('');
	const [warnings, setWarnings] = useState<string | undefined>();
	const name = useRef<HTMLInputElement>(null);
	const cpfCnpj = useRef<HTMLInputElement>(null);
	const canvasRef = useRef<ReactSketchCanvasRef>(null);
	const { openModal } = useContext(ModalContext);
	const [isSigned, sign] = useState<boolean>(false);
	const handleSign = () => {
		sign(true);
		// setWarnings('Dados inválidos.');
	};
	const params = useParams(); // Access the params directly
	const id = params.id; // Get the id from params
	const handleClearClick = () => {
		canvasRef.current?.clearCanvas();
	};
	async function handleSave() {
		const dataURL = await canvasRef.current?.exportImage('png');
		if (!dataURL) return;
		const base64 = dataURL.replace(/^data:image\/png;base64,/, '');

		setFinalContract(base64);
		sign(true);
		await api.put('/contracts', { id, signature: base64 });
	}
	const generatePDF = async () => {
		const doc = new jsPDF();

		const contract = (await api.get('/contracts/' + id)).data;

		const header = contract?.header?.content || '';
		const clausesText =
			contract?.clauses?.map((c: any) => c.body).join('\n') ||
			'';

		// Combine header + clauses
		const rawText = `${header}\n\n${clausesText}`;

		// Split and wrap
		const lines = rawText.split('\\n');
		const wrappedLines = lines.flatMap((line) =>
			doc.splitTextToSize(line, 180),
		);

		doc.text(wrappedLines, 10, 10);

		// Handle image
		const imgData = finalContract.startsWith('data:image')
			? finalContract
			: 'data:image/png;base64,' + finalContract;

		// Position the image after the text
		const textHeight = 10 + wrappedLines.length * 7; // approximate
		const pageWidth = doc.internal.pageSize.getWidth();
		const pageHeight = doc.internal.pageSize.getHeight();
		const imgWidth = 100;
		const imgHeight = 40;

		const xPos = pageWidth - imgWidth - 10; // 10 is the right margin
		const yPos = pageHeight - imgHeight - 10; // 10 is the bottom margin

		doc.addImage(imgData, 'PNG', xPos, yPos, imgWidth, imgHeight);

		doc.save('contract.pdf');
	};

	// Handle loading state or undefined id
	if (!id) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			{!isSigned ? (
				<div className="flex flex-col items-center">
					<div className="pb-4">
						<h3 className="text-3xl">
							ASSINATURA
						</h3>
					</div>
					<div className="w-full space-y-6 pb-14">
						<InputCustom
							ref={name}
							type="regular"
							placeholder="Nome Completo..."
							className="text-black"
						/>
						<InputCustom
							ref={cpfCnpj}
							type="regular"
							placeholder="CPF/CNPJ..."
							className="text-black"
						/>
						<div>
							<ReactSketchCanvas
								width="100%"
								height="150px"
								canvasColor="transparent"
								strokeColor="#a855f7"
								ref={canvasRef}
							/>
							<Button
								className="mt-4"
								onClick={() =>
									handleClearClick()
								}
							>
								Limpar
							</Button>
						</div>
					</div>
					<p className="text-primary pb-12">
						{warnings}
					</p>
					<div className="flex justify-center items-center gap-x-24 pb-24">
						<ButtonText
							className=""
							onClick={() =>
								router.push(
									'/contracts/' +
										id,
								)
							}
							text="VOLTAR"
							type="regular"
						/>
						<ButtonText
							className=""
							onClick={() =>
								handleSave()
							}
							text="ASSINAR"
							type="bg-primary"
						/>
					</div>
				</div>
			) : (
				<div className="flex flex-col gap-y-4 items-center pb-24">
					<div className="flex flex-col items-center gap-y-4 pb-24">
						<h3 className="text-2xl">
							CONTRATO ASSINADO
						</h3>
						<Check className="text-green-600 size-24" />
					</div>

					<div className="flex justify-center items-center gap-x-24">
						<ButtonText
							className=""
							onClick={() =>
								router.push(
									'/contracts/' +
										id,
								)
							}
							text="VOLTAR"
							type="regular"
						/>
						<ButtonText
							className=""
							onClick={() => {
								router.push(
									'/payment/' +
										id,
								);
							}}
							text="PAGAR"
							type="bg-primary"
						/>
					</div>
					<Button
						className={'w-96'}
						onClick={() => generatePDF()}
					>
						BAIXAR PDF
					</Button>
				</div>
			)}
		</div>
	);
}
