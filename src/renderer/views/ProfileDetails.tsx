import { AppState, Channels } from '@interfaces';
import { FC, useState } from 'react';
import profileIcon from 'assets/images/menu-profile-nopicture.png';
import previewIcon from 'assets/images/preview-icon.png';
import settingsIcon from 'assets/images/settings-icon.png';
import iconDOME from 'assets/images/icon_DOME.png';
import './ProfileDetails.css';

import { init, useConnectWallet } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import { ethers } from 'ethers';

// Sign up to get your free API key at https://explorer.blocknative.com/?signup=true
const dappId = '1730eff0-9d50-4382-a3fe-89f0d34a2070';

const injected = injectedModule();

const infuraKey = '<INFURA_KEY>';
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`;

// initialize Onboard
init({
  wallets: [injected],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl,
    },
  ],
});

export const ProfileDetails: FC<{ state: AppState }> = ({ state }) => {
  const [isLogged, setIsLogged] = useState(false);

  const connectWallet = () => {
    setIsLogged(true);
    window.electron.ipcRenderer.sendMessage(Channels.crossWindow, {
      isAuthenticated: true,
    });
  };

  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  // create an ethers provider
  let ethersProvider;

  if (wallet) {
    // if using ethers v6 this is:
    // ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any');
  }

  return (
    <div className="container">
      {isLogged && (
        <div className="UserProfileHeader" hidden={!isLogged}>
          <div className="UserInfo">
            <img src={profileIcon} width="40" height="40" alt="" />
            <div className="UserDetails">
              <h3>User_3758</h3>
              <span>Wallet address</span>
            </div>
          </div>
          <div className="SideMenu">
            <a href="#">
              <img src={previewIcon} />
            </a>
            <a href="#">
              <img src={settingsIcon} />
            </a>
          </div>
        </div>
      )}
      <div className="Wallet" hidden={!isLogged}>
        <div className="WalletItem">
          <h5>Wallet</h5>
          <div className="WalletItemDetails">
            <span>
              <img
                style={{ verticalAlign: 'middle' }}
                src={iconDOME}
                alt="DOME"
              />{' '}
              DOME
            </span>
            <span>0.00</span>
            <span>$0.00</span>
          </div>
        </div>
      </div>
      <div className="MainSection">
        {!isLogged && (
          <div className="EmptyMessage">
            <p className="InfoText">If you new to decentralized world</p>
            <a
              className="CTAButton CreateWallet"
              href="https://www.okx.com/account/register"
              target="_blank"
              rel="noreferrer"
            >
              Create Wallet
            </a>
            <p className="InfoText">or if you already have a wallet</p>
            <button
              disabled={connecting}
              className="CTAButton CTAButtonInverse ConnectWallet"
              onClick={() => (wallet ? disconnect(wallet) : connect())}
            >
              {connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
