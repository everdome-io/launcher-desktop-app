import { FC, useState } from 'react';
import OKX_Framed from 'assets/images/OKX_Framed.png';
import logo from 'assets/images/logo.png';
import './TermsOfService.css';
import { Channels } from '@interfaces';

interface TermsOfServiceProps {
  onAccept: () => void;
}

export const TermsOfService: FC<TermsOfServiceProps> = ({ onAccept }) => {
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isAgeChecked, setIsAgeChecked] = useState(false);
  const acceptTerms = () => {
    window.electron.ipcRenderer.sendMessage(Channels.acceptTerms);
    onAccept();
  };

  return (
    <div className="tosContainer">
      <div className="banner">
        <img src={OKX_Framed} alt="OKX" />
        <p className="poweredBy">
          Experience powered by{' '}
          <img src={logo} alt="Everdome" width={136} height={11} />
        </p>
      </div>
      <div className="tosForm">
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={(e) => setIsTermsChecked(e.target.checked)}
          />
          <span className="indicator"></span>
          <span className="inputLabel">
            I agree to{' '}
            <a
              className="tosPDF"
              target="_blank"
              href="https://metahero-prod-game-builds.s3.amazonaws.com/terms-of-service.pdf"
            >
              terms & conditions
            </a>
          </span>
        </label>
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={(e) => setIsAgeChecked(e.target.checked)}
          />
          <span className="indicator"></span>
          <span className="inputLabel">I am over 18 years old</span>
        </label>
        <button
          className="tosCTA"
          onClick={acceptTerms}
          disabled={!isTermsChecked || !isAgeChecked}
        >
          I read and accept terms & conditions
        </button>
      </div>
    </div>
  );
};
