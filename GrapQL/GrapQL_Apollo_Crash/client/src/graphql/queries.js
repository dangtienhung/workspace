import { gql } from '@apollo/client';

const getBooksQuery = gql`
	query getBooksQuery {
		books {
			id
			name
			genre
		}
	}
`;

const getBookQuery = gql`
	query getBookQuery($id: ID!) {
		book(id: $id) {
			id
			name
			genre
			author {
				id
				name
				age
				book {
					id
					name
				}
			}
		}
	}
`;

export { getBooksQuery, getBookQuery };
