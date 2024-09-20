import React from 'react';

function Button({ text, onClick, className, img, imgClass }) {
  return (
    <div onClick={onClick} className={className ? className : "p-4 bg-blue-500 font-bold rounded-sm"}>
      {img && <img src={img} className={imgClass} alt="button icon" />} 
      {text}
    </div>
  );
}

export default Button;
