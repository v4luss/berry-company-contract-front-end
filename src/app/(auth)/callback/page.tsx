'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { login, loginProvider } from '@/lib/Auth';

const Callback = () => {
	// const router = useRouter();

	// useEffect(() => {
	// 	const params = new URLSearchParams(window.location.search);
	// 	console.log(params);
	// 	const accessToken = params.get('access_token');
	// 	if (accessToken) {
	// 		loginProvider(accessToken as string);
	// 		router.push('/');
	// 	}
	// }, [router]);

	return <div>Loading...</div>;
};

export default Callback;
