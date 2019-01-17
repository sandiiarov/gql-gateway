import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import User from './User';

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

const App = () => (
  <ApolloProvider client={client}>
    <User />
  </ApolloProvider>
);

export default hot(App);
