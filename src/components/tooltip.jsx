import React from "react";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const TooltipComponent = ({ content, link, icon, alt }) => {
  const SocialIcon = React.forwardRef((props, ref) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
      >
        <img
          className="h-[38px] hover:scale-[1.2] duration-200 cursor-pointer"
          src={icon}
          alt={alt}
          {...props} // Ensure props like `aria` are passed
        />
      </a>
    );
  });

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <SocialIcon />
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          align="center" 
          className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4 rounded-xl shadow-xl">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-white p-1 rounded-full shadow-md">
              <img src={link} alt="Spotify" className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Spotify Username</p>
              <p className="text-xs text-gray-200 italic">{content}</p>
            </div>
          </div>
          <div className="text-center mt-2">
            <p className="text-sm text-yellow-200 font-medium">✨ Click to explore my profile! ✨</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipComponent;
