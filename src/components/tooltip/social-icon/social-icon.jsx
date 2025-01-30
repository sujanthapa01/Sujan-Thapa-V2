import React, { forwardRef } from 'react';

const SocialIcon = forwardRef(({ icon, alt, link, ...props }, ref) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref} 
    >
      <img
        className="h-[38px] duration-200 cursor-pointer"
        src={icon}
        alt={alt}
        {...props} 
      />
    </a>
  );
});

export default SocialIcon;
