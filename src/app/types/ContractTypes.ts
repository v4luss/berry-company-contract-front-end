export type ContractHeader = {
	id?: string;
	title: string;
	body: string;
};

export type Contract = {
	id?: string;
	contractHeaderId: string;
};

export type ContractClause = {
	id?: string;
	contractId: string;
	title: string;
	body: string;
	createdAt?: Date;
};

export type ContractClauseTemplate = {
	id?: string;
	title: string;
	body: string;
};
export type ContractService = {
	id?: string;
	projectId: string;
	name: string;
	description: string;
};
