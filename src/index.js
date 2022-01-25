import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import App from './App';

const httpLink = createHttpLink({
	uri: 'http://localhost:4000/',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('giftSeekersTokenData');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : null,
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ApolloProvider>,
	document.getElementById('root')
);
