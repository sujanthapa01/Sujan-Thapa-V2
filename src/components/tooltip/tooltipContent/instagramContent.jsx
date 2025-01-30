import React, { useState } from 'react';
import useInstagramProfile from '@/hooks/useInstagramProfile'; // Path to your hook

const InstagramProfile = () => {
  const { profile, loading, error } = useInstagramProfile();
  const [showBio, setShowBio] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="instagram-profile ">
      <div className="profile-header flex items-center gap-1">
        <img
          src={profile.profilePic}
          alt={`${profile.username} profile`}
          className="w-10 h-10 rounded-full border-2 "
        />
        <div>
          <h2 className="font-semibold text-md text-black">@{profile.username}</h2>
          <button
            className="text-sm text-blue-600"
            onClick={() => setShowBio(!showBio)}
          >
            {showBio ? 'Hide Bio' : 'Show Bio'}
          </button>
        </div>
      </div>
      {showBio && (
        <div className="bio mt-2">
          <p className="text-sm text-black">{profile.bio}</p>
        </div>
      )}
    </div>
  );
};

export default InstagramProfile;
