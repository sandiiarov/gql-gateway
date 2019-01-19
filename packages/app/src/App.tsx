import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { ApolloProvider } from 'react-apollo-hooks';
import { client } from './client';
import User from './User';

const App = () => (
  <ApolloProvider client={client}>
    <User />
  </ApolloProvider>
);

export default hot(App);
