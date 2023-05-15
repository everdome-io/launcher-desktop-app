import React from 'react';
import styles from './Spinner.module.css';

export interface SpinnerProps {
  width?: number;
}

export const Spinner: React.FC<SpinnerProps> = ({ width }) => {
  return (
    <div className={styles.spinner}>
      <div style={{ width: `${width}px`, height: `${width}px` }} />
      <div style={{ width: `${width}px`, height: `${width}px` }} />
      <div style={{ width: `${width}px`, height: `${width}px` }} />
      <div style={{ width: `${width}px`, height: `${width}px` }} />
    </div>
  );
};
