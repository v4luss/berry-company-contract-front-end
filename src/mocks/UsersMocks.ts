import { ListItem } from '@/app/types/ListItemType';
import {
	user1Mock,
	user2Mock,
	user3Mock,
	user4Mock,
	user5Mock,
} from './userMocks';
import { contractMockDone } from './contractMock';

export const usersMocks: ListItem[] = [
	{
		user: user1Mock,
		subItems: { Status: 'Alive', Data: '02/03/2024' },
		buttons: [
			{
				icon: 'ChartArea',
				modalId: 'addCategoriesModal',
				color: 'y',
				borderColor: 'yb',
			},
			{
				icon: 'Trash',
				modalId: 'deleteAccount',
				color: 'r',
				borderColor: 'rb',
			},
		],
	},
	{
		user: user2Mock,
		subItems: { Status: 'Alive', Data: '06/12/2024' },
		buttons: [
			{
				icon: 'ChartArea',
				modalId: 'addCategoriesModal',
				color: 'y',
				borderColor: 'yb',
			},
			{
				icon: 'Trash',
				modalId: 'deleteAccount',
				color: 'r',
				borderColor: 'rb',
			},
		],
	},
	{
		user: user3Mock,
		subItems: { Status: 'Off', Data: '12/02/2022' },
		buttons: [
			{
				icon: 'ChartArea',
				modalId: 'addCategoriesModal',
				color: 'y',
				borderColor: 'yb',
			},
			{
				icon: 'Trash',
				modalId: 'deleteAccount',
				color: 'r',
				borderColor: 'rb',
			},
		],
	},
	{
		user: user4Mock,
		subItems: { Status: 'Off', Data: '04/06/2025' },
		buttons: [
			{
				icon: 'ChartArea',
				modalId: 'addCategoriesModal',
				color: 'y',
				borderColor: 'yb',
			},
			{
				icon: 'Trash',
				modalId: 'deleteAccount',
				color: 'r',
				borderColor: 'rb',
			},
		],
	},
	{
		user: user5Mock,
		subItems: { Status: 'Alive', Data: '01/01/2025' },
		buttons: [
			{
				icon: 'ChartArea',
				modalId: 'addCategoriesModal',
				color: 'y',
				borderColor: 'yb',
			},
			{
				icon: 'Trash',
				modalId: 'deleteAccount',
				color: 'r',
				borderColor: 'rb',
			},
		],
	},
];
export const contractsMock: ListItem[] = [
	{
		contract: contractMockDone,
		subItems: { Status: 'Alive', Data: '02/03/2024' },
		buttons: [
			{
				icon: 'Eye',
				modalId: '',
				color: 'b',
				borderColor: 'bb',
			},
			{
				icon: 'Pencil',
				modalId: '',
				color: 'g',
				borderColor: 'gb',
			},
			{
				icon: 'Trash',
				modalId: '',
				color: 'r',
				borderColor: 'rb',
			},
		],
	},
	{
		contract: contractMockDone,
		subItems: { Status: 'Alive', Data: '06/12/2024' },
		buttons: [
			{
				icon: 'Eye',
				modalId: '',
				color: 'b',
				borderColor: 'bb',
			},
			{
				icon: 'Pencil',
				modalId: '',
				color: 'g',
				borderColor: 'gb',
			},
			{
				icon: 'Trash',
				modalId: '',
				color: 'r',
				borderColor: 'rb',
			},
		],
	},
	{
		contract: contractMockDone,
		subItems: { Status: 'Off', Data: '12/02/2022' },
		buttons: [
			{
				icon: 'Eye',
				modalId: '',
				color: 'b',
				borderColor: 'bb',
			},
			{
				icon: 'Pencil',
				modalId: '',
				color: 'g',
				borderColor: 'gb',
			},
			{
				icon: 'Trash',
				modalId: '',
				color: 'r',
				borderColor: 'rb',
			},
		],
	},
	{
		contract: contractMockDone,
		subItems: { Status: 'Off', Data: '04/06/2025' },
		buttons: [
			{
				icon: 'Eye',
				modalId: '',
				color: 'b',
				borderColor: 'bb',
			},
			{
				icon: 'Pencil',
				modalId: '',
				color: 'g',
				borderColor: 'gb',
			},
			{
				icon: 'Trash',
				modalId: '',
				color: 'r',
				borderColor: 'rb',
			},
		],
	},
	{
		contract: contractMockDone,
		subItems: { Status: 'Alive', Data: '01/01/2025' },
		buttons: [
			{
				icon: 'Eye',
				modalId: '',
				color: 'b',
				borderColor: 'bb',
			},
			{
				icon: 'Pencil',
				modalId: '',
				color: 'g',
				borderColor: 'gb',
			},
			{
				icon: 'Trash',
				modalId: '',
				color: 'r',
				borderColor: 'rb',
			},
		],
	},
];
