export type ClauseTemplate = {
	title: string;
	body: string;
};

export type ContractTemplate = {
	id: string;
	name: string;
	head: string[];
	clauses: ClauseTemplate[];
};
