'use server';
import axios from 'axios';
import { cookies } from 'next/headers';

const api = axios.create({
	baseURL: process.env.BACKEND_URL, // Set your API base URL
	headers: { 'Content-Type': 'application/json' },
});

const apiPublic = axios.create({
	baseURL: process.env.BACKEND_URL, // Set your API base URL
	headers: { 'Content-Type': 'application/json' },
});
// Request interceptor
api.interceptors.request.use(async (config) => {
	const cookieSession = await cookies();
	const token = cookieSession.get('token'); // Get token from localStorage
	if (token) {
		config.headers.Authorization = `Bearer ${token}`; // Attach token to headers
	}
	return config;
});

// Response interceptor
api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response.status === 401) {
			// Handle unauthorized errors (e.g., redirect to login)
		}
		return Promise.reject(error);
	},
);

export { api, apiPublic };
