import { FC, useState, useEffect } from 'react';

export const ClearStore: FC = ({}) => {
  const defaulText = 'Clear store';
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
        bottom: '5px',
        right: '5px',
        textDecoration: 'none',
        opacity: 0.25,
      }}
    >
      {buttonText}
    </a>
  );
};
