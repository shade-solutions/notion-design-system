export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type InputVariant = 'default' | 'filled';
export type InputSize = 'sm' | 'md' | 'lg';

export type TypographyVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'body1' | 'body2' | 'caption' | 'overline';

export type ColorVariant = 
  | 'default' | 'blue' | 'red' | 'yellow' | 'green' 
  | 'purple' | 'pink' | 'orange' | 'gray';

export interface IconProps extends BaseComponentProps {
  size?: number;
  color?: string;
}

export interface BlockProps extends BaseComponentProps {
  id?: string;
  type: 'text' | 'heading' | 'bullet' | 'numbered' | 'todo' | 'toggle' | 'quote' | 'code';
  content?: string;
  level?: number;
  checked?: boolean;
  collapsed?: boolean;
}