type Category = 'Football' | 'Cryptocurrency' | 'Metaverse';

export const NICKNAME_MAX_LENGTH = 20;

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

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function generateNickname(): string {
  const categories: Category[] = ['Football', 'Cryptocurrency', 'Metaverse'];
  const selectedCategory = getRandomElement(categories);
  const randomDigits = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');
  const baseNickname = getRandomElement(
    selectedCategory === 'Football'
      ? footballNicknames
      : selectedCategory === 'Cryptocurrency'
      ? cryptoNicknames
      : metaverseNicknames
  );
  const nickname = `${baseNickname}_${randomDigits}`;
  return nickname.length > NICKNAME_MAX_LENGTH
    ? nickname.slice(0, NICKNAME_MAX_LENGTH)
    : nickname;
}
