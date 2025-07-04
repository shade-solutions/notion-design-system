import React from 'react';
import { clsx } from 'clsx';
import { User } from 'lucide-react';
import { BaseComponentProps } from '../../types';

export interface AvatarProps extends BaseComponentProps {
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
  shape?: 'circle' | 'square';
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  fallback,
  shape = 'circle',
  className,
  ...props
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
  };

  const shapeClasses = {
    circle: 'rounded-full',
    square: 'rounded-notion',
  };

  const iconSizes = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
  };

  const baseClasses = 'inline-flex items-center justify-center bg-notion-bg-tertiary dark:bg-notion-dark-bg-tertiary text-notion-text-secondary dark:text-notion-dark-text-secondary font-medium overflow-hidden';

  if (src) {
    return (
      <img
        src={src}
        alt={alt || 'Avatar'}
        className={clsx(
          baseClasses,
          sizeClasses[size],
          shapeClasses[shape],
          className
        )}
        {...props}
      />
    );
  }

  return (
    <div
      className={clsx(
        baseClasses,
        sizeClasses[size],
        shapeClasses[shape],
        className
      )}
      {...props}
    >
      {fallback ? (
        <span className="uppercase">
          {fallback.slice(0, 2)}
        </span>
      ) : (
        <User size={iconSizes[size]} />
      )}
    </div>
  );
};

export default Avatar;