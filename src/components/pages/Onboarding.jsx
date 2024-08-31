import { Button } from "../ui/button";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [aliasname, setAliasname] = useState("");
  const [pfp, setPfp] = useState(null);
  const [bio, setBio] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [instagram, setInstagram] = useState("");

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  const handlePfpUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPfp(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Role Selection Step */}
      <div
        className={`transition-transform duration-500 ease-in-out ${
          step === 1 ? "translate-x-0" : "-translate-x-full"
        } absolute w-full h-5/6 flex items-center`}
      >
        <div className="w-auto m-auto flex flex-row justify-around p-20 my-12">
          <div className="w-1/2">
            <h1 className="font-extrabold text-8xl">Welcome Aboard!!</h1>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <h1 className="font-semibold text-2xl">
              How do you want to identify?
            </h1>
            <br />
            <div className="flex flex-row justify-around font-semibold text-xl">
              <div
                className="rounded-md m-4 bg-[#ff8c00c2] w-56 h-48 p-8 hover:bg-[#ff8c00] flex flex-col justify-center cursor-pointer"
                onClick={handleNext}
              >
                <div className="flex items-center justify-center">⌨️🖊️</div>
                <p className="text-black text-center mt-4">Creator</p>
              </div>
              <div
                className="rounded-md m-4 bg-[#91e140d4] w-56 h-48 p-8 flex flex-col justify-center hover:bg-[#91e140] cursor-pointer"
                onClick={handleNext}
              >
                <div className="flex items-center justify-center">📖📚</div>
                <p className="text-center mt-4 text-black">Reader</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Form Step */}
      <div
        className={`transition-transform duration-500 ease-in-out ${
          step === 2 ? "translate-x-0" : "translate-x-full"
        } absolute w-full h-5/6 flex items-center`}
      >
        <div className="w-full h-max mx-auto px-4 py-8 flex justify-between items-center">
          <div className="w-2/5 font-extrabold text-8xl p-12">
            <span>Let's get Started!</span>
          </div>

          <div className="flex flex-col w-3/5 m-7">
            <div className="mx-12 flex flex-row space-x-12">
              {/* Column 1 */}
              <div className="space-y-6 w-2/5">
                <InputField
                  label="Choose your username"
                  id="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <InputField
                  label="Alias name"
                  id="alias"
                  placeholder="Enter alias"
                  value={aliasname}
                  onChange={(e) => setAliasname(e.target.value)}
                />

                <div className="grid gap-2">
                  <Label>Profile picture</Label>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={pfp} />
                      <AvatarFallback>?</AvatarFallback>
                    </Avatar>
                    <Button variant="outline">
                      <input
                        type="file"
                        onChange={handlePfpUpload}
                        className="w-[89px]"
                      />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-6 w-3/5">
                <TextareaField
                  label="Bio/Description"
                  id="bio"
                  placeholder="Tell us about yourself"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />

                <SocialMediaSection
                  twitter={twitter}
                  setTwitter={setTwitter}
                  linkedin={linkedin}
                  setLinkedin={setLinkedin}
                  github={github}
                  setGithub={setGithub}
                  instagram={instagram}
                  setInstagram={setInstagram}
                />

                <div className="flex items-center gap-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">
                    I agree to the{" "}
                    <Link to="#" className="underline">
                      Terms and Conditions
                    </Link>
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8 mx-12">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button>All Good!</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const InputField = ({ label, id, placeholder, value, onChange }) => (
  <div className="grid gap-2">
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

const TextareaField = ({ label, id, placeholder, value, onChange }) => (
  <div className="grid gap-2">
    <Label htmlFor={id}>{label}</Label>
    <Textarea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

const SocialMediaSection = ({
  twitter,
  setTwitter,
  linkedin,
  setLinkedin,
  github,
  setGithub,
  instagram,
  setInstagram,
}) => (
  <div className="grid gap-2">
    <Label>Social Media</Label>
    <div className="grid gap-2 sm:grid-cols-2">
      <SocialMediaInput
        Icon={TwitterIcon}
        placeholder="Twitter username"
        value={twitter}
        onChange={(e) => setTwitter(e.target.value)}
      />
      <SocialMediaInput
        Icon={LinkedinIcon}
        placeholder="LinkedIn profile"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
      />
      <SocialMediaInput
        Icon={InstagramIcon}
        placeholder="Instagram username"
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
      />
      <SocialMediaInput
        Icon={GithubIcon}
        placeholder="GitHub username"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
      />
    </div>
  </div>
);

const SocialMediaInput = ({ Icon, placeholder, value, onChange }) => (
  <div className="grid grid-cols-[auto_1fr] items-center gap-2">
    <Icon className="h-5 w-5" />
    <Input placeholder={placeholder} value={value} onChange={onChange} />
  </div>
);

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
