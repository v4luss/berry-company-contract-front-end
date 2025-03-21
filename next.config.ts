import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: '/', // Root path
				destination: '/home', // Redirect to /home
				permanent: true, // Use true for permanent redirect (301) or false for temporary (302)
			},
		];
	},
	// Add other Next.js configuration options here if needed
};

export default nextConfig;
