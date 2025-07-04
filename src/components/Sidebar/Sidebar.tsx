import React, { useState } from 'react';
import { clsx } from 'clsx';
import { 
  ChevronRight, 
  ChevronDown, 
  FileText, 
  Folder, 
  FolderOpen,
  Plus,
  MoreHorizontal,
  Search
} from 'lucide-react';
import { BaseComponentProps } from '../../types';
import Typography from '../Typography/Typography';
import Input from '../Input/Input';

export interface SidebarItem {
  id: string;
  title: string;
  type: 'page' | 'folder';
  icon?: React.ReactNode;
  children?: SidebarItem[];
  expanded?: boolean;
  level?: number;
}

export interface SidebarProps extends BaseComponentProps {
  items: SidebarItem[];
  onItemClick?: (item: SidebarItem) => void;
  onItemToggle?: (item: SidebarItem) => void;
  selectedId?: string;
  searchable?: boolean;
  width?: number;
}

const SidebarItem: React.FC<{
  item: SidebarItem;
  onItemClick?: (item: SidebarItem) => void;
  onItemToggle?: (item: SidebarItem) => void;
  selectedId?: string;
  level: number;
}> = ({ item, onItemClick, onItemToggle, selectedId, level }) => {
  const [isExpanded, setIsExpanded] = useState(item.expanded || false);
  const [showActions, setShowActions] = useState(false);

  const handleToggle = () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    onItemToggle?.({ ...item, expanded: newExpanded });
  };

  const handleClick = () => {
    onItemClick?.(item);
  };

  const isSelected = selectedId === item.id;
  const hasChildren = item.children && item.children.length > 0;
  const paddingLeft = level * 12 + 8;

  return (
    <div>
      <div
        className={clsx(
          'group flex items-center gap-1 py-1 px-2 rounded-notion cursor-pointer transition-colors duration-150',
          'hover:bg-notion-bg-tertiary dark:hover:bg-notion-dark-bg-tertiary',
          isSelected && 'bg-notion-blue-light dark:bg-notion-blue/20'
        )}
        style={{ paddingLeft }}
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
        onClick={handleClick}
      >
        {hasChildren && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToggle();
            }}
            className="flex items-center justify-center w-4 h-4 hover:bg-notion-border-hover dark:hover:bg-notion-dark-border-hover rounded-notion-sm"
          >
            {isExpanded ? (
              <ChevronDown size={12} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />
            ) : (
              <ChevronRight size={12} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />
            )}
          </button>
        )}
        
        {!hasChildren && <div className="w-4" />}
        
        <div className="flex items-center justify-center w-4 h-4">
          {item.icon || (
            item.type === 'folder' ? (
              isExpanded ? (
                <FolderOpen size={14} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />
              ) : (
                <Folder size={14} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />
              )
            ) : (
              <FileText size={14} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />
            )
          )}
        </div>
        
        <Typography variant="body2" className="flex-1 truncate">
          {item.title}
        </Typography>
        
        {showActions && (
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Handle add action
              }}
              className="flex items-center justify-center w-5 h-5 hover:bg-notion-border-hover dark:hover:bg-notion-dark-border-hover rounded-notion-sm"
            >
              <Plus size={12} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Handle more actions
              }}
              className="flex items-center justify-center w-5 h-5 hover:bg-notion-border-hover dark:hover:bg-notion-dark-border-hover rounded-notion-sm"
            >
              <MoreHorizontal size={12} className="text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />
            </button>
          </div>
        )}
      </div>
      
      {hasChildren && isExpanded && (
        <div>
          {item.children?.map((child) => (
            <SidebarItem
              key={child.id}
              item={child}
              onItemClick={onItemClick}
              onItemToggle={onItemToggle}
              selectedId={selectedId}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({
  className,
  items,
  onItemClick,
  onItemToggle,
  selectedId,
  searchable = true,
  width = 240,
  ...props
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = searchQuery
    ? items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items;

  return (
    <div
      className={clsx(
        'flex flex-col bg-notion-bg-secondary dark:bg-notion-dark-bg-secondary border-r border-notion-border dark:border-notion-dark-border',
        className
      )}
      style={{ width }}
      {...props}
    >
      {searchable && (
        <div className="p-3 border-b border-notion-border dark:border-notion-dark-border">
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            leftIcon={<Search size={14} />}
            size="sm"
          />
        </div>
      )}
      
      <div className="flex-1 overflow-y-auto p-2">
        <div className="space-y-0.5">
          {filteredItems.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              onItemClick={onItemClick}
              onItemToggle={onItemToggle}
              selectedId={selectedId}
              level={0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;