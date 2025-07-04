import type { Meta, StoryObj } from '@storybook/react';
import { Search, Mail, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input component with support for labels, icons, validation states, and multiple variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled'],
      description: 'Visual style variant of the input',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input takes full width',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Must be at least 3 characters long',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    error: 'Password must be at least 8 characters',
    value: '123',
  },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: 'Search...',
    leftIcon: <Search size={16} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    rightIcon: <Mail size={16} />,
  },
};

export const PasswordToggle: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
      <Input
        label="Password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        rightIcon={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-notion-text-tertiary hover:text-notion-text-primary dark:text-notion-dark-text-tertiary dark:hover:text-notion-dark-text-primary"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        }
      />
    );
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Filled input...',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    value: 'Disabled value',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <Input variant="default" placeholder="Default variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input 
        variant="default" 
        placeholder="With left icon" 
        leftIcon={<Search size={16} />} 
      />
      <Input 
        variant="filled" 
        placeholder="With right icon" 
        rightIcon={<Mail size={16} />} 
      />
      <Input 
        label="With label and helper text"
        placeholder="Enter value"
        helperText="This is helper text"
      />
      <Input 
        label="With error"
        placeholder="Enter value"
        error="This field is required"
        value="Invalid"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};