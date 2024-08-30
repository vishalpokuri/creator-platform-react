import React, { useEffect } from "react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import "@solana/wallet-adapter-react-ui/styles.css";

const AppBar = () => {
  const { publicKey } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (publicKey) {
      navigate("/onboarding"); // Redirect to the username creation section
    }
  }, [publicKey, navigate]);

  return (
    <div>{publicKey ? <WalletDisconnectButton /> : <WalletMultiButton />}</div>
  );
};

export default AppBar;
