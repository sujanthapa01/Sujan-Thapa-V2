import React from 'react';
import useFetchGithubData from '@/lib/githubApi/github';
import data from '@/data/data';

const GithubContent = () => {
  const { data: profile, loading: profileLoading, error: profileError } = useFetchGithubData(data.github_username, 'profile');

  if (profileLoading) return <div>Loading...</div>;
  if (profileError) return <div>Error: {profileError}</div>;

  return (
    <div className="flex items-center space-x-4">
      <img
        src={profile?.avatar_url}
        alt={`${profile?.login}'s avatar`}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-white">@{profile?.name || 'Anonymous'} 🚀</p>
        <p className="text-sm text-gray-400 italic">{profile?.bio || 'No bio available'}</p>
      </div>
    </div>
  );
};

export default GithubContent;
