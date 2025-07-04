import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Typography component for consistent text styling throughout the application. Supports multiple variants, colors, and weights.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'overline'],
      description: 'Typography variant',
    },
    color: {
      control: 'select',
      options: ['default', 'blue', 'red', 'yellow', 'green', 'purple', 'pink', 'orange', 'gray'],
      description: 'Text color',
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is default typography',
  },
};

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1 - The quick brown fox</Typography>
      <Typography variant="h2">Heading 2 - The quick brown fox</Typography>
      <Typography variant="h3">Heading 3 - The quick brown fox</Typography>
      <Typography variant="h4">Heading 4 - The quick brown fox</Typography>
      <Typography variant="h5">Heading 5 - The quick brown fox</Typography>
      <Typography variant="h6">Heading 6 - The quick brown fox</Typography>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <Typography variant="body1">
        Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </Typography>
      <Typography variant="body2">
        Body 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </Typography>
      <Typography variant="caption">
        Caption - This is a caption text used for small details and metadata.
      </Typography>
      <Typography variant="overline">
        Overline - Used for labels and categories
      </Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography color="default">Default color text</Typography>
      <Typography color="blue">Blue color text</Typography>
      <Typography color="red">Red color text</Typography>
      <Typography color="yellow">Yellow color text</Typography>
      <Typography color="green">Green color text</Typography>
      <Typography color="purple">Purple color text</Typography>
      <Typography color="pink">Pink color text</Typography>
      <Typography color="orange">Orange color text</Typography>
      <Typography color="gray">Gray color text</Typography>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography weight="normal">Normal weight text</Typography>
      <Typography weight="medium">Medium weight text</Typography>
      <Typography weight="semibold">Semibold weight text</Typography>
      <Typography weight="bold">Bold weight text</Typography>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="space-y-4 w-full">
      <Typography align="left">Left aligned text</Typography>
      <Typography align="center">Center aligned text</Typography>
      <Typography align="right">Right aligned text</Typography>
    </div>
  ),
};