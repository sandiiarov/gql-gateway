import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { hot } from 'react-hot-loader/root';
import { client } from './client';
import User from './containers/User';

const App = () => (
  <ApolloProvider client={client}>
    <User />
  </ApolloProvider>
);

export default hot(App);
