import React from "react";
import SocialIcon from "../social-icon/social-icon";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import InstagramProfile from "../tooltipContent/instagramContent";
import SpotifyProfile from "../tooltipContent/spotifyContent";
import GithubContent from "../tooltipContent/githubContent";
import GmailContent from "../tooltipContent/gmailContent";
const TooltipComponent = ({ content, link, icon, alt, type }) => {
  const tooltipStyles = {
    github: "bg-gray-800 text-white p-4 rounded-xl shadow-lg",
    instagram: "bg-white text-white p-2 rounded-xl shadow-lg",
    spotify: "bg-green-600 text-white p-2 rounded-xl shadow-lg",
    gmail: "bg-red-500 text-white p-4 rounded-xl shadow-lg",
  };

  const tooltipContent = {
    github: <GithubContent/>,
    instagram: <InstagramProfile username="sujanthapa_1212" />,
    spotify: <SpotifyProfile/>,
    gmail: <GmailContent content="sujanthapast0@gmail.com"/>
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <SocialIcon
            link={link}
            icon={icon}
            alt={alt}
            aria-label={`Social icon for ${type}`}
          />
        </TooltipTrigger>
        <TooltipContent
          side="top"
          align="center"
          className={tooltipStyles[type] || "bg-gray-500 text-white p-4 rounded-xl shadow-lg"}
        >
          {tooltipContent[type] || <p className="text-xs">No content available</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipComponent;
