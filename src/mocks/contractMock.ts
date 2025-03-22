import { user1Mock, user2Mock, user3Mock } from './userMocks';
export const service1Mock = {
	name: 'Support',
	value: '3400',
	descount: '15',
};
export const service2Mock = {
	name: 'Support',
	value: '3400',
	descount: '15',
};
export const service3Mock = {
	name: 'Support',
	value: '3400',
	descount: '15',
};
export const service4Mock = {
	name: 'Support',
	value: '3400',
	descount: '15',
};
export const contractMock = {
	id: '1',
	name: 'namezin',
	members: [
		{
			user: user1Mock,
			stack: 'FullStack',
			perHour: '8h',
			value: '8000',
			terms: 'Berry Trm',
		},
		{
			user: user2Mock,
			stack: 'DBA',
			perHour: '8h',
			value: '3000',
			terms: 'Berry Trm',
		},
		{
			user: user3Mock,
			stack: 'Backend',
			perHour: '8h',
			value: '6000',
			terms: 'Berry Trm',
		},
	],
	services: [service1Mock, service2Mock, service3Mock, service4Mock],
};
