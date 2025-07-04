import type { Meta, StoryObj } from '@storybook/react';
import Block from './Block';

const meta: Meta<typeof Block> = {
  title: 'Components/Block',
  component: Block,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A Notion-style block component that supports different content types including text, headings, lists, todos, toggles, quotes, and code blocks.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'heading', 'bullet', 'numbered', 'todo', 'toggle', 'quote', 'code'],
      description: 'Type of the block',
    },
    level: {
      control: { type: 'range', min: 1, max: 6 },
      description: 'Heading level (only for heading type)',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the todo is checked (only for todo type)',
    },
    collapsed: {
      control: 'boolean',
      description: 'Whether the toggle is collapsed (only for toggle type)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextBlock: Story = {
  args: {
    type: 'text',
    content: 'This is a regular text block. You can edit this content by clicking on it.',
  },
};

export const Heading1: Story = {
  args: {
    type: 'heading',
    level: 1,
    content: 'This is a Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    type: 'heading',
    level: 2,
    content: 'This is a Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    type: 'heading',
    level: 3,
    content: 'This is a Heading 3',
  },
};

export const BulletList: Story = {
  args: {
    type: 'bullet',
    content: 'This is a bullet point item',
  },
};

export const NumberedList: Story = {
  args: {
    type: 'numbered',
    content: 'This is a numbered list item',
  },
};

export const TodoUnchecked: Story = {
  args: {
    type: 'todo',
    content: 'This is an unchecked todo item',
    checked: false,
  },
};

export const TodoChecked: Story = {
  args: {
    type: 'todo',
    content: 'This is a checked todo item',
    checked: true,
  },
};

export const ToggleExpanded: Story = {
  args: {
    type: 'toggle',
    content: 'Click to toggle this content',
    collapsed: false,
    children: (
      <div className="space-y-1">
        <Block type="text" content="This content is inside the toggle" />
        <Block type="bullet" content="You can nest any type of blocks" />
        <Block type="todo" content="Including todo items" />
      </div>
    ),
  },
};

export const ToggleCollapsed: Story = {
  args: {
    type: 'toggle',
    content: 'This toggle is collapsed',
    collapsed: true,
    children: (
      <div className="space-y-1">
        <Block type="text" content="This content is hidden when collapsed" />
      </div>
    ),
  },
};

export const Quote: Story = {
  args: {
    type: 'quote',
    content: 'This is a quote block. It has a left border and italic text to distinguish it from regular content.',
  },
};

export const CodeBlock: Story = {
  args: {
    type: 'code',
    content: `function hello() {
  console.log("Hello, world!");
  return "Welcome to the design system";
}`,
  },
};

export const NotionPage: Story = {
  render: () => (
    <div className="max-w-2xl space-y-2">
      <Block type="heading" level={1} content="Welcome to Our Design System" />
      <Block type="text" content="This page demonstrates various block types that you might find in a Notion-style editor." />
      
      <Block type="heading" level={2} content="Getting Started" />
      <Block type="text" content="Here are the steps to get started:" />
      <Block type="numbered" content="Install the dependencies" />
      <Block type="numbered" content="Set up your development environment" />
      <Block type="numbered" content="Start building amazing interfaces" />
      
      <Block type="heading" level={2} content="Features" />
      <Block type="bullet" content="Interactive blocks with hover states" />
      <Block type="bullet" content="Editable content (click to edit)" />
      <Block type="bullet" content="Support for nested content" />
      
      <Block type="heading" level={2} content="Todo List" />
      <Block type="todo" content="Set up the project structure" checked={true} />
      <Block type="todo" content="Create basic components" checked={true} />
      <Block type="todo" content="Add Storybook stories" checked={false} />
      <Block type="todo" content="Write documentation" checked={false} />
      
      <Block 
        type="toggle" 
        content="Advanced Configuration" 
        collapsed={false}
      >
        <div className="space-y-1">
          <Block type="text" content="For advanced users, you can customize the behavior:" />
          <Block type="code" content={`{
  "theme": "dark",
  "autoSave": true,
  "shortcuts": {
    "bold": "cmd+b",
    "italic": "cmd+i"
  }
}`} />
        </div>
      </Block>
      
      <Block type="quote" content="Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs" />
    </div>
  ),
};