import React from 'react';
import { clsx } from 'clsx';
import { BaseComponentProps, ColorVariant } from '../../types';

export interface BadgeProps extends BaseComponentProps {
  variant?: 'solid' | 'soft' | 'outline';
  color?: ColorVariant;
  size?: 'sm' | 'md' | 'lg';
  removable?: boolean;
  onRemove?: () => void;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'soft',
  color = 'default',
  size = 'md',
  removable = false,
  onRemove,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center gap-1 font-medium rounded-notion transition-colors duration-150';
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-notion-xs',
    md: 'px-2.5 py-1 text-notion-sm',
    lg: 'px-3 py-1.5 text-notion-base',
  };
  
  const variantColorClasses = {
    solid: {
      default: 'bg-notion-text-primary text-notion-bg-primary dark:bg-notion-dark-text-primary dark:text-notion-dark-bg-primary',
      blue: 'bg-notion-blue text-white',
      red: 'bg-notion-red text-white',
      yellow: 'bg-notion-yellow text-notion-text-primary',
      green: 'bg-notion-green text-white',
      purple: 'bg-notion-purple text-white',
      pink: 'bg-notion-pink text-white',
      orange: 'bg-notion-orange text-white',
      gray: 'bg-notion-text-secondary text-notion-bg-primary dark:bg-notion-dark-text-secondary dark:text-notion-dark-bg-primary',
    },
    soft: {
      default: 'bg-notion-bg-tertiary text-notion-text-primary dark:bg-notion-dark-bg-tertiary dark:text-notion-dark-text-primary',
      blue: 'bg-notion-blue-light text-notion-blue-dark dark:bg-notion-blue/20 dark:text-notion-blue',
      red: 'bg-notion-red-light text-notion-red-dark dark:bg-notion-red/20 dark:text-notion-red',
      yellow: 'bg-notion-yellow-light text-notion-yellow-dark dark:bg-notion-yellow/20 dark:text-notion-yellow',
      green: 'bg-notion-green-light text-notion-green-dark dark:bg-notion-green/20 dark:text-notion-green',
      purple: 'bg-notion-purple-light text-notion-purple-dark dark:bg-notion-purple/20 dark:text-notion-purple',
      pink: 'bg-notion-pink-light text-notion-pink-dark dark:bg-notion-pink/20 dark:text-notion-pink',
      orange: 'bg-notion-orange-light text-notion-orange-dark dark:bg-notion-orange/20 dark:text-notion-orange',
      gray: 'bg-notion-bg-tertiary text-notion-text-secondary dark:bg-notion-dark-bg-tertiary dark:text-notion-dark-text-secondary',
    },
    outline: {
      default: 'border border-notion-border text-notion-text-primary dark:border-notion-dark-border dark:text-notion-dark-text-primary',
      blue: 'border border-notion-blue text-notion-blue',
      red: 'border border-notion-red text-notion-red',
      yellow: 'border border-notion-yellow-dark text-notion-yellow-dark dark:border-notion-yellow dark:text-notion-yellow',
      green: 'border border-notion-green text-notion-green',
      purple: 'border border-notion-purple text-notion-purple',
      pink: 'border border-notion-pink text-notion-pink',
      orange: 'border border-notion-orange text-notion-orange',
      gray: 'border border-notion-text-secondary text-notion-text-secondary dark:border-notion-dark-text-secondary dark:text-notion-dark-text-secondary',
    },
  };

  return (
    <span
      className={clsx(
        baseClasses,
        sizeClasses[size],
        variantColorClasses[variant][color],
        className
      )}
      {...props}
    >
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-0.5 transition-colors"
          aria-label="Remove badge"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M9 3L3 9M3 3l6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Badge;