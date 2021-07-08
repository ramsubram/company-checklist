import { FC } from 'react';

const Discover: FC<{ onOpen?: Function }> = ({ onOpen }) => {
  return (
    <div>
      <h1>Discover your next coworker</h1>
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
    </div>
  );
};

export default Discover;
