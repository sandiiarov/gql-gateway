import * as React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import { navigate } from '@reach/router';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { GetUsersQuery } from '../__generated__/types';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`;

const styles = {
  root: {
    display: 'grid',
    gap: '8px',
  },
};

interface Props extends WithStyles<typeof styles> {
  userId?: string;
}

const Users: React.FunctionComponent<Props> = ({ classes, userId = '1' }) => {
  const { data } = useQuery<GetUsersQuery>(GET_USERS, { suspend: false });

  return (
    <div className={classes.root}>
      {data &&
        data.users &&
        data.users.map(({ id, name }) => (
          <Button
            key={id}
            variant="contained"
            disabled={id === userId}
            onClick={() => navigate(id)}
          >
            {name}
          </Button>
        ))}
    </div>
  );
};

export default withStyles(styles)(Users);
