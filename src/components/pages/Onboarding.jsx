import { Button } from "../ui/button";
import { InstagramIcon, TwitterIcon } from "../ui/icons";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [aliasname, setAliasname] = useState("");
  const [pfp, setPfp] = useState(null);
  const [bio, setBio] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [isChecked, setisChecked] = useState(false);

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);
  const walletaddress = "wallet1";
  const handlePfpUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPfp(URL.createObjectURL(file));
    }
  };
  //fetching walletaddress
  async function handleUpload() {
    const user = {
      username,
      aliasname,
      walletaddress,
      bio,
      socials: { instagram, twitter },
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/onboarding",
        user
      );
      console.log("User added successfully:", response.data);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  }
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
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />

                <InputField
                  label="Alias name"
                  id="alias"
                  placeholder="Enter alias"
                  value={aliasname}
                  onChange={(e) => {
                    setAliasname(e.target.value);
                  }}
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
                  instagram={instagram}
                  setInstagram={setInstagram}
                />

                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={isChecked}
                    onCheckedChange={(prev) => {
                      setisChecked(prev);
                      console.log(prev);
                    }}
                    id="terms"
                  />
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
              <Button onClick={handleUpload}>All Good!</Button>
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
        Icon={InstagramIcon}
        placeholder="Instagram username"
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
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
