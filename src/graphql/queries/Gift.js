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
		$authorId: Int!
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
			authorId: $authorId
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
			startDate
			active
			difficulty
			imageUrl
			location
			lat
			lng
			author {
				id
				username
			}
			seekers {
				username
			}
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
			location
		}
	}
`;
