import { FC } from 'react';

export const Hello: FC = ({}) => {
  const message =
    'This is alpha version of our metaverse. In order to experience it, you need the Everdome Genesis NFT. Levels 1 and 2 are currently eligible to enter.';
  return (
    <div>
      <h1>Hello!</h1>
      <p>{message}</p>
    </div>
  );
};
