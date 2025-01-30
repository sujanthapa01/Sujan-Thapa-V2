import React from 'react'

const gmailContent = ({content}) => {
  return (
<div className="flex flex-col items-center">
        <p className="text-sm font-semibold">Gmail Address</p>
        <p className="text-sm italic">{content}</p>
      </div>
  )
}

export default gmailContent