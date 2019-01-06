import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Header: React.FunctionComponent<Props> = ({ children }) => (
  <h1>{children}</h1>
);

export default Header;
