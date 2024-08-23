
import React, {useMemo} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import Footer from './components/ui/footer';
import HomePageLogin from './components/pages/redirectpageafterlogin';
import LoginPageCreator from './components/pages/loginpageCreator';
import LoginPageReader from './components/pages/loginpageReader';
import Creators from './components/pages/topCreators';
import Trending from './components/pages/trending';
import Header from './components/pages/header';
import Dashboard from './components/pages/Dashboard';
import SamplePost from './components/pages/Samplepost';
// import Content from './components/pages/Content'; // Ensure correct import
//import WalletContextProvider from './components/pages/WalletConnectProvider';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import AppBar from './components/pages/AppBar';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';


export const ProfileContext = React.createContext();


function App() {
  const [profile, setProfile] = React.useState(null);
  const network = WalletAdapterNetwork.Devnet;

// You can also provide a custom RPC endpoint.
const endpoint = useMemo(() => clusterApiUrl(network), [network]);

const wallets = useMemo(
    () => [new PhantomWalletAdapter(),],
    [network]
);


  React.useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const updateProfile = (newProfile) => {
    setProfile(newProfile);
    localStorage.setItem("userProfile", JSON.stringify(newProfile));
  };

  return (

      <ProfileContext.Provider value={{ profile, updateProfile }}>
        <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
        <Router>
            <div className="flex min-h-screen flex-col bg-background">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/creator-loginpage" element={<LoginPageCreator />} />
                  <Route path="/reader-loginpage" element={<LoginPageReader />} />
                  <Route path="/top-creators" element={<Creators />} />
                  <Route path="/trending" element={<Trending />} />
                  <Route path="/home" element={<HomePageLogin />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/j23oi2a8j-089afa3" element={<SamplePost />} />
                  <Route
                  path="/wallet-connect" element={<AppBar />}/>
                </Routes>
              </main>
              <Footer />
            </div>
        </Router>
        </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
      </ProfileContext.Provider>

  );
}

export default App;
