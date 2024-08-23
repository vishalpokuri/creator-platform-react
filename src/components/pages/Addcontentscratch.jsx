import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
export function AddContentExternal() {
  const [link, setLink] = useState("");
  const [origin, setOrigin] = useState("");

  // Handler to update state on input change
  const handleInputChange = (event) => {
    setLink(event.target.value);
    const pattern = /https:\/\/([^\/]+)/;
    const match = link.match(pattern);

    if (match) {
      const domain = match[1];
      console.log(domain); // "medium.com"
      const subdomain = domain.split(".")[0]; // "medium"
      setOrigin(subdomain); // Update state with new platform
    } else {
      setOrigin(""); // Clear platform if no match
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Use the `link` state here to fetch or handle data
    console.log("Submitted link:", link);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="max-w-[425px] w-full p-6 rounded-md shadow-lg bg-card">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Fetch from External Platforms</h1>
          <div className="space-y-2">
            <div>
              <Label htmlFor="link">
                Add link to the external resource that you've created
              </Label>
              <Input
                id="link"
                type="text"
                value={link}
                placeholder="Enter link"
                className="mt-1"
                onInput={handleInputChange}
              />
              <div className="text-sm text-muted-foreground">
                The link is from: <span className="font-medium">{origin}</span>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="confirm" />
              <Label htmlFor="confirm" className="text-sm">
                By checking this box, you confirm that all content you publish
                is original and belongs to you. You agree that Clatform is not
                responsible for any copyright infringement or legal issues
                arising from the content. If any plagiarism or unauthorized use
                of content from other creators is detected by our team, you may
                be subject to penalties, including fines or a reduction in your
                performance score.
              </Label>
            </div>
          </div>
          <div className="grid gap-2">
            <Button variant="outline">Add Content</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export function AddContentEditor() {
  return (
    <div className="flex items-center justify-center min-h-screen text-3xl ">
      This page is Under Construction🚧🏗️⚠️
    </div>
  );
}
