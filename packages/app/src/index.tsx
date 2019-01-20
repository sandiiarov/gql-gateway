import * as React from 'react';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FunctionComponent<Props> = ({ value, onChange }) => (
  <input value={value} onChange={e => onChange(e)} />
);

const ConsumerApp = () => {
  const [value, setValue] = React.useState('');

  return <Input value={value} onChange={setValue} />;
};

export default ConsumerApp;
