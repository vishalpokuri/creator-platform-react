import React, { useContext } from "react";
import { ProfileContext } from "../../App";
function ProfileAvatar() {
  const { profile } = useContext(ProfileContext);

  if (!profile) return null;

  return (
    <div className="flex items-center">
      <img
        src={profile.picture}
        alt={profile.name}
        className="w-8 h-8 rounded-full mr-2"
      />
      <span>{profile.name}</span>
    </div>
  );
}

export default ProfileAvatar;
