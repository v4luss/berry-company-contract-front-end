import { ListItem } from '@/app/types/ListItemType';

export const usersMocks: ListItem[] = [
	{
		user: { id: '4234', name: 'João Carlos' },
		subItems: { Status: 'Alive', Data: '02/03/2024' },
		buttons: [
			{ icon: 'ChartArea', modalId: 'addCategoriesModal' },
			{ icon: 'Trash', modalId: 'deleteAccount' },
		],
	},
	{
		user: { id: '543', name: 'Maria Eduarda' },
		subItems: { Status: 'Alive', Data: '06/12/2024' },
		buttons: [
			{ icon: 'ChartArea', modalId: 'addCategoriesModal' },
			{ icon: 'Trash', modalId: 'deleteAccount' },
		],
	},
	{
		user: { id: '980', name: 'André Bottari' },
		subItems: { Status: 'Off', Data: '12/02/2022' },
		buttons: [
			{ icon: 'ChartArea', modalId: 'addCategoriesModal' },
			{ icon: 'Trash', modalId: 'deleteAccount' },
		],
	},
	{
		user: { id: '21020', name: 'Gabriel Justos' },
		subItems: { Status: 'Off', Data: '04/06/2025' },
		buttons: [
			{ icon: 'ChartArea', modalId: 'addCategoriesModal' },
			{ icon: 'Trash', modalId: 'deleteAccount' },
		],
	},
	{
		user: { id: '777', name: 'Roberto Almeida' },
		subItems: { Status: 'Alive', Data: '01/01/2025' },
		buttons: [
			{ icon: 'ChartArea', modalId: 'addCategoriesModal' },
			{ icon: 'Trash', modalId: 'deleteAccount' },
		],
	},
];
