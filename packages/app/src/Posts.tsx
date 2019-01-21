import * as React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { GetPostsQuery, GetPostsVariables } from '../__generated__/types';

const GET_POSTS = gql`
  query GetPosts($userId: ID!) {
    posts(userId: $userId) {
      id
      title
      body
    }
  }
`;

const styles = {
  root: {
    display: 'grid',
    gap: '8px',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
};

interface Props extends WithStyles<typeof styles> {
  userId?: string;
}

const Posts: React.FunctionComponent<Props> = ({ classes, userId = '1' }) => {
  const { data } = useQuery<GetPostsQuery, GetPostsVariables>(GET_POSTS, {
    variables: { userId },
    suspend: false,
  });

  return (
    <div className={classes.root}>
      {data &&
        data.posts &&
        data.posts.map(({ id, title, body }) => (
          <Card key={id}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              {body}
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default withStyles(styles)(Posts);
