import { useState, useEffect } from 'react';
import axios from 'axios';

const useInstagramProfile = () => {
  const [profile, setProfile] = useState(() => {
    // Initialize profile from localStorage if available
    const storedProfile = localStorage.getItem('instagramProfile');
    return storedProfile ? JSON.parse(storedProfile) : null;
  });
  const [loading, setLoading] = useState(!profile); // Set loading to false if profile is already in localStorage
  const [error, setError] = useState(null);

  useEffect(() => {
    if (profile) {
      return;
    }

    const fetchInstagramProfile = async () => {
      const accessToken = process.env.INSTAGRAM_GRAPH_API ;

      try {
        const response = await axios.get(
          `https://graph.instagram.com/me?fields=id,username,profile_picture_url,biography&access_token=${accessToken}`
        );

        const data = response.data;

        const profileData = {
          id: data.id,
          username: data.username,
          profilePic: data.profile_picture_url || 'https://via.placeholder.com/150', // Placeholder image
          bio: data.biography,
        };

        setProfile(profileData);
        localStorage.setItem('instagramProfile', JSON.stringify(profileData)); // Save to localStorage
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch Instagram profile');
        setLoading(false);
      }
    };

    fetchInstagramProfile();
  }, [profile]);

  return { profile, loading, error };
};

export default useInstagramProfile;
