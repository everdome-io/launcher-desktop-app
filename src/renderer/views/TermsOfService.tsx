import { FC, useState } from 'react';
import OKX_Framed from 'assets/images/OKX_Framed.png';
import logo from 'assets/images/logo.png';
import { Channels } from '@interfaces';
import styles from './TermsOfService.module.css';
import { useNavigate } from 'react-router-dom';

export const TermsOfService: FC = () => {
  const navigate = useNavigate();
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isAgeChecked, setIsAgeChecked] = useState(false);
  const acceptTerms = () => {
    window.electron.ipcRenderer.sendMessage(Channels.acceptTerms);
    navigate('/connect-or-skip');
  };

  return (
    <div className={styles.tosContainer}>
      <div className={styles.banner}>
        <img src={OKX_Framed} alt="OKX" />
        <p className={styles.poweredBy}>
          Experience powered by{' '}
          <img src={logo} alt="Everdome" width={136} height={11} />
        </p>
      </div>
      <div className={styles.tosForm}>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            onChange={(e) => setIsTermsChecked(e.target.checked)}
          />
          <span className={styles.indicator}></span>
          <span className={styles.inputLabel}>
            I agree to{' '}
            <a
              className={styles.tosPDF}
              target="_blank"
              href="https://metahero-prod-game-builds.s3.amazonaws.com/terms-of-service.pdf"
            >
              terms & conditions
            </a>
          </span>
        </label>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            onChange={(e) => setIsAgeChecked(e.target.checked)}
          />
          <span className={styles.indicator}></span>
          <span className={styles.inputLabel}>I am over 18 years old</span>
        </label>
        <button
          className={styles.tosCTA}
          onClick={acceptTerms}
          disabled={!isTermsChecked || !isAgeChecked}
        >
          I read and accept terms & conditions
        </button>
      </div>
    </div>
  );
};
