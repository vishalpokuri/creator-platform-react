// src/App.js
import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
//import { PhantomWalletAdapter, SolletWalletAdapter } from '@solana/wallet-adapter-wallets';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import * as web3 from '@solana/web3.js';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';

const WalletContextProvider = () => {
  const endpoint = web3.clusterApiUrl('devnet');

  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    new 
  ], []);

  return (
    <ConnectionProvider className="bg-yellow-400" endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div style={{ padding: '20px' }}>
            <h1>Solana Wallet Connection</h1>
            <WalletMultiButton />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContextProvider;

