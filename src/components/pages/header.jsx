import React from "react";
import { Link } from "react-router-dom";

import PaletteIcon from "../ui/paletteicon";
import ProfileAvatar from "../smallBlocks/ProfileAvatar";
const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <PaletteIcon className="h-6 w-6" />
          <span>Creator Platform</span>
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
        <ProfileAvatar />
      </div>
    </header>
  );
};

export default Header;
