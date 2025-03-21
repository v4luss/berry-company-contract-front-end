'use client';

import { useParams } from 'next/navigation';

export default function ContractPage() {
	const { id } = useParams();
	return id;
}
