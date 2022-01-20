import { gql } from '@apollo/client';

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
