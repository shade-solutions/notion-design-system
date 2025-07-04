import type { Meta, StoryObj } from '@storybook/react';
import { Heart, MessageCircle, Share } from 'lucide-react';
import Card from './Card';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible card component for grouping related content. Supports different variants, padding options, and interactive states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
      description: 'Visual style variant of the card',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Internal padding of the card',
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether the card has hover effects',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card is clickable',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <Typography variant="h4" className="mb-2">Card Title</Typography>
        <Typography variant="body2" color="gray">
          This is a default card with some content inside.
        </Typography>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div>
        <Typography variant="h4" className="mb-2">Outlined Card</Typography>
        <Typography variant="body2" color="gray">
          This card has an outlined style with transparent background.
        </Typography>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <Typography variant="h4" className="mb-2">Elevated Card</Typography>
        <Typography variant="body2" color="gray">
          This card has a shadow to appear elevated from the background.
        </Typography>
      </div>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <div>
        <Typography variant="h4" className="mb-2">Hoverable Card</Typography>
        <Typography variant="body2" color="gray">
          Hover over this card to see the effect.
        </Typography>
      </div>
    ),
  },
};

export const Clickable: Story = {
  args: {
    clickable: true,
    onClick: () => alert('Card clicked!'),
    children: (
      <div>
        <Typography variant="h4" className="mb-2">Clickable Card</Typography>
        <Typography variant="body2" color="gray">
          Click this card to trigger an action.
        </Typography>
      </div>
    ),
  },
};

export const BlogPost: Story = {
  render: () => (
    <Card variant="elevated" hoverable className="max-w-md">
      <div className="space-y-4">
        <div className="aspect-video bg-notion-bg-tertiary dark:bg-notion-dark-bg-tertiary rounded-notion"></div>
        <div>
          <Typography variant="caption" color="gray" className="mb-1">
            March 15, 2024
          </Typography>
          <Typography variant="h4" className="mb-2">
            Getting Started with Design Systems
          </Typography>
          <Typography variant="body2" color="gray" className="mb-4">
            Learn how to build scalable and maintainable design systems that help teams work more efficiently.
          </Typography>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-notion-border dark:border-notion-dark-border">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-notion-text-secondary hover:text-notion-red transition-colors">
              <Heart size={16} />
              <span className="text-notion-sm">24</span>
            </button>
            <button className="flex items-center gap-1 text-notion-text-secondary hover:text-notion-blue transition-colors">
              <MessageCircle size={16} />
              <span className="text-notion-sm">8</span>
            </button>
            <button className="flex items-center gap-1 text-notion-text-secondary hover:text-notion-green transition-colors">
              <Share size={16} />
            </button>
          </div>
          <Button size="sm" variant="ghost">Read More</Button>
        </div>
      </div>
    </Card>
  ),
};

export const PaddingVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Card padding="none">
        <div className="p-2 bg-notion-blue-light dark:bg-notion-dark-bg-tertiary">
          <Typography variant="body2">No padding</Typography>
        </div>
      </Card>
      <Card padding="sm">
        <Typography variant="body2">Small padding</Typography>
      </Card>
      <Card padding="md">
        <Typography variant="body2">Medium padding</Typography>
      </Card>
      <Card padding="lg">
        <Typography variant="body2">Large padding</Typography>
      </Card>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card variant="default">
        <Typography variant="h5" className="mb-2">Default</Typography>
        <Typography variant="body2" color="gray">
          Standard card with background and border.
        </Typography>
      </Card>
      <Card variant="outlined">
        <Typography variant="h5" className="mb-2">Outlined</Typography>
        <Typography variant="body2" color="gray">
          Transparent background with border only.
        </Typography>
      </Card>
      <Card variant="elevated">
        <Typography variant="h5" className="mb-2">Elevated</Typography>
        <Typography variant="body2" color="gray">
          Card with shadow for elevation effect.
        </Typography>
      </Card>
    </div>
  ),
};