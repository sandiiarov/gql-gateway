import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { hot } from 'react-hot-loader/root';
import { client } from './client';
import User from './containers/User';

const App = () => (
  <ApolloProvider client={client}>
    <User id="1" />
    <User id="2" />
    <User id="3" />
    <User id="4" />
  </ApolloProvider>
);

export default hot(App);
