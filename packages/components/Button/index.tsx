import * as React from 'react';

interface Props {
  /** The content of the button */
  children: React.ReactNode;
  /** Callback fired when the button is clicked */
  onClick: (event: React.SyntheticEvent<HTMLElement>) => void;
}

const Button: React.FunctionComponent<Props> = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
