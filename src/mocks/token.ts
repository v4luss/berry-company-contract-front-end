'use server';

import { cookies } from 'next/headers';

export async function setToken() {
	const cookieStore = await cookies();
	const session = cookieStore.get('token')?.value;
	if (!session) {
		cookieStore.set(
			'token',
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMiIsImlhdCI6MTc0Mzc5NjQwOSwiZXhwIjoxNzQzODgyODA5fQ.wenDJgV2VZXN3mQwYLkNj9w8oBwc2AY9yIXZfVQbxCY',
			{
				httpOnly: true, // Set this to true if you want to prevent JS access
				path: '/', // Set the path for the cookie
				maxAge: 60 * 60 * 24, // Optional: Set cookie expiration (e.g., 1 day)
			},
		);
	}
}
