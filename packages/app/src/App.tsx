import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ApolloProvider } from 'react-apollo';
import { client } from './client';
import Users from './containers/Users';

const App = () => (
  <ApolloProvider client={client}>
    <Users />
  </ApolloProvider>
);

export default hot(App);
