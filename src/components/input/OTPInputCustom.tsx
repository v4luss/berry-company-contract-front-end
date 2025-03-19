'use client';
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from '../ui/input-otp';

type otpInpProps = {
	value: string;
	setValue: (value: string) => void;
};
const OTPInputCustom = ({ value, setValue }: otpInpProps) => {
	return (
		<InputOTP
			maxLength={6}
			value={value}
			onChange={(value) => setValue(value)}
		>
			<InputOTPGroup>
				<InputOTPSlot
					index={0}
					className="bg-white rounded-sm border-primary"
				/>
			</InputOTPGroup>
			<InputOTPGroup>
				<InputOTPSlot
					index={1}
					className="bg-white rounded-sm border-primary"
				/>
			</InputOTPGroup>
			<InputOTPGroup>
				<InputOTPSlot
					index={2}
					className="bg-white rounded-sm border-primary"
				/>
			</InputOTPGroup>
			<InputOTPGroup>
				<InputOTPSlot
					index={3}
					className="bg-white rounded-sm border-primary"
				/>
			</InputOTPGroup>
			<InputOTPGroup>
				<InputOTPSlot
					index={4}
					className="bg-white rounded-sm border-primary"
				/>
			</InputOTPGroup>
			<InputOTPGroup>
				<InputOTPSlot
					index={5}
					className="bg-white rounded-sm border-primary"
				/>
			</InputOTPGroup>
		</InputOTP>
	);
};
export { OTPInputCustom };
