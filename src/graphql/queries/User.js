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
	mutation registerUser($username: String!, $password: String!) {
		registerUser(username: $username, password: $password) {
			id
			username
		}
	}
`;

export const LOGIN = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			id
			username
			value
		}
	}
`;
