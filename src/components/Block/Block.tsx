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

  const getVariant = () => {
    switch (type) {
      case 'heading':
        return level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3';
      default:
        return 'body1';
    }
  };

  const variant = getVariant();

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
        return (
          <button
            onClick={() => setIsChecked(!isChecked)}
            className="flex items-center justify-center w-4 h-4 border border-notion-border rounded-sm hover:bg-notion-bg-secondary dark:border-notion-dark-border dark:hover:bg-notion-dark-bg-secondary"
          >
            {isChecked && <CheckSquare size={12} className="text-notion-blue" />}
          </button>
        );
      case 'toggle':
        return (
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center justify-center w-4 h-4 text-notion-text-tertiary hover:text-notion-text-primary dark:text-notion-dark-text-tertiary dark:hover:text-notion-dark-text-primary"
          >
            {isCollapsed ? <ChevronRight size={12} /> : <ChevronDown size={12} />}
          </button>
        );
      case 'quote':
        return <Quote size={16} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />;
      case 'code':
        return <Code size={16} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />;
      default:
        return <Square size={16} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />;
    }
  };

  const renderContent = () => {
    if (type === 'code') {
      return (
        <pre className="bg-notion-bg-secondary dark:bg-notion-dark-bg-secondary p-3 rounded-notion font-mono text-notion-sm">
          <code>{text}</code>
        </pre>
      );
    }

    return (
      <div className="flex-1">
        <div
          className={clsx(
            'outline-none',
            isChecked && type === 'todo' && 'line-through',
            type === 'quote' && 'italic'
          )}
          contentEditable
          suppressContentEditableWarning
          onBlur={(e: React.FocusEvent<HTMLDivElement>) => setText(e.currentTarget.textContent || '')}
        >
          <Typography variant={variant}>
            {text}
          </Typography>
        </div>

        {type === 'toggle' && !isCollapsed && children && (
          <div className="ml-6 mt-2 space-y-1">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      id={id}
      className={clsx(
        'flex items-start space-x-2 py-1 px-2 rounded-notion hover:bg-notion-bg-secondary dark:hover:bg-notion-dark-bg-secondary group',
        type === 'quote' && 'border-l-4 border-notion-text-tertiary dark:border-notion-dark-text-tertiary pl-4',
        className
      )}
      {...props}
    >
      <div className="flex-shrink-0 pt-1">
        {getIcon()}
      </div>
      {renderContent()}
    </div>
  );
};

export default Block;
export type { BlockProps };