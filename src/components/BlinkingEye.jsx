import React, { useState, useEffect } from 'react';

const BlinkingEye = ({ isParentHovered }) => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    // ຖ້າ parent (ປຸ່ມ) ຖືກ hover ຢູ່, ບໍ່ຕ້ອງກະພິບ
    if (isParentHovered) return;

    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 250); // ກະພິບ 150ms
    }, 3000); // ທຸກ 3 ວິນາທີ

    return () => clearInterval(blinkInterval);
  }, [isParentHovered]);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-100"
      >
        {isParentHovered ? (
          // ຕາເປີດກວ້າງ (ເມື່ອ hover ທີ່ປຸ່ມ - ບໍ່ກະພິບ)
          <>
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="4" strokeWidth="2" />
          </>
        ) : isBlinking ? (
          // ຕາປິດ (ກຳລັງກະພິບ)
          <>
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <line x1="9" y1="12" x2="15" y2="12" strokeWidth="3" />
          </>
        ) : (
          // ຕາເປີດປົກກະຕິ
          <>
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </>
        )}
      </svg>
    </div>
  );
};

export default BlinkingEye;