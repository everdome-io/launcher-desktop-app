import { FC } from 'react';
import styles from '../theme/buttons.module.css';
import { ArrowLeft } from '@renderer/icons/ArrowLeft';

interface BackButtonProps {
  onClick: () => void;
}
export const BackButton: FC<BackButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button onClick={handleClick} className={styles.backBtn}>
      <ArrowLeft />
      Back
    </button>
  );
};
