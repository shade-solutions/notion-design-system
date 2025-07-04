import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design Tokens/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Color palette used throughout the Notion design system. Includes both light and dark theme variants.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ name, className, description }: { name: string; className: string; description?: string }) => (
  <div className="flex items-center gap-3 p-3 rounded-notion border border-notion-border dark:border-notion-dark-border">
    <div className={`w-12 h-12 rounded-notion border border-notion-border dark:border-notion-dark-border ${className}`} />
    <div>
      <div className="font-medium text-notion-sm">{name}</div>
      {description && <div className="text-notion-xs text-notion-text-secondary dark:text-notion-dark-text-secondary">{description}</div>}
    </div>
  </div>
);

export const BackgroundColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Background Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ColorSwatch 
            name="Primary" 
            className="bg-notion-bg-primary dark:bg-notion-dark-bg-primary" 
            description="Main background color"
          />
          <ColorSwatch 
            name="Secondary" 
            className="bg-notion-bg-secondary dark:bg-notion-dark-bg-secondary" 
            description="Sidebar and secondary areas"
          />
          <ColorSwatch 
            name="Tertiary" 
            className="bg-notion-bg-tertiary dark:bg-notion-dark-bg-tertiary" 
            description="Hover states and subtle backgrounds"
          />
        </div>
      </div>
    </div>
  ),
};

export const TextColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Text Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ColorSwatch 
            name="Primary Text" 
            className="bg-notion-text-primary dark:bg-notion-dark-text-primary" 
            description="Main text color"
          />
          <ColorSwatch 
            name="Secondary Text" 
            className="bg-notion-text-secondary dark:bg-notion-dark-text-secondary" 
            description="Muted text and descriptions"
          />
          <ColorSwatch 
            name="Tertiary Text" 
            className="bg-notion-text-tertiary dark:bg-notion-dark-text-tertiary" 
            description="Placeholder text and icons"
          />
        </div>
      </div>
    </div>
  ),
};

export const AccentColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Accent Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ColorSwatch name="Blue" className="bg-notion-blue" description="Primary actions" />
          <ColorSwatch name="Red" className="bg-notion-red" description="Destructive actions" />
          <ColorSwatch name="Yellow" className="bg-notion-yellow" description="Warnings" />
          <ColorSwatch name="Green" className="bg-notion-green" description="Success states" />
          <ColorSwatch name="Purple" className="bg-notion-purple" description="Creative content" />
          <ColorSwatch name="Pink" className="bg-notion-pink" description="Highlights" />
          <ColorSwatch name="Orange" className="bg-notion-orange" description="Notifications" />
        </div>
      </div>
    </div>
  ),
};

export const BorderColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Border Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ColorSwatch 
            name="Default Border" 
            className="bg-notion-border dark:bg-notion-dark-border" 
            description="Standard borders"
          />
          <ColorSwatch 
            name="Hover Border" 
            className="bg-notion-border-hover dark:bg-notion-dark-border-hover" 
            description="Interactive element borders"
          />
        </div>
      </div>
    </div>
  ),
};

export const ColorUsageExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">Usage Examples</h3>
      
      <div className="space-y-4">
        <div className="p-4 bg-notion-bg-primary dark:bg-notion-dark-bg-primary border border-notion-border dark:border-notion-dark-border rounded-notion">
          <h4 className="text-notion-text-primary dark:text-notion-dark-text-primary font-semibold mb-2">
            Primary Content Area
          </h4>
          <p className="text-notion-text-secondary dark:text-notion-dark-text-secondary text-sm">
            This demonstrates the primary background with primary and secondary text colors.
          </p>
        </div>
        
        <div className="p-4 bg-notion-bg-secondary dark:bg-notion-dark-bg-secondary rounded-notion">
          <h4 className="text-notion-text-primary dark:text-notion-dark-text-primary font-semibold mb-2">
            Secondary Area (Sidebar)
          </h4>
          <p className="text-notion-text-secondary dark:text-notion-dark-text-secondary text-sm">
            Secondary background used for sidebars and navigation areas.
          </p>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-notion-blue-light dark:bg-notion-blue/20 text-notion-blue-dark dark:text-notion-blue rounded-notion text-sm">
            Blue Badge
          </span>
          <span className="px-3 py-1 bg-notion-green-light dark:bg-notion-green/20 text-notion-green-dark dark:text-notion-green rounded-notion text-sm">
            Green Badge
          </span>
          <span className="px-3 py-1 bg-notion-red-light dark:bg-notion-red/20 text-notion-red-dark dark:text-notion-red rounded-notion text-sm">
            Red Badge
          </span>
        </div>
      </div>
    </div>
  ),
};