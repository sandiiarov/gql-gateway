import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { Button, Header } from '@gql-gateway/components';

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      username
    }
  }
`;

const User = () => {
  const [id, setId] = React.useState('1');
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { id },
    suspend: false,
  });

  return (
    <div>
      {loading && 'loading'}
      {!loading && !error && <Header>{data.user.name}</Header>}
      <input value={id} onChange={event => setId(event.target.value)} />
    </div>
  );
};

export default User;
