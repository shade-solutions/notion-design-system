import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile badge component for displaying labels, tags, status indicators, and other small pieces of information.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'soft', 'outline'],
      description: 'Visual style variant of the badge',
    },
    color: {
      control: 'select',
      options: ['default', 'blue', 'red', 'yellow', 'green', 'purple', 'pink', 'orange', 'gray'],
      description: 'Color theme of the badge',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge',
    },
    removable: {
      control: 'boolean',
      description: 'Whether the badge can be removed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Badge',
  },
};

export const Solid: Story = {
  args: {
    children: 'Solid Badge',
    variant: 'solid',
    color: 'blue',
  },
};

export const Soft: Story = {
  args: {
    children: 'Soft Badge',
    variant: 'soft',
    color: 'green',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Badge',
    variant: 'outline',
    color: 'purple',
  },
};

export const Removable: Story = {
  args: {
    children: 'Removable',
    removable: true,
    onRemove: () => alert('Badge removed!'),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm" color="blue">Small</Badge>
      <Badge size="md" color="blue">Medium</Badge>
      <Badge size="lg" color="blue">Large</Badge>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge color="default">Default</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="yellow">Yellow</Badge>
      <Badge color="green">Green</Badge>
      <Badge color="purple">Purple</Badge>
      <Badge color="pink">Pink</Badge>
      <Badge color="orange">Orange</Badge>
      <Badge color="gray">Gray</Badge>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <h4 className="w-full text-sm font-semibold mb-2">Solid</h4>
        <Badge variant="solid" color="blue">Solid Blue</Badge>
        <Badge variant="solid" color="red">Solid Red</Badge>
        <Badge variant="solid" color="green">Solid Green</Badge>
        <Badge variant="solid" color="purple">Solid Purple</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <h4 className="w-full text-sm font-semibold mb-2">Soft</h4>
        <Badge variant="soft" color="blue">Soft Blue</Badge>
        <Badge variant="soft" color="red">Soft Red</Badge>
        <Badge variant="soft" color="green">Soft Green</Badge>
        <Badge variant="soft" color="purple">Soft Purple</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <h4 className="w-full text-sm font-semibold mb-2">Outline</h4>
        <Badge variant="outline" color="blue">Outline Blue</Badge>
        <Badge variant="outline" color="red">Outline Red</Badge>
        <Badge variant="outline" color="green">Outline Green</Badge>
        <Badge variant="outline" color="purple">Outline Purple</Badge>
      </div>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Status:</span>
        <Badge variant="soft" color="green">Active</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Priority:</span>
        <Badge variant="solid" color="red">High</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Category:</span>
        <Badge variant="outline" color="blue">Design</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Tags:</span>
        <Badge variant="soft" color="purple" removable>React</Badge>
        <Badge variant="soft" color="orange" removable>TypeScript</Badge>
        <Badge variant="soft" color="pink" removable>Storybook</Badge>
      </div>
    </div>
  ),
};

export const NotificationBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative">
          <button className="p-2 bg-notion-bg-tertiary dark:bg-notion-dark-bg-tertiary rounded-notion">
            Messages
          </button>
          <Badge 
            variant="solid" 
            color="red" 
            size="sm" 
            className="absolute -top-1 -right-1"
          >
            3
          </Badge>
        </div>
        
        <div className="relative">
          <button className="p-2 bg-notion-bg-tertiary dark:bg-notion-dark-bg-tertiary rounded-notion">
            Notifications
          </button>
          <Badge 
            variant="solid" 
            color="blue" 
            size="sm" 
            className="absolute -top-1 -right-1"
          >
            12
          </Badge>
        </div>
        
        <div className="relative">
          <button className="p-2 bg-notion-bg-tertiary dark:bg-notion-dark-bg-tertiary rounded-notion">
            Updates
          </button>
          <Badge 
            variant="solid" 
            color="green" 
            size="sm" 
            className="absolute -top-1 -right-1"
          >
            New
          </Badge>
        </div>
      </div>
    </div>
  ),
};