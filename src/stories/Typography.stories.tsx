import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design Tokens/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Typography scale and font specifications used throughout the design system.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const TypeScale = ({ 
  name, 
  className, 
  fontSize, 
  lineHeight, 
  fontWeight = 'normal' 
}: { 
  name: string; 
  className: string; 
  fontSize: string; 
  lineHeight: string; 
  fontWeight?: string;
}) => (
  <div className="py-4 border-b border-notion-border dark:border-notion-dark-border last:border-b-0">
    <div className="flex items-baseline justify-between mb-2">
      <span className="text-notion-sm font-medium text-notion-text-secondary dark:text-notion-dark-text-secondary">
        {name}
      </span>
      <span className="text-notion-xs text-notion-text-tertiary dark:text-notion-dark-text-tertiary">
        {fontSize} / {lineHeight} / {fontWeight}
      </span>
    </div>
    <div className={className}>
      The quick brown fox jumps over the lazy dog
    </div>
  </div>
);

export const HeadingScale: Story = {
  render: () => (
    <div className="space-y-0">
      <h3 className="text-lg font-semibold mb-6">Heading Scale</h3>
      <TypeScale 
        name="Heading 1" 
        className="text-notion-3xl font-bold leading-tight" 
        fontSize="30px" 
        lineHeight="36px" 
        fontWeight="bold"
      />
      <TypeScale 
        name="Heading 2" 
        className="text-notion-2xl font-bold leading-tight" 
        fontSize="24px" 
        lineHeight="32px" 
        fontWeight="bold"
      />
      <TypeScale 
        name="Heading 3" 
        className="text-notion-xl font-semibold leading-tight" 
        fontSize="20px" 
        lineHeight="28px" 
        fontWeight="semibold"
      />
      <TypeScale 
        name="Heading 4" 
        className="text-notion-lg font-semibold leading-snug" 
        fontSize="18px" 
        lineHeight="28px" 
        fontWeight="semibold"
      />
      <TypeScale 
        name="Heading 5" 
        className="text-notion-base font-semibold leading-snug" 
        fontSize="16px" 
        lineHeight="24px" 
        fontWeight="semibold"
      />
      <TypeScale 
        name="Heading 6" 
        className="text-notion-sm font-semibold leading-snug" 
        fontSize="14px" 
        lineHeight="20px" 
        fontWeight="semibold"
      />
    </div>
  ),
};

export const BodyScale: Story = {
  render: () => (
    <div className="space-y-0">
      <h3 className="text-lg font-semibold mb-6">Body Text Scale</h3>
      <TypeScale 
        name="Body 1" 
        className="text-notion-base leading-relaxed" 
        fontSize="16px" 
        lineHeight="24px"
      />
      <TypeScale 
        name="Body 2" 
        className="text-notion-sm leading-relaxed" 
        fontSize="14px" 
        lineHeight="20px"
      />
      <TypeScale 
        name="Caption" 
        className="text-notion-xs leading-normal" 
        fontSize="12px" 
        lineHeight="16px"
      />
      <TypeScale 
        name="Overline" 
        className="text-notion-xs uppercase tracking-wide leading-normal" 
        fontSize="12px" 
        lineHeight="16px"
      />
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-6">Font Weights</h3>
      <div className="space-y-3">
        <div className="text-notion-base font-normal">
          Normal (400) - The quick brown fox jumps over the lazy dog
        </div>
        <div className="text-notion-base font-medium">
          Medium (500) - The quick brown fox jumps over the lazy dog
        </div>
        <div className="text-notion-base font-semibold">
          Semibold (600) - The quick brown fox jumps over the lazy dog
        </div>
        <div className="text-notion-base font-bold">
          Bold (700) - The quick brown fox jumps over the lazy dog
        </div>
      </div>
    </div>
  ),
};

export const FontFamily: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-6">Font Family</h3>
      <div className="p-4 bg-notion-bg-tertiary dark:bg-notion-dark-bg-tertiary rounded-notion">
        <h4 className="font-semibold mb-2">Notion Font Stack</h4>
        <code className="text-notion-sm text-notion-text-secondary dark:text-notion-dark-text-secondary">
          ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"
        </code>
      </div>
      <p className="text-notion-base leading-relaxed">
        This font stack ensures optimal readability across all platforms while maintaining 
        consistency with Notion's design. It prioritizes system fonts for better performance 
        and native feel on each operating system.
      </p>
    </div>
  ),
};

export const TypographyInContext: Story = {
  render: () => (
    <div className="max-w-2xl space-y-6">
      <h3 className="text-lg font-semibold mb-6">Typography in Context</h3>
      
      <article className="space-y-4">
        <h1 className="text-notion-3xl font-bold leading-tight">
          Building Better Design Systems
        </h1>
        
        <p className="text-notion-sm text-notion-text-secondary dark:text-notion-dark-text-secondary">
          Published on March 15, 2024 • 5 min read
        </p>
        
        <p className="text-notion-base leading-relaxed">
          Design systems are the backbone of consistent, scalable user interfaces. 
          They provide a shared language between designers and developers, ensuring 
          that every component feels like part of a cohesive whole.
        </p>
        
        <h2 className="text-notion-2xl font-bold leading-tight mt-8">
          Key Principles
        </h2>
        
        <p className="text-notion-base leading-relaxed">
          When building a design system, there are several key principles to keep in mind:
        </p>
        
        <ul className="space-y-2 text-notion-base leading-relaxed ml-6">
          <li className="list-disc">Consistency across all components and patterns</li>
          <li className="list-disc">Accessibility as a first-class concern</li>
          <li className="list-disc">Flexibility to accommodate different use cases</li>
          <li className="list-disc">Clear documentation and examples</li>
        </ul>
        
        <h3 className="text-notion-xl font-semibold leading-tight mt-6">
          Implementation Details
        </h3>
        
        <p className="text-notion-base leading-relaxed">
          The implementation should focus on developer experience while maintaining 
          design integrity. This includes proper TypeScript support, comprehensive 
          testing, and clear API design.
        </p>
        
        <div className="bg-notion-bg-tertiary dark:bg-notion-dark-bg-tertiary p-4 rounded-notion">
          <p className="text-notion-sm text-notion-text-secondary dark:text-notion-dark-text-secondary italic">
            "A design system is a product serving products." - Nathan Curtis
          </p>
        </div>
      </article>
    </div>
  ),
};