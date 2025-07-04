import React, { useState, useRef, useEffect } from 'react';
import { clsx } from 'clsx';
import { BaseComponentProps } from '../../types';

export interface TooltipProps extends BaseComponentProps {
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'hover' | 'click';
  delay?: number;
  disabled?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  placement = 'top',
  trigger = 'hover',
  delay = 500,
  disabled = false,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const showTooltip = () => {
    if (disabled) return;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      updatePosition();
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
    let top = 0;
    let left = 0;

    switch (placement) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - 8;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + 8;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left - tooltipRect.width - 8;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + 8;
        break;
    }

    setPosition({ top, left });
  };

  useEffect(() => {
    if (isVisible) {
      updatePosition();
    }
  }, [isVisible, placement]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleTriggerEvents = () => {
    if (trigger === 'hover') {
      return {
        onMouseEnter: showTooltip,
        onMouseLeave: hideTooltip,
      };
    } else {
      return {
        onClick: () => {
          if (isVisible) {
            hideTooltip();
          } else {
            showTooltip();
          }
        },
      };
    }
  };

  const placementClasses = {
    top: 'mb-2',
    bottom: 'mt-2',
    left: 'mr-2',
    right: 'ml-2',
  };

  return (
    <>
      <div
        ref={triggerRef}
        className={clsx('inline-block', className)}
        {...handleTriggerEvents()}
        {...props}
      >
        {children}
      </div>
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className="fixed z-50 pointer-events-none"
          style={{
            top: position.top,
            left: position.left,
          }}
        >
          <div
            className={clsx(
              'px-2 py-1 text-notion-xs text-white bg-notion-text-primary dark:bg-notion-dark-text-primary rounded-notion shadow-notion-md',
              'animate-in fade-in-0 zoom-in-95 duration-200',
              placementClasses[placement]
            )}
          >
            {content}
          </div>
        </div>
      )}
    </>
  );
};

export default Tooltip;