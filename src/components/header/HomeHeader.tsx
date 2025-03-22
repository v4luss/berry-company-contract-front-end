'use client';
import bclogo from '@public/images/bclogopublic.png';
import br from '@public/images/br.png';
import { Plus, SeparatorVertical } from 'lucide-react';
import Image from 'next/image';
import { ButtonIcon } from '../buttons/ButtonCustomIcon';
import { ButtonIconText } from '../buttons/ButtonCustomTextIcon';
import { useContext } from 'react';
import { ModalContext } from '@/app/context/ModalContext';
import { BreadCrumbsCustom } from '../BreadCrumbsCustom';
const HomeHeader = () => {
	const { openModal } = useContext(ModalContext);
	return (
		<header className="py-4 px-8 flex items-center justify-between">
			<div className="flex items-center gap-4">
				<div>
					<Image
						src={bclogo}
						alt=""
						className="size-24"
					/>
				</div>

				<div className="border-l-1 border-l-black h-12 flex items-center pl-4">
					<BreadCrumbsCustom />
				</div>
			</div>
			<div className="flex items-center gap-x-8">
				<ButtonIcon
					Icon={
						<svg
							width="17"
							height="21"
							viewBox="0 0 17 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.167969 17.7917V15.7084H2.2513V8.41671C2.2513 6.97574 2.68533 5.69535 3.55339 4.57556C4.42144 3.45577 5.54991 2.72226 6.9388 2.37504V1.64587C6.9388 1.21185 7.09071 0.842923 7.39453 0.539103C7.69835 0.235284 8.06727 0.083374 8.5013 0.083374C8.93533 0.083374 9.30425 0.235284 9.60807 0.539103C9.91189 0.842923 10.0638 1.21185 10.0638 1.64587V2.37504C11.4527 2.72226 12.5812 3.45577 13.4492 4.57556C14.3173 5.69535 14.7513 6.97574 14.7513 8.41671V15.7084H16.8346V17.7917H0.167969ZM8.5013 20.9167C7.92839 20.9167 7.43793 20.7127 7.02995 20.3047C6.62196 19.8967 6.41797 19.4063 6.41797 18.8334H10.5846C10.5846 19.4063 10.3806 19.8967 9.97266 20.3047C9.56467 20.7127 9.07422 20.9167 8.5013 20.9167ZM4.33464 15.7084H12.668V8.41671C12.668 7.27087 12.26 6.28997 11.444 5.474C10.628 4.65803 9.64713 4.25004 8.5013 4.25004C7.35547 4.25004 6.37457 4.65803 5.55859 5.474C4.74262 6.28997 4.33464 7.27087 4.33464 8.41671V15.7084Z"
								fill="#FFA500"
							/>
						</svg>
					}
					onClick={(e) => {}}
					className="size-10 rounded-sm"
				/>
				<ButtonIconText
					Icon={<Plus />}
					className="h-10 px-4 rounded-sm"
					onClick={() =>
						openModal('addUserModal')
					}
					text="Nome do Usuario"
					reverse
				/>
				<ButtonIcon
					Icon={
						<Image
							alt=""
							src={br}
							className=""
						/>
					}
					onClick={(e) => {}}
					className="size-10 rounded-sm"
				/>
			</div>
		</header>
	);
};
export { HomeHeader };
