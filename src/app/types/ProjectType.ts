export type Project = {
	id?: string;
	contractId: string;
	userId: string;
	name: string;
	gb: string;
	renewWhen?: Date;
	createdAt?: Date;
};
export type Team = {
	id?: string;
	projectId: string;
};

export type Member = {
	id?: string;
	teamId: string;
	name: string;
	stack: string;
	cnpj?: string;
	cpf?: string;
	email: string;
};
