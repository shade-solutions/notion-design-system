import type { Meta, StoryObj } from '@storybook/react';
import { Info, HelpCircle, Settings } from 'lucide-react';
import Tooltip from './Tooltip';
import Button from '../Button/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tooltip component for displaying helpful information on hover or click.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the tooltip relative to the trigger',
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click'],
      description: 'How the tooltip is triggered',
    },
    delay: {
      control: { type: 'range', min: 0, max: 2000, step: 100 },
      description: 'Delay before showing tooltip (in milliseconds)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tooltip is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a helpful tooltip',
    children: <Button>Hover me</Button>,
  },
};

export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-16">
      <div></div>
      <Tooltip content="Top tooltip" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <div></div>
      
      <Tooltip content="Left tooltip" placement="left">
        <Button>Left</Button>
      </Tooltip>
      <div></div>
      <Tooltip content="Right tooltip" placement="right">
        <Button>Right</Button>
      </Tooltip>
      
      <div></div>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <div></div>
    </div>
  ),
};

export const ClickTrigger: Story = {
  args: {
    content: 'Click to toggle this tooltip',
    trigger: 'click',
    children: <Button>Click me</Button>,
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip content="Get more information about this feature">
        <button className="p-2 text-notion-text-secondary hover:text-notion-text-primary dark:text-notion-dark-text-secondary dark:hover:text-notion-dark-text-primary transition-colors">
          <Info size={16} />
        </button>
      </Tooltip>
      
      <Tooltip content="Need help? Click here for documentation" trigger="click">
        <button className="p-2 text-notion-text-secondary hover:text-notion-text-primary dark:text-notion-dark-text-secondary dark:hover:text-notion-dark-text-primary transition-colors">
          <HelpCircle size={16} />
        </button>
      </Tooltip>
      
      <Tooltip content="Open settings panel" placement="bottom">
        <button className="p-2 text-notion-text-secondary hover:text-notion-text-primary dark:text-notion-dark-text-secondary dark:hover:text-notion-dark-text-primary transition-colors">
          <Settings size={16} />
        </button>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    content: 'This is a longer tooltip with more detailed information that might span multiple lines to provide comprehensive context.',
    children: <Button>Long tooltip</Button>,
  },
};

export const Disabled: Story = {
  args: {
    content: 'This tooltip is disabled',
    disabled: true,
    children: <Button disabled>Disabled button</Button>,
  },
};

export const CustomDelay: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip content="No delay" delay={0}>
        <Button size="sm">No delay</Button>
      </Tooltip>
      
      <Tooltip content="500ms delay" delay={500}>
        <Button size="sm">500ms delay</Button>
      </Tooltip>
      
      <Tooltip content="1000ms delay" delay={1000}>
        <Button size="sm">1000ms delay</Button>
      </Tooltip>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div>
        <label className="block text-sm font-medium mb-1">
          Email Address
          <Tooltip content="We'll never share your email with anyone else" placement="right">
            <Info size={14} className="inline ml-1 text-notion-text-tertiary dark:text-notion-dark-text-tertiary" />
          </Tooltip>
        </label>
        <input 
          type="email" 
          className="w-full px-3 py-2 border border-notion-border dark:border-notion-dark-border rounded-notion"
          placeholder="Enter your email"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">
          Password
          <Tooltip 
            content="Password must be at least 8 characters long and include uppercase, lowercase, and numbers"
            placement="right"
            trigger="click"
          >
            <HelpCircle size={14} className="inline ml-1 text-notion-text-tertiary dark:text-notion-dark-text-tertiary cursor-pointer" />
          </Tooltip>
        </label>
        <input 
          type="password" 
          className="w-full px-3 py-2 border border-notion-border dark:border-notion-dark-border rounded-notion"
          placeholder="Enter your password"
        />
      </div>
    </div>
  ),
};