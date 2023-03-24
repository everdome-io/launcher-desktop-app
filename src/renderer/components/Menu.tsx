import { FC } from 'react';
import { Logo } from './Logo';

export const Menu: FC = ({}) => {
  return (
    <menu className="MainMenu">
      <Logo />
      <ul>
        <li>
          <a href="#">Send feedback</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
      </ul>
    </menu>
  );
};
