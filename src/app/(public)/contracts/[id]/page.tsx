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
	const { email } = useCookies();
	console.log(email);
	if (email == 'asdf') return <EditContractPage id={id as string} />;
	else return <ViewContractPage id={id as string} />;
}
