'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface BrokerIconProps {
  broker: string;
}

export function BrokerIcon({ broker }: BrokerIconProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const getBrokerLogo = (broker: string) => {
    if (!mounted) return '/brokers/default-broker.png'; // Default during SSR

    switch (broker.toLowerCase()) {
      case 'ftmo':
        return theme === 'dark' 
          ? '/brokers/ftmo-logo-white.png'
          : '/brokers/ftmo-logo.svg';
      case 'the 5%ers':
        return '/brokers/5ers-logo.png';
      case 'ic markets':
        return '/brokers/icmarkets-logo.png';
      default:
        return '/brokers/default-broker.png';
    }
  };

  if (!mounted) {
    return <div className="w-10 h-10" />; // Placeholder during SSR
  }

  return (
    <div className="flex-shrink-0 w-10 h-10 rounded-sm overflow-hidden flex items-center justify-center">
      <Image
        src={getBrokerLogo(broker)}
        alt={`${broker} logo`}
        width={40}
        height={40}
        className={`object-contain ${broker.toLowerCase() === 'ftmo' ? 'mt-2' : ''}`}
        priority // Add priority to ensure early loading
      />
    </div>
  );
} 