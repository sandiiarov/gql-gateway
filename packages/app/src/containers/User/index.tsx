import React from 'react';
import { GetUserComponent } from '../../../generated/graphql';

const User = () => (
  <GetUserComponent variables={{ id: '1' }}>
    {({ data, loading }) => {
      if (loading) return 'loading...';

      return (
        data && (
          <ul>
            <li>{data.user.id}</li>
            <li>{data.user.name}</li>
            <li>{data.user.email}</li>
          </ul>
        )
      );
    }}
  </GetUserComponent>
);

export default User;
