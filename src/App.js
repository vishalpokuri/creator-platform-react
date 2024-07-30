import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/pages/home";

import { OktoProvider, BuildType } from "okto-sdk-react";
import Footer from "./components/ui/footer";
import PaletteIcon from "./components/ui/paletteicon";
// import { useNavigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/loginpage";
import Creators from "./components/pages/topCreators";
const OKTO_CLIENT_API = " fdf89bfd-7097-490b-b782-9f949fa6c1aa";
function App() {
  return (
    <Router>
      <OktoProvider apiKey={OKTO_CLIENT_API} buildType={BuildType.SANDBOX}>
        <div className="flex min-h-screen flex-col bg-background">
          <header className="sticky top-0 z-40 border-b bg-background">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <PaletteIcon className="h-6 w-6" />
                <span>Creator Platform</span>
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                <Link to="/top-creators" className="hover:text-primary">
                  Top Creators
                </Link>
                <Link to="#" className="hover:text-primary">
                  Trending 🔥
                </Link>
                <Link to="#" className="hover:text-primary">
                  Rewards
                </Link>
                <Link to="#" className="hover:text-primary">
                  About
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            <Routes>
              <Route element={<Home />} path="/" />

              <Route path="/loginpage" element={<LoginPage />} />
              <Route path="/top-creators" element={<Creators />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </OktoProvider>
    </Router>
  );
}

export default App;
