import type { Meta, StoryObj } from '@storybook/react';
import { FileText, Folder, Image, Code, Database } from 'lucide-react';
import Sidebar, { SidebarItem } from './Sidebar';

const sampleItems: SidebarItem[] = [
  {
    id: '1',
    title: 'Getting Started',
    type: 'page',
    icon: <FileText size={14} />,
  },
  {
    id: '2',
    title: 'Projects',
    type: 'folder',
    expanded: true,
    children: [
      {
        id: '2-1',
        title: 'Design System',
        type: 'page',
        icon: <Code size={14} />,
      },
      {
        id: '2-2',
        title: 'Website Redesign',
        type: 'page',
        icon: <Image size={14} />,
      },
      {
        id: '2-3',
        title: 'Mobile App',
        type: 'folder',
        children: [
          {
            id: '2-3-1',
            title: 'User Research',
            type: 'page',
          },
          {
            id: '2-3-2',
            title: 'Wireframes',
            type: 'page',
          },
          {
            id: '2-3-3',
            title: 'Prototypes',
            type: 'page',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'Resources',
    type: 'folder',
    children: [
      {
        id: '3-1',
        title: 'Brand Guidelines',
        type: 'page',
      },
      {
        id: '3-2',
        title: 'Asset Library',
        type: 'page',
        icon: <Image size={14} />,
      },
      {
        id: '3-3',
        title: 'Database Schema',
        type: 'page',
        icon: <Database size={14} />,
      },
    ],
  },
  {
    id: '4',
    title: 'Meeting Notes',
    type: 'page',
  },
  {
    id: '5',
    title: 'Archive',
    type: 'folder',
    children: [
      {
        id: '5-1',
        title: 'Old Projects',
        type: 'folder',
        children: [
          {
            id: '5-1-1',
            title: 'Legacy App',
            type: 'page',
          },
        ],
      },
    ],
  },
];

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A Notion-style sidebar component for navigation. Supports nested items, search functionality, and interactive states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    searchable: {
      control: 'boolean',
      description: 'Whether to show the search input',
    },
    width: {
      control: { type: 'range', min: 200, max: 400 },
      description: 'Width of the sidebar in pixels',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: sampleItems,
    selectedId: '2-1',
  },
  render: (args) => (
    <div className="h-screen flex">
      <Sidebar {...args} />
      <div className="flex-1 p-6 bg-notion-bg-primary dark:bg-notion-dark-bg-primary">
        <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
        <p className="text-notion-text-secondary dark:text-notion-dark-text-secondary">
          Click on items in the sidebar to see the selection state.
        </p>
      </div>
    </div>
  ),
};

export const WithoutSearch: Story = {
  args: {
    items: sampleItems,
    searchable: false,
    selectedId: '3-2',
  },
  render: (args) => (
    <div className="h-screen flex">
      <Sidebar {...args} />
      <div className="flex-1 p-6 bg-notion-bg-primary dark:bg-notion-dark-bg-primary">
        <h1 className="text-2xl font-bold mb-4">No Search Sidebar</h1>
        <p className="text-notion-text-secondary dark:text-notion-dark-text-secondary">
          This sidebar doesn't have a search input.
        </p>
      </div>
    </div>
  ),
};

export const NarrowSidebar: Story = {
  args: {
    items: sampleItems,
    width: 200,
    selectedId: '4',
  },
  render: (args) => (
    <div className="h-screen flex">
      <Sidebar {...args} />
      <div className="flex-1 p-6 bg-notion-bg-primary dark:bg-notion-dark-bg-primary">
        <h1 className="text-2xl font-bold mb-4">Narrow Sidebar</h1>
        <p className="text-notion-text-secondary dark:text-notion-dark-text-secondary">
          This sidebar is narrower than the default width.
        </p>
      </div>
    </div>
  ),
};

export const WideSidebar: Story = {
  args: {
    items: sampleItems,
    width: 320,
    selectedId: '2-3-2',
  },
  render: (args) => (
    <div className="h-screen flex">
      <Sidebar {...args} />
      <div className="flex-1 p-6 bg-notion-bg-primary dark:bg-notion-dark-bg-primary">
        <h1 className="text-2xl font-bold mb-4">Wide Sidebar</h1>
        <p className="text-notion-text-secondary dark:text-notion-dark-text-secondary">
          This sidebar is wider to accommodate longer item names.
        </p>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    items: sampleItems,
    onItemClick: (item) => alert(`Clicked: ${item.title}`),
    onItemToggle: (item) => console.log(`Toggled: ${item.title}`, item.expanded),
  },
  render: (args) => (
    <div className="h-screen flex">
      <Sidebar {...args} />
      <div className="flex-1 p-6 bg-notion-bg-primary dark:bg-notion-dark-bg-primary">
        <h1 className="text-2xl font-bold mb-4">Interactive Sidebar</h1>
        <p className="text-notion-text-secondary dark:text-notion-dark-text-secondary mb-4">
          Click on items to see alerts, and expand/collapse folders to see console logs.
        </p>
        <div className="bg-notion-bg-tertiary dark:bg-notion-dark-bg-tertiary p-4 rounded-notion">
          <h3 className="font-semibold mb-2">Try these interactions:</h3>
          <ul className="space-y-1 text-sm">
            <li>• Click on any page to trigger an alert</li>
            <li>• Expand/collapse folders to see console output</li>
            <li>• Hover over items to see action buttons</li>
            <li>• Use the search to filter items</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};