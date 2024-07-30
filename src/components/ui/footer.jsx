import { Link } from "react-router-dom";
import PaletteIcon from "./paletteicon";
export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-2">
          <PaletteIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Creator Platform</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium md:justify-start">
          <Link to="top-creators" className="hover:text-primary">
            Creators
          </Link>
          <Link to="#" className="hover:text-primary">
            Reviews
          </Link>
          <Link to="#" className="hover:text-primary">
            Rewards
          </Link>
          <Link to="#" className="hover:text-primary">
            About
          </Link>
        </nav>
        <p className="text-sm text-muted-foreground">
          &copy; 2024 Creator Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
