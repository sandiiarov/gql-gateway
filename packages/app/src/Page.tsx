import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Users from './Users';
import Posts from './Posts';

interface Params {
  id: string;
}

const styles = {
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gap: '20px',
  },
};

interface Props
  extends RouteComponentProps<Params>,
    WithStyles<typeof styles> {}

const Page: React.FunctionComponent<Props> = ({ classes, id }) => (
  <div className={classes.root}>
    <Users userId={id} />
    <Posts userId={id} />
  </div>
);

export default withStyles(styles)(Page);
