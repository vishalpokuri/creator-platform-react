import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogContent,
} from "../ui/Dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function CreateModal() {
  const [open, setOpen] = useState(false);

  const handleAppend = () => {
    // Add your logic for appending from other websites here
    console.log("Append from other websites");
    setOpen(false);
  };

  const handleCreate = () => {
    // Add your logic for creating from scratch here
    console.log("Create from scratch");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mr-6">
          Add Content
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            How do you wanna Create?
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Link to="/addconent-external">
            <Button onClick={handleAppend} className="w-full">
              Append from Other websites
            </Button>
          </Link>
          <Link to="/addconent-editor">
            <Button onClick={handleCreate} className="w-full">
              Create from Scratch
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
