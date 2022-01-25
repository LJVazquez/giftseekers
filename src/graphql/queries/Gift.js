import { gql } from '@apollo/client';

export const CREATE_GIFT = gql`
	mutation createGift(
		$name: String!
		$description: String!
		$city: City!
		$location: String!
		$lat: Float!
		$lng: Float!
		$difficulty: Int!
		$imageUrl: String!
	) {
		createGift(
			name: $name
			description: $description
			city: $city
			location: $location
			lat: $lat
			lng: $lng
			difficulty: $difficulty
			imageUrl: $imageUrl
		) {
			id
			name
			author {
				username
			}
		}
	}
`;

export const GET_GIFT = gql`
	query getGift($id: Int!) {
		gift(id: $id) {
			id
			name
			description
			startDate
			active
			difficulty
			imageUrl
			location
			city
			lat
			lng
			author {
				id
				username
			}
			seekers {
				username
			}
			authorId
		}
	}
`;

export const GET_LATEST_GIFTS = gql`
	query getLatestGifts($amount: Int!) {
		latestGifts(amount: $amount) {
			id
			name
			startDate
			active
			difficulty
			imageUrl
			city
		}
	}
`;
