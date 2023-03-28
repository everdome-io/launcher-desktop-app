import { FC } from 'react';
import logoImage from 'assets/images/logo.png';

export const Logo: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        margin: '25px 0',
        color: '#fff',
        letterSpacing: '10px',
        textTransform: 'uppercase',
      }}
    >
      <img src={logoImage} alt="Everdome" />
    </div>
  );
};
