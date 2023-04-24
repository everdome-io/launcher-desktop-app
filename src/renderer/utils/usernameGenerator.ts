type Category = 'Football' | 'Cryptocurrency' | 'Metaverse';

const footballNicknames = [
  'GoalGrabber',
  'TopScorer',
  'BallWizard',
  'SlideTackler',
  'NetGuardian',
  'SwiftDribbler',
  'HeaderHero',
  'MidFieldMaestro',
  'FreeKickFreak',
  'PenaltyPunisher',
  'CornerCaptain',
  'OffsideOracle',
  'DefenseDynamo',
  'AssistAce',
  'SuperSub',
  'TacticalGenius',
  'SwiftStriker',
  'CleanSheet',
  'FinalWhistle',
  'SoccerSensation',
];

const cryptoNicknames = [
  'BitBuddy',
  'CryptoCrusader',
  'TokenTrader',
  'BlockchainBaron',
  'AltcoinAce',
  'SatoshiSavvy',
  'HODLHero',
  'EtherEnthusiast',
  'DeFiDominator',
  'RippleRider',
  'MoonMission',
  'FiatFighter',
  'CoinCollector',
  'TradingTitan',
  'WalletWarrior',
  'ArbitrageArtist',
  'CryptoChampion',
  'LedgerLord',
  'DigitalDabbler',
  'CoinConnoisseur',
];

const metaverseNicknames = [
  'VirtualVoyager',
  'AvatarArchitect',
  'NFTNinja',
  'RealityRipper',
  'CyberSovereign',
  'MetaMaverick',
  'DigitalDreamer',
  'AugmentedAdventurer',
  'PixelPioneer',
  'HoloHunter',
  'SpatialSage',
  'ImmerseMaster',
  'VirtualVisionary',
  'GameGladiator',
  'CyberCitizen',
  'RealityRanger',
  'SimulationSorcerer',
  'MetaMentor',
  '3DExplorer',
  'WorldWeaver',
];

export function generateNickname(): string {
  const categories: Category[] = ['Football', 'Cryptocurrency', 'Metaverse'];
  const selectedCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const randomDigits = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');
  let baseNickname: string;

  switch (selectedCategory) {
    case 'Football':
      baseNickname =
        footballNicknames[Math.floor(Math.random() * footballNicknames.length)];
      break;
    case 'Cryptocurrency':
      baseNickname =
        cryptoNicknames[Math.floor(Math.random() * cryptoNicknames.length)];
      break;
    case 'Metaverse':
      baseNickname =
        metaverseNicknames[
          Math.floor(Math.random() * metaverseNicknames.length)
        ];
      break;
    default:
      baseNickname = '';
  }

  return `${baseNickname}_${randomDigits}`;
}
