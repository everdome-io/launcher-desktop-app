import { FC } from 'react';
import OKX_Framed from 'assets/images/OKX_Framed.png';
import logo from 'assets/images/logo.png';
import './TermsOfService.css';

export const TermsOfService: FC = () => {
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
        <div className="checkbox">
          <input type="checkbox" name="tos" id="tos" />
          <label htmlFor="tos">
            I agree to{' '}
            <a
              className="tosPDF"
              target="_blank"
              href="https://metahero-prod-game-builds.s3.amazonaws.com/terms-of-service.pdf"
            >
              terms & conditions
            </a>
          </label>
        </div>
        <div className="checkbox">
          <input type="checkbox" name="age" id="age" />
          <label htmlFor="age">I am over 18 years old</label>
        </div>
        <button className="tosCTA">I read and accept terms & conditions</button>
      </div>
    </div>
  );
};
