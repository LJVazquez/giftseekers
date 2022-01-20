import { gql } from '@apollo/client';

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
