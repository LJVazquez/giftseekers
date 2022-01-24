import { gql } from '@apollo/client';

export const GET_USER = gql`
	query findUser($userId: Int!) {
		user(id: $userId) {
			username
			gifts {
				id
				name
				imageUrl
				difficulty
				city
				seekersCount
			}
			seeking {
				id
				name
				imageUrl
				difficulty
				city
				seekersCount
			}
		}
	}
`;

export const REGISTER_USER = gql`
	mutation addPerson($username: String!, $password: String!) {
		addPerson(username: $username, password: $password) {
			id
			username
		}
	}
`;
