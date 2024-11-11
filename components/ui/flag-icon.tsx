"use client";

import Image from 'next/image'

interface FlagIconProps {
  country: string;
}

export const FlagIcon = ({ country }: FlagIconProps) => {
  const getFlagContent = (countryCode: string) => {
    switch (countryCode.toLowerCase()) {
      case 'us':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 rounded-full">
            <circle cx="16" cy="16" r="16" fill="#FFFFFF"/>
            <g clipPath="url(#us-clip)">
              <rect y="0" width="32" height="2.46" fill="#B22234"/>
              <rect y="4.92" width="32" height="2.46" fill="#B22234"/>
              <rect y="9.85" width="32" height="2.46" fill="#B22234"/>
              <rect y="14.77" width="32" height="2.46" fill="#B22234"/>
              <rect y="19.69" width="32" height="2.46" fill="#B22234"/>
              <rect y="24.62" width="32" height="2.46" fill="#B22234"/>
              <rect y="29.54" width="32" height="2.46" fill="#B22234"/>
              <rect width="12.8" height="17.23" fill="#3C3B6E"/>
            </g>
            <defs>
              <clipPath id="us-clip">
                <circle cx="16" cy="16" r="16" />
              </clipPath>
            </defs>
          </svg>
        );
      case 'eu':
        return (
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image 
              src="/assets/Flag_of_Europe.svg.png" 
              alt="EU Flag"
              className="w-full h-full object-cover"
              width={24}
              height={16}
            />
          </div>
        );
      case 'gb':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 rounded-full">
            <circle cx="16" cy="16" r="16" fill="#012169"/>
            <g clipPath="url(#gb-clip)">
              <path d="M0,0 L32,32 M32,0 L0,32" stroke="#FFFFFF" strokeWidth="6"/>
              <path d="M0,0 L32,32 M32,0 L0,32" stroke="#C8102E" strokeWidth="2"/>
              <path d="M16,0 L16,32 M0,16 L32,16" stroke="#FFFFFF" strokeWidth="10"/>
              <path d="M16,0 L16,32 M0,16 L32,16" stroke="#C8102E" strokeWidth="6"/>
            </g>
            <defs>
              <clipPath id="gb-clip">
                <circle cx="16" cy="16" r="16" />
              </clipPath>
            </defs>
          </svg>
        );
      case 'jp':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 rounded-full">
            <circle cx="16" cy="16" r="16" fill="#FFFFFF"/>
            <circle cx="16" cy="16" r="8" fill="#BC002D"/>
          </svg>
        );
      default:
        return (
          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-xs font-medium text-muted-foreground">
            {countryCode.toUpperCase()}
          </div>
        );
    }
  };

  return (
    <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-sm">
      {getFlagContent(country)}
    </div>
  );
}; 