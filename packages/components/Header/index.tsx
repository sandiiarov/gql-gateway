import * as React from 'react';

interface Props {
  /** The content of the header */
  children: React.ReactNode;
}

const Header: React.FunctionComponent<Props> = ({ children }) => (
  <h1>{children}</h1>
);

export default Header;
