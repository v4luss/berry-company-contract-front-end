'use client';
import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // Set your API base URL
	headers: { 'Content-Type': 'application/json' },
});

const apiPublic = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // Set your API base URL
	headers: { 'Content-Type': 'application/json' },
});
// Request interceptor
api.interceptors.request.use(async (config) => {
	const token = JSON.parse(Cookies.get('token'));

	if (token) {
		config.headers.Authorization = `Bearer ${token.access_token}`; // Attach token to headers
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
