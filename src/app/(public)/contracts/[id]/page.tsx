'use client';
import { useCookies } from '@/app/context/CookieContext';
import {
	EditContractPage,
	ViewContractPage,
} from '@/components/ContractPageComponentes';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ContractUniquePage() {
	const { id } = useParams();
	const { role } = useCookies();
	if (role == 'Administrador')
		return <EditContractPage id={id as string} />;
	else return <ViewContractPage id={id as string} />;
}
