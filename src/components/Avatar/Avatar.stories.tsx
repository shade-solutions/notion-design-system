import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Avatar component for displaying user profile pictures or initials.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the avatar',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Shape of the avatar',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: 'John Doe',
  },
};

export const WithFallback: Story = {
  args: {
    fallback: 'JD',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" fallback="XS" />
      <Avatar size="sm" fallback="SM" />
      <Avatar size="md" fallback="MD" />
      <Avatar size="lg" fallback="LG" />
      <Avatar size="xl" fallback="XL" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar shape="circle" fallback="CI" />
      <Avatar shape="square" fallback="SQ" />
    </div>
  ),
};

export const UserProfiles: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Avatar 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
          alt="John Doe" 
        />
        <div>
          <div className="font-medium">John Doe</div>
          <div className="text-sm text-notion-text-secondary dark:text-notion-dark-text-secondary">
            Product Designer
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Avatar fallback="SA" />
        <div>
          <div className="font-medium">Sarah Anderson</div>
          <div className="text-sm text-notion-text-secondary dark:text-notion-dark-text-secondary">
            Frontend Developer
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Avatar 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
          alt="Mike Johnson" 
          size="sm"
        />
        <div>
          <div className="font-medium">Mike Johnson</div>
          <div className="text-sm text-notion-text-secondary dark:text-notion-dark-text-secondary">
            Backend Engineer
          </div>
        </div>
      </div>
    </div>
  ),
};