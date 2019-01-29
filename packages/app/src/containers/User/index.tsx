import React from 'react';
import { GetUserComponent } from '../../../generated/graphql';

interface Props {
  id?: string;
}

const User = ({ id }: Required<Props>) => (
  <GetUserComponent variables={{ id }}>
    {({ data, loading }) => {
      if (loading) return 'loading...';

      return (
        data && (
          <ul>
            <li>{data.user.id}</li>
            <li>{data.user.name}</li>
            <li>{data.user.username}</li>
            <li>{data.user.email}</li>
          </ul>
        )
      );
    }}
  </GetUserComponent>
);

User.defaultProps = {
  id: '1',
};

export default User;
