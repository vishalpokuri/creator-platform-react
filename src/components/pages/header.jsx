import React from "react";
import { Link } from "react-router-dom";
import PaletteIcon from "../ui/paletteicon";
import ProfileAvatar from "../smallBlocks/ProfileAvatar";
import AppBar from "./AppBar";

const Header = () => {
  return (
    <header className="sticky top-4 z-40 border-b bg-background m-4 rounded-xl shadow-lg ">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold min-w-[206px]"
        >
          <PaletteIcon className="h-6 w-6" />
          <span>Clatform</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link to="/top-creators" className="hover:text-primary">
            Top Creators
          </Link>
          <Link to="/trending" className="hover:text-primary">
            Trending 🔥
          </Link>
          <Link to="#" className="hover:text-primary">
            Rewards
          </Link>
          <Link to="#" className="hover:text-primary">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <ProfileAvatar />
          </Link>
          {/* <Link
              to="/wallet-connect"
              className="bg-primary text-white px-4 py-2 rounded"
            >
            Connect Wallet 
          </Link> */}
          <AppBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
