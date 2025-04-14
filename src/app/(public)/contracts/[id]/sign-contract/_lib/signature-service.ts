'use server';

import { writeFile } from 'fs/promises';
import path from 'path';

export async function saveSignature({
	contractId,
	name,
	cpfCnpj,
	imageBase64,
}: {
	contractId: string;
	name: string;
	cpfCnpj: string;
	imageBase64: string;
}) {
	if (!imageBase64 || !contractId || !name || !cpfCnpj) {
		throw new Error('Missing required fields');
	}

	const buffer = Buffer.from(imageBase64, 'base64');
	const fileName = `${contractId}-${Date.now()}.png`;

	// ✅ Use an absolute path for the public directory
	const filePath = path.join(
		process.cwd(),
		'public',
		'signatures',
		fileName,
	);

	await writeFile(filePath, buffer);

	return {
		success: true,
		fileName,
		url: `/signatures/${fileName}`, // You can access it from the browser
	};
}
