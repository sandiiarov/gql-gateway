import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import { Router, Redirect } from '@reach/router';
import Page from './Page';

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      {
        // @ts-ignore
        <Redirect path="/" to="/1" noThrow />
      }
      <Page path="/:id" />
    </Router>
  </ApolloProvider>
);

export default hot(App);
