import React from 'react';
import { clsx } from 'clsx';
import { BaseComponentProps, TypographyVariant, ColorVariant } from '../../types';

export interface TypographyProps extends BaseComponentProps {
  variant?: TypographyVariant;
  color?: ColorVariant;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  as?: keyof JSX.IntrinsicElements;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  variant = 'body1',
  color = 'default',
  weight = 'normal',
  align = 'left',
  as,
  ...props
}) => {
  const variantStyles = {
    h1: 'text-notion-3xl font-bold leading-tight',
    h2: 'text-notion-2xl font-bold leading-tight',
    h3: 'text-notion-xl font-semibold leading-tight',
    h4: 'text-notion-lg font-semibold leading-snug',
    h5: 'text-notion-base font-semibold leading-snug',
    h6: 'text-notion-sm font-semibold leading-snug',
    body1: 'text-notion-base leading-relaxed',
    body2: 'text-notion-sm leading-relaxed',
    caption: 'text-notion-xs leading-normal',
    overline: 'text-notion-xs uppercase tracking-wide leading-normal',
  };

  const colorStyles = {
    default: 'text-notion-text-primary dark:text-notion-dark-text-primary',
    blue: 'text-notion-blue',
    red: 'text-notion-red',
    yellow: 'text-notion-yellow-dark',
    green: 'text-notion-green',
    purple: 'text-notion-purple',
    pink: 'text-notion-pink',
    orange: 'text-notion-orange',
    gray: 'text-notion-text-secondary dark:text-notion-dark-text-secondary',
  };

  const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const defaultElements = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body1: 'p',
    body2: 'p',
    caption: 'span',
    overline: 'span',
  };

  const Component = as || defaultElements[variant] || 'p';

  return (
    <Component
      className={clsx(
        variantStyles[variant],
        colorStyles[color],
        weightStyles[weight],
        alignStyles[align],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;