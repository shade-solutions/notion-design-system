import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { BaseComponentProps, InputVariant, InputSize } from '../../types';

export interface InputProps extends BaseComponentProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  size?: InputSize;
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  variant = 'default',
  size = 'md',
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  ...props
}, ref) => {
  const baseClasses = 'notion-input-base transition-colors duration-150';
  
  const variantClasses = {
    default: 'border-notion-border focus:border-notion-blue hover:border-notion-border-hover',
    filled: 'border-transparent bg-notion-bg-tertiary focus:border-notion-blue hover:bg-notion-border-hover',
  };
  
  const sizeClasses = {
    sm: 'px-2.5 py-1.5 text-notion-sm',
    md: 'px-3 py-2 text-notion-base',
    lg: 'px-4 py-3 text-notion-lg',
  };
  
  const darkVariantClasses = {
    default: 'dark:border-notion-dark-border dark:focus:border-notion-blue dark:hover:border-notion-dark-border-hover',
    filled: 'dark:bg-notion-dark-bg-tertiary dark:hover:bg-notion-dark-border-hover',
  };
  
  const errorClasses = error ? 'border-notion-red focus:border-notion-red dark:border-notion-red' : '';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const inputElement = (
    <div className={clsx('relative', fullWidth ? 'w-full' : 'w-auto')}>
      {leftIcon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-notion-text-tertiary dark:text-notion-dark-text-tertiary">
          {leftIcon}
        </div>
      )}
      <input
        ref={ref}
        disabled={disabled}
        className={clsx(
          baseClasses,
          variantClasses[variant],
          darkVariantClasses[variant],
          sizeClasses[size],
          errorClasses,
          disabledClasses,
          leftIcon && 'pl-10',
          rightIcon && 'pr-10',
          className
        )}
        {...props}
      />
      {rightIcon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-notion-text-tertiary dark:text-notion-dark-text-tertiary">
          {rightIcon}
        </div>
      )}
    </div>
  );

  if (label || error || helperText) {
    return (
      <div className={clsx('space-y-1', fullWidth ? 'w-full' : 'w-auto')}>
        {label && (
          <label className="block text-notion-sm font-medium text-notion-text-primary dark:text-notion-dark-text-primary">
            {label}
          </label>
        )}
        {inputElement}
        {(error || helperText) && (
          <p className={clsx(
            'text-notion-xs',
            error ? 'text-notion-red' : 'text-notion-text-secondary dark:text-notion-dark-text-secondary'
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }

  return inputElement;
});

Input.displayName = 'Input';

export default Input;