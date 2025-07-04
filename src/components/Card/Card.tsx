import React from 'react';
import { clsx } from 'clsx';
import { BaseComponentProps } from '../../types';

export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hoverable = false,
  clickable = false,
  onClick,
  ...props
}) => {
  const baseClasses = 'rounded-notion-md transition-all duration-150';
  
  const variantClasses = {
    default: 'bg-notion-bg-primary border border-notion-border dark:bg-notion-dark-bg-primary dark:border-notion-dark-border',
    outlined: 'bg-transparent border border-notion-border dark:border-notion-dark-border',
    elevated: 'bg-notion-bg-primary shadow-notion border border-notion-border dark:bg-notion-dark-bg-primary dark:border-notion-dark-border dark:shadow-none',
  };
  
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };
  
  const interactiveClasses = (hoverable || clickable) ? 
    'hover:shadow-notion-hover hover:border-notion-border-hover dark:hover:border-notion-dark-border-hover' : '';
  
  const clickableClasses = clickable ? 'cursor-pointer' : '';

  return (
    <div
      className={clsx(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        interactiveClasses,
        clickableClasses,
        className
      )}
      onClick={clickable ? onClick : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;