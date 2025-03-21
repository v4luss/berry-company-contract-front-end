export type ListItem = {
	user?: { id: string; name: string };
	contract?: { name: string; members: any[]; services: any[] };
	subItems: Record<string, string>;
	buttons: {
		icon: string;
		modalId: string;
		color: string;
		borderColor: string;
	}[];
};
