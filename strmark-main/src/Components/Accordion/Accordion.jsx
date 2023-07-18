import React, { useState } from 'react';

export default function Accordion ({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item bg-[#F0EEFF] rounded-[10px] my-4">
      <div className="accordion-title flex py-4 px-2 	" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className='ml-auto'>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content py-4 px-2 border-t-2 border-gray-300	">{content}</div>}
    </div>
  );
};

