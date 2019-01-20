import * as React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';

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
      {!loading && !error && <div>{data.user.name}</div>}
      <input value={id} onChange={event => setId(event.target.value)} />
    </div>
  );
};

export default User;
