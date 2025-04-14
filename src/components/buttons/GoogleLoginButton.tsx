import { apiPublic } from '@/services/api';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
	const id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;
	const responseGoogle = async (response: any) => {
		const token = response.tokenId; // Get the token from the response

		// Send the token to the backend
		try {
			const res = await apiPublic.post('login', { token });
		} catch (error) {
			console.error('Error logging in:', error);
		}
	};

	return (
		<GoogleLogin
			clientId={id}
			buttonText="Login with Google"
			onSuccess={responseGoogle}
			onFailure={(error) =>
				console.error('Login failed:', error)
			}
			cookiePolicy={'single_host_origin'}
		/>
	);
};

export default GoogleLoginButton;
