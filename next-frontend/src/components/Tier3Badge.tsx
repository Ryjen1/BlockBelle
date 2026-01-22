'use client';

import { Crown } from 'lucide-react';

interface Tier3BadgeProps {
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export default function Tier3Badge({ size = 'sm', showLabel = false, className = '' }: Tier3BadgeProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const labelSizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5'
  };

  if (showLabel) {
    return (
      <span 
        className={`tier-badge inline-flex items-center gap-1 ${labelSizeClasses[size]} ${className}`}
        title="Tier 3 - Self Protocol Verified"
      >
        <Crown className={sizeClasses[size]} />
        <span>Tier 3</span>
      </span>
    );
  }

  return (
    <span 
      className={`inline-flex items-center ${className}`}
      title="Tier 3 - Self Protocol Verified"
    >
      <Crown className={`${sizeClasses[size]} text-blockbelle-gold`} style={{ filter: 'drop-shadow(0 1px 2px rgba(251, 191, 36, 0.5))' }} />
    </span>
  );
}