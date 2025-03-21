'use client';
const ConfirmContractCreationModal = ({ data }: Record<string, any>) => {
	return <div>{data.services.map((s: any) => s.name)}</div>;
};
export { ConfirmContractCreationModal };
