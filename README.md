# Notion Design System

A comprehensive Notion-inspired design system built with React, TypeScript, and Tailwind CSS. This library provides a collection of reusable components that replicate the look and feel of Notion's interface.

## Features

- 🎨 **Notion-inspired Design**: Carefully crafted components that match Notion's visual style
- 🌙 **Dark Mode Support**: Built-in dark mode with seamless theme switching
- 🎯 **TypeScript Support**: Fully typed components with excellent IntelliSense
- 📦 **Tree Shaking**: Optimized bundle size with ES modules
- 🚀 **Tailwind CSS**: Utility-first CSS framework integration
- 📚 **Storybook**: Interactive component documentation
- ♿ **Accessibility**: WCAG compliant components with proper ARIA attributes

## Installation

```bash
npm install notion-design-system
```

## Quick Start

### 1. Install the package and its peer dependencies

```bash
npm install notion-design-system react react-dom
```

### 2. Add Tailwind CSS to your project

If you don't have Tailwind CSS installed:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configure Tailwind CSS

Update your `tailwind.config.js` to include the Notion design system configuration:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/notion-design-system/dist/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        notion: {
          // Light theme colors
          'bg-primary': '#ffffff',
          'bg-secondary': '#f7f6f3',
          'bg-tertiary': '#f1f1ef',
          'text-primary': '#37352f',
          'text-secondary': '#6f6e69',
          'text-tertiary': '#9b9a97',
          'border': '#e9e9e7',
          'border-hover': '#d3d1cb',
          
          // Dark theme colors
          'dark-bg-primary': '#191919',
          'dark-bg-secondary': '#2f3437',
          'dark-bg-tertiary': '#373c41',
          'dark-text-primary': '#ffffff',
          'dark-text-secondary': '#9b9998',
          'dark-text-tertiary': '#6f6e69',
          'dark-border': '#373c41',
          'dark-border-hover': '#4a5055',
          
          // Accent colors
          'blue': '#2383e2',
          'blue-light': '#e7f3ff',
          'blue-dark': '#1a6bb8',
          'red': '#e03e3e',
          'red-light': '#ffeaea',
          'red-dark': '#b83232',
          'yellow': '#ffb700',
          'yellow-light': '#fff8e1',
          'yellow-dark': '#cc9200',
          'green': '#0f7b0f',
          'green-light': '#e8f5e8',
          'green-dark': '#0c5e0c',
          'purple': '#9065b0',
          'purple-light': '#f4f0f7',
          'purple-dark': '#6b4884',
          'pink': '#e255a1',
          'pink-light': '#fdf0f8',
          'pink-dark': '#b54081',
          'orange': '#d9730d',
          'orange-light': '#fef2e8',
          'orange-dark': '#ad5a0a',
        },
      },
      fontFamily: {
        'notion': [
          'ui-sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Helvetica',
          '"Apple Color Emoji"',
          'Arial',
          'sans-serif',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
      fontSize: {
        'notion-xs': ['12px', '16px'],
        'notion-sm': ['14px', '20px'],
        'notion-base': ['16px', '24px'],
        'notion-lg': ['18px', '28px'],
        'notion-xl': ['20px', '28px'],
        'notion-2xl': ['24px', '32px'],
        'notion-3xl': ['30px', '36px'],
      },
      spacing: {
        'notion-xs': '4px',
        'notion-sm': '8px',
        'notion-md': '12px',
        'notion-lg': '16px',
        'notion-xl': '24px',
        'notion-2xl': '32px',
        'notion-3xl': '48px',
      },
      borderRadius: {
        'notion': '3px',
        'notion-md': '6px',
        'notion-lg': '8px',
      },
      boxShadow: {
        'notion': '0 1px 3px rgba(15, 15, 15, 0.1)',
        'notion-md': '0 4px 6px rgba(15, 15, 15, 0.1)',
        'notion-lg': '0 10px 15px rgba(15, 15, 15, 0.1)',
        'notion-hover': '0 2px 4px rgba(15, 15, 15, 0.15)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
```

### 4. Add the CSS

Import the required styles in your main CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-notion-bg-primary text-notion-text-primary font-notion;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
  
  .dark body {
    @apply bg-notion-dark-bg-primary text-notion-dark-text-primary;
  }
}
```

### 5. Start using components

```jsx
import { Button, Card, Typography } from '@sh20raj/notion-design-system';

function App() {
  return (
    <div className="p-4">
      <Card className="max-w-md mx-auto">
        <Typography variant="h1" className="mb-4">
          Welcome to Notion Design System
        </Typography>
        <Typography variant="body" className="mb-4">
          This is a sample implementation using the Notion-inspired components.
        </Typography>
        <Button variant="primary" size="md">
          Get Started
        </Button>
      </Card>
    </div>
  );
}
```

## Available Components

### Button
Notion-style buttons with multiple variants and sizes.

```jsx
import { Button } from '@sh20raj/notion-design-system';

// Basic usage
<Button variant="primary" size="md">
  Primary Button
</Button>

// With icon
<Button variant="secondary" size="sm" icon="plus">
  Add Item
</Button>
```

### Card
Container component for grouping content.

```jsx
import { Card } from '@sh20raj/notion-design-system';

<Card className="p-4">
  <p>Card content goes here</p>
</Card>
```

### Typography
Text components with consistent styling.

```jsx
import { Typography } from '@sh20raj/notion-design-system';

<Typography variant="h1">Main Heading</Typography>
<Typography variant="body">Body text</Typography>
<Typography variant="caption">Caption text</Typography>
```

### Input
Form input components with Notion styling.

```jsx
import { Input } from '@sh20raj/notion-design-system';

<Input 
  placeholder="Enter your text..."
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### Avatar
User avatar component with fallback support.

```jsx
import { Avatar } from '@sh20raj/notion-design-system';

<Avatar 
  src="https://example.com/avatar.jpg"
  alt="User Avatar"
  size="md"
/>
```

### Badge
Small labels for status, categories, etc.

```jsx
import { Badge } from '@sh20raj/notion-design-system';

<Badge variant="success">Published</Badge>
<Badge variant="warning">Draft</Badge>
```

### Tooltip
Contextual information on hover.

```jsx
import { Tooltip } from '@sh20raj/notion-design-system';

<Tooltip content="This is a tooltip">
  <button>Hover me</button>
</Tooltip>
```

### Sidebar
Navigation sidebar component.

```jsx
import { Sidebar } from '@sh20raj/notion-design-system';

<Sidebar>
  <Sidebar.Item icon="home" active>
    Home
  </Sidebar.Item>
  <Sidebar.Item icon="settings">
    Settings
  </Sidebar.Item>
</Sidebar>
```

### Block
Notion-style block component for content organization.

```jsx
import { Block } from '@sh20raj/notion-design-system';

<Block type="text">
  This is a text block
</Block>
```

## Dark Mode

The components support dark mode out of the box. Toggle dark mode by adding the `dark` class to your root element:

```jsx
// Toggle dark mode
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
};
```

## TypeScript Support

All components are fully typed with TypeScript. You'll get excellent IntelliSense and type checking:

```tsx
import { Button, ButtonProps } from '@sh20raj/notion-design-system';

const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Customization

### Extending Colors

You can extend the color palette by adding custom colors to your Tailwind configuration:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        notion: {
          // Add custom colors
          'custom-blue': '#1e40af',
          'custom-green': '#059669',
        },
      },
    },
  },
};
```

### Custom Styling

All components accept a `className` prop for custom styling:

```jsx
<Button className="my-custom-class bg-blue-500 hover:bg-blue-600">
  Custom Styled Button
</Button>
```

## Storybook

Explore all components interactively in Storybook:

```bash
npm run storybook
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Rovo Dev](https://github.com/rovo-dev)

## Support

- [GitHub Issues](https://github.com/shade-solutions/notion-design-system/issues)
- [Documentation](https://github.com/shade-solutions/notion-design-system#readme)
- [Storybook](https://rovo-dev.github.io/notion-design-system/)
- ♿ **Accessibility** - WCAG compliant with keyboard navigation and screen reader support
- 🔧 **TypeScript** - Full type safety and excellent developer experience
- 📚 **Storybook** - Comprehensive documentation and interactive examples
- 🎯 **Customizable** - Easy theming with CSS custom properties

## 🚀 Quick Start

### Installation

```bash
npm install @sh20raj/notion-design-system
# or
yarn add @sh20raj/notion-design-system
# or
pnpm add @sh20raj/notion-design-system
```

### Basic Usage

```tsx
import { Button, Typography, Card } from '@sh20raj/notion-design-system';
import '@sh20raj/notion-design-system/dist/styles.css';

function App() {
  return (
    <Card>
      <Typography variant="h2">Welcome to Notion</Typography>
      <Typography variant="body1" color="gray">
        Start building your next great idea.
      </Typography>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}
```

## 📦 Components

### Core Components

- **Button** - Various styles, sizes, and states
- **Input** - Text inputs with validation and icons
- **Typography** - Consistent text styling with multiple variants
- **Card** - Flexible content containers
- **Badge** - Labels, tags, and status indicators

### Notion-Specific Components

- **Block** - Editable content blocks (text, headings, lists, todos, toggles, quotes, code)
- **Sidebar** - Hierarchical navigation with search and nested items

## 🎨 Theming

The design system uses CSS custom properties for easy customization:

```css
:root {
  /* Light theme */
  --notion-bg-primary: #ffffff;
  --notion-text-primary: #37352f;
  --notion-blue: #2383e2;
  
  /* Dark theme */
  --notion-dark-bg-primary: #191919;
  --notion-dark-text-primary: #ffffff;
}

.dark {
  /* Dark theme variables are automatically applied */
}
```

## 🌙 Dark Mode

Toggle dark mode by adding the `dark` class to your root element:

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark');
```

## 📚 Development

### Prerequisites

- Node.js 16+
- npm, yarn, or pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/notion-design-system.git
cd notion-design-system

# Install dependencies
npm install

# Start Storybook
npm run storybook
```

### Available Scripts

- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Button/         # Button component and stories
│   ├── Input/          # Input component and stories
│   ├── Typography/     # Typography component and stories
│   ├── Card/           # Card component and stories
│   ├── Badge/          # Badge component and stories
│   ├── Block/          # Block component and stories
│   ├── Sidebar/        # Sidebar component and stories
│   └── index.ts        # Component exports
├── styles/             # Global styles and Tailwind config
├── types/              # TypeScript type definitions
└── stories/            # Storybook documentation stories
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests and stories for new components
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Notion](https://notion.so)'s beautiful and functional design
- Built with [Storybook](https://storybook.js.org/) for component development
- Styled with [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- Icons from [Lucide React](https://lucide.dev/)

## 📞 Support

- 📖 [Documentation](https://your-storybook-url.com)
- 🐛 [Issue Tracker](https://github.com/your-username/notion-design-system/issues)
- 💬 [Discussions](https://github.com/your-username/notion-design-system/discussions)

---

Made with ❤️ by the Notion Design System team