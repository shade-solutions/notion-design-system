import React from 'react';
import { clsx } from 'clsx';
import { BaseComponentProps, ButtonVariant, ButtonSize } from '../../types';

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const baseClasses = 'notion-button-base disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-notion-blue text-white hover:bg-notion-blue-dark active:bg-notion-blue-dark',
    secondary: 'bg-notion-bg-tertiary text-notion-text-primary hover:bg-notion-border-hover border border-notion-border',
    ghost: 'text-notion-text-primary hover:bg-notion-bg-tertiary',
    danger: 'bg-notion-red text-white hover:bg-notion-red-dark active:bg-notion-red-dark',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-notion-sm gap-1.5',
    md: 'px-4 py-2 text-notion-base gap-2',
    lg: 'px-6 py-3 text-notion-lg gap-2.5',
  };
  
  const darkVariantClasses = {
    primary: 'dark:bg-notion-blue dark:hover:bg-notion-blue-dark',
    secondary: 'dark:bg-notion-dark-bg-tertiary dark:text-notion-dark-text-primary dark:hover:bg-notion-dark-border-hover dark:border-notion-dark-border',
    ghost: 'dark:text-notion-dark-text-primary dark:hover:bg-notion-dark-bg-tertiary',
    danger: 'dark:bg-notion-red dark:hover:bg-notion-red-dark',
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        darkVariantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
      )}
      {!loading && icon && iconPosition === 'left' && icon}
      {children}
      {!loading && icon && iconPosition === 'right' && icon}
    </button>
  );
};

export default Button;