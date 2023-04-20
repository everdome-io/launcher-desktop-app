import { FC } from 'react';
import { useState, useEffect } from 'react';

export const ClearStore: FC = ({}) => {
  const defaulText = 'Clear';
  const [buttonText, setButtonText] = useState(defaulText);
  const devClearStore = () => {
    window.electron.ipcRenderer.sendMessage('dev:clear-store');
    setButtonText('Store cleared!');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonText(defaulText);
    }, 1000);
    return () => clearTimeout(timer);
  }, [buttonText]);

  return (
    <a
      href="#"
      onClick={devClearStore}
      style={{
        position: 'absolute',
        color: '#fff',
        fontSize: '14px',
        lineHeight: '18px',
        margin: 0,
        top: '5px',
        right: '5px',
        textDecoration: 'none',
      }}
    >
      {buttonText}
    </a>
  );
};
