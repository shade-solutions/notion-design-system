import React, { useState } from 'react';
import { clsx } from 'clsx';
import { 
  Type, 
  Hash, 
  List, 
  ListOrdered, 
  Square, 
  CheckSquare, 
  ChevronRight, 
  ChevronDown,
  Quote,
  Code
} from 'lucide-react';
import { BaseComponentProps, BlockProps } from '../../types';
import Typography from '../Typography/Typography';

const Block: React.FC<BlockProps> = ({
  className,
  id,
  type,
  content = '',
  level = 1,
  checked = false,
  collapsed = false,
  children,
  ...props
}) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  const [isChecked, setIsChecked] = useState(checked);
  const [text, setText] = useState(content);

  const getIcon = () => {
    switch (type) {
      case 'text':
        return <Type size={16} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />;
      case 'heading':
        return <Hash size={16} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />;
      case 'bullet':
        return <List size={16} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />;
      case 'numbered':
        return <ListOrdered size={16} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />;
      case 'todo':
        return isChecked ? 
          <CheckSquare size={16} className="text-notion-green cursor-pointer" onClick={() => setIsChecked(!isChecked)} /> :
          <Square size={16} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary cursor-pointer" onClick={() => setIsChecked(!isChecked)} />;
      case 'toggle':
        return isCollapsed ?
          <ChevronRight size={16} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary cursor-pointer" onClick={() => setIsCollapsed(!isCollapsed)} /> :
          <ChevronDown size={16} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary cursor-pointer" onClick={() => setIsCollapsed(!isCollapsed)} />;
      case 'quote':
        return <Quote size={16} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />;
      case 'code':
        return <Code size={16} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />;
      default:
        return null;
    }
  };

  const getTypographyVariant = () => {
    if (type === 'heading') {
      switch (level) {
        case 1: return 'h1';
        case 2: return 'h2';
        case 3: return 'h3';
        default: return 'h4';
      }
    }
    return 'body1';
  };

  const getBlockStyles = () => {
    const baseStyles = 'group flex items-start gap-2 min-h-[28px] py-1 px-2 rounded-notion hover:bg-notion-bg-tertiary dark:hover:bg-notion-dark-bg-tertiary transition-colors duration-150';
    
    switch (type) {
      case 'quote':
        return clsx(baseStyles, 'border-l-4 border-notion-text-tertiary dark:border-notion-dark-text-tertiary pl-4 italic');
      case 'code':
        return clsx(baseStyles, 'bg-notion-bg-tertiary dark:bg-notion-dark-bg-tertiary font-mono text-notion-sm');
      case 'todo':
        return clsx(baseStyles, isChecked && 'opacity-60');
      default:
        return baseStyles;
    }
  };

  const renderContent = () => {
    if (type === 'code') {
      return (
        <pre className="flex-1 whitespace-pre-wrap font-mono text-notion-sm">
          <code>{text}</code>
        </pre>
      );
    }

    return (
      <div className="flex-1">
        <Typography
          variant={getTypographyVariant() as any}
          className={clsx(
            'outline-none',
            isChecked && type === 'todo' && 'line-through',
            type === 'quote' && 'italic'
          )}
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setText(e.currentTarget.textContent || '')}
        >
          {text}
        </Typography>
        
        {type === 'toggle' && !isCollapsed && children && (
          <div className="ml-6 mt-2 space-y-1">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={clsx('notion-block', className)} {...props}>
      <div className={getBlockStyles()}>
        <div className="flex items-center justify-center w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity">
          {getIcon()}
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Block;