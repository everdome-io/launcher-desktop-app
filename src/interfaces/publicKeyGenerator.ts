import { ethers } from 'ethers';

export function generateFakeEthAddress(): string {
  // Create a new random wallet
  const wallet = ethers.Wallet.createRandom();

  // Get the Ethereum address from the wallet
  const { address } = wallet;

  return address;
}
