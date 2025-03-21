'use client';

import { useParams } from 'next/navigation';

export default function EditContractPage() {
	const { id } = useParams();
	return id;
}
