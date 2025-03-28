export type Chat = {
	id?: string;
	context: string;
	createdAt?: Date;
	userId: string;
};

export type ChatMessage = {
	id?: string;
	chatId: string;
	fromId: string;
	toId: string;
	createdAt?: Date;
	content: string;
	image?: string;
	file?: string;
	video?: string;
};
