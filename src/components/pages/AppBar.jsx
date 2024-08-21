import React from 'react'
import {WalletModalProvider,WalletDisconnectButton,WalletMultiButton} from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import '@solana/wallet-adapter-react-ui/styles.css';


const AppBar = () => {
    const {publickey} = useWallet();

  return (
    <div>
        {publickey ? <WalletDisconnectButton /> : <WalletMultiButton />}
    </div>
  )
}

export default AppBar