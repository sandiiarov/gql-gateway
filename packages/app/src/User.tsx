import * as React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import { Button, Header } from '@gql-gateway/components';

export const GET_USER = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      
    }
  }
`;

const User = () => {
  const { data } = useQuery(GET_USER, { variables: { id: '1' } });

  return <div>asd</div>;
};

export default User;
