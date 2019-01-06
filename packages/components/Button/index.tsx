import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: (event: React.SyntheticEvent<HTMLElement>) => void;
};

const Button: React.FunctionComponent<Props> = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
