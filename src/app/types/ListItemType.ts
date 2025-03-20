export type ListItem = {
	user: { id: string; name: string };
	subItems: Record<string, string>;
	buttons: { icon: string; modalId: string }[];
};
