import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Button, Header } from '@gql-gateway/components';

const App = () => {
  const [state, setState] = React.useState(0);

  return (
    <>
      <Header>{state}</Header>
      <Button onClick={() => setState(state + 1)}>+</Button>
      <Button onClick={() => setState(state - 1)}>-</Button>
    </>
  );
};

export default hot(App);
