import React from 'react';
import { hot } from 'react-hot-loader';
import Button from '@gql-gateway/components/Button';
import Header from '@gql-gateway/components/Header';

const App: React.FunctionComponent<{}> = () => {
  const [state, setState] = React.useState(0);

  return (
    <>
      <Header>{state}</Header>
      <Button onClick={() => setState(state + 1)}>+</Button>
      <Button onClick={() => setState(state - 1)}>-</Button>
    </>
  );
};

export default hot(module)(App);
