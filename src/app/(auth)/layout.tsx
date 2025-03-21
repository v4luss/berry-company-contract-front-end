import Image from 'next/image';
import bclogo from '@public/images/bclogo.png';
export default function AuthPage({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex">
			<div className="relative">
				<Image
					src={bclogo}
					alt=""
					className="absolute size-72 mt-42 ml-24 self-center bg-blue-400"
				/>
				<svg
					className="h-screen w-2xl"
					viewBox="0 0 676 1080"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						x="-1543"
						y="-275"
						width="2219"
						height="1629"
						rx="814.5"
						fill="#EB1757"
					/>{' '}
				</svg>
			</div>
			<div className="flex flex-col justify-center items-center w-xl gap-y-12">
				{children}
			</div>
		</div>
	);
}
