import {
	clause1Mock,
	clause2Mock,
	clause3Mock,
	clause4Mock,
	clause5Mock,
	clause6Mock,
	clause7Mock,
	clause8Mock,
	contractMock,
} from './clauseMocks';
import { user1Mock, user2Mock, user3Mock } from './userMocks';
export const service1Mock = {
	name: 'Support',
	value: '3400',
	descount: '20',
};
export const service2Mock = {
	name: 'Back',
	value: '9760',
	descount: '15',
};
export const service3Mock = {
	name: 'Front',
	value: '5800',
	descount: '8',
};
export const service4Mock = {
	name: 'DevOps',
	value: '8000',
	descount: '15',
};
export const contractMockDone = {
	id: '1',
	name: 'namezin',
	head: contractMock.head,
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
	clauses: [
		clause1Mock,
		clause2Mock,
		clause3Mock,
		clause4Mock,
		clause5Mock,
		clause6Mock,
		clause7Mock,
		clause8Mock,
	],
	services: [service1Mock, service2Mock, service3Mock, service4Mock],
};
