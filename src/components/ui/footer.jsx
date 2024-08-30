import PaletteIcon from "./paletteicon";
export default function Footer() {
  return (
    <div className="flex justify-center">
      <footer className="border-t bg-background ">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-2">
            <PaletteIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Clatform</span>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; 2024 Clatform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
