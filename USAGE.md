# Notion Design System - Usage Documentation

## Table of Contents
- [Installation](#installation)
- [Setup](#setup)
- [Components](#components)
- [Theming](#theming)
- [TypeScript Support](#typescript-support)
- [Best Practices](#best-practices)
- [Migration Guide](#migration-guide)
- [FAQ](#faq)

## Installation

### npm
```bash
npm install notion-design-system
```

### yarn
```bash
yarn add notion-design-system
```

### pnpm
```bash
pnpm add notion-design-system
```

## Setup

### 1. Import Styles
Add the CSS file to your project. The method depends on your build system:

#### Next.js
```jsx
// pages/_app.js or app/layout.js
import 'notion-design-system/dist/styles.css';
```

#### Vite/React
```jsx
// main.jsx or App.jsx
import 'notion-design-system/dist/styles.css';
```

#### Webpack/Create React App
```jsx
// index.js or App.js
import 'notion-design-system/dist/styles.css';
```

### 2. Configure Tailwind (Optional)
If you're using Tailwind CSS in your project, you can extend the theme with Notion's design tokens:

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... your content paths
    './node_modules/notion-design-system/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        notion: {
          // Add Notion color tokens to your theme
          'bg-primary': '#ffffff',
          'bg-secondary': '#f7f6f3',
          'text-primary': '#37352f',
          // ... other colors
        }
      }
    }
  }
}
```

### 3. Dark Mode Support
The components support dark mode automatically. Enable it by adding the `dark` class to your root element:

```jsx
// For Next.js with next-themes
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

## Components

### Button
```jsx
import { Button } from 'notion-design-system';

function MyComponent() {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button size="sm">Small Button</Button>
      <Button size="lg">Large Button</Button>
    </div>
  );
}
```

#### Props
- `variant`: 'primary' | 'secondary' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `loading`: boolean
- `onClick`: function

### Card
```jsx
import { Card } from 'notion-design-system';

function MyComponent() {
  return (
    <Card>
      <Card.Header>
        <h3>Card Title</h3>
      </Card.Header>
      <Card.Content>
        <p>Card content goes here...</p>
      </Card.Content>
      <Card.Footer>
        <Button>Action</Button>
      </Card.Footer>
    </Card>
  );
}
```

### Typography
```jsx
import { Typography } from 'notion-design-system';

function MyComponent() {
  return (
    <div>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="body1">Body text</Typography>
      <Typography variant="body2">Secondary text</Typography>
      <Typography variant="caption">Caption text</Typography>
    </div>
  );
}
```

### Input
```jsx
import { Input } from 'notion-design-system';

function MyComponent() {
  return (
    <div>
      <Input 
        placeholder="Enter text..."
        label="Username"
        error="This field is required"
      />
      <Input 
        type="password"
        placeholder="Enter password..."
        label="Password"
      />
    </div>
  );
}
```

### Avatar
```jsx
import { Avatar } from 'notion-design-system';

function MyComponent() {
  return (
    <div>
      <Avatar src="/path/to/image.jpg" alt="User Name" />
      <Avatar initials="JD" />
      <Avatar size="sm" initials="SM" />
      <Avatar size="lg" src="/path/to/image.jpg" />
    </div>
  );
}
```

### Badge
```jsx
import { Badge } from 'notion-design-system';

function MyComponent() {
  return (
    <div>
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  );
}
```

### Tooltip
```jsx
import { Tooltip } from 'notion-design-system';

function MyComponent() {
  return (
    <Tooltip content="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  );
}
```

### Sidebar
```jsx
import { Sidebar } from 'notion-design-system';

function MyComponent() {
  return (
    <Sidebar>
      <Sidebar.Item icon="home" active>Home</Sidebar.Item>
      <Sidebar.Item icon="settings">Settings</Sidebar.Item>
      <Sidebar.Item icon="user">Profile</Sidebar.Item>
    </Sidebar>
  );
}
```

### Block
```jsx
import { Block } from 'notion-design-system';

function MyComponent() {
  return (
    <div>
      <Block type="text">
        This is a text block similar to Notion's blocks.
      </Block>
      <Block type="heading" level={2}>
        This is a heading block
      </Block>
      <Block type="code" language="javascript">
        console.log('Hello, World!');
      </Block>
    </div>
  );
}
```

## Theming

### CSS Custom Properties
You can override the default theme by defining CSS custom properties:

```css
:root {
  --notion-bg-primary: #ffffff;
  --notion-bg-secondary: #f7f6f3;
  --notion-text-primary: #37352f;
  --notion-text-secondary: #6f6e69;
  --notion-border: #e9e9e7;
  --notion-blue: #2383e2;
  /* ... other properties */
}

.dark {
  --notion-bg-primary: #191919;
  --notion-bg-secondary: #2f3437;
  --notion-text-primary: #ffffff;
  --notion-text-secondary: #9b9998;
  --notion-border: #373c41;
  /* ... other properties */
}
```

### Extending with Tailwind
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-primary': '#your-color',
        'custom-secondary': '#your-color',
      }
    }
  }
}
```

## TypeScript Support

The package includes full TypeScript support with type definitions:

```tsx
import { Button, ButtonProps } from 'notion-design-system';

interface MyComponentProps {
  onSubmit: () => void;
}

function MyComponent({ onSubmit }: MyComponentProps) {
  const handleClick: ButtonProps['onClick'] = (event) => {
    // TypeScript knows the event type
    console.log('Button clicked', event);
    onSubmit();
  };

  return (
    <Button onClick={handleClick} variant="primary">
      Submit
    </Button>
  );
}
```

## Best Practices

### 1. Consistent Spacing
Use the provided spacing tokens:
```jsx
<div className="space-y-notion-md">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</div>
```

### 2. Color Usage
Stick to the semantic color tokens:
```jsx
// Good
<Button variant="primary">Primary Action</Button>
<Button variant="danger">Delete</Button>

// Avoid custom colors that don't follow the system
<Button style={{ backgroundColor: 'purple' }}>Custom</Button>
```

### 3. Accessibility
All components include proper ARIA attributes:
```jsx
<Button 
  disabled={loading}
  aria-label="Submit form"
  aria-describedby="submit-help"
>
  {loading ? 'Submitting...' : 'Submit'}
</Button>
```

### 4. Responsive Design
Use the responsive utilities:
```jsx
<Typography variant="h1" className="text-notion-xl md:text-notion-2xl">
  Responsive Heading
</Typography>
```

## Migration Guide

### From Custom Components
If you're migrating from custom components:

1. **Audit your current components**: List all components you want to replace
2. **Map to design system**: Find equivalent components in the design system
3. **Update imports**: Replace your imports with the design system imports
4. **Test thoroughly**: Ensure all functionality works as expected

### Example Migration
```jsx
// Before
import { MyButton } from '../components/MyButton';
import './MyButton.css';

// After
import { Button } from 'notion-design-system';
```

## FAQ

### Q: How do I customize the theme?
A: You can override CSS custom properties or extend the Tailwind theme. See the [Theming](#theming) section.

### Q: Are the components accessible?
A: Yes, all components follow WCAG 2.1 AA guidelines and include proper ARIA attributes.

### Q: Can I use this with Next.js?
A: Yes, the components are compatible with Next.js, including SSR and SSG.

### Q: How do I report bugs?
A: Please create an issue on the [GitHub repository](https://github.com/shade-solutions/notion-design-system/issues).

### Q: Can I contribute?
A: Yes! Check out the contributing guidelines in the repository.

### Q: Is this production-ready?
A: The components are built with production use in mind, but please test thoroughly in your specific use case.

## Support

- **GitHub Issues**: https://github.com/shade-solutions/notion-design-system/issues
- **Documentation**: https://github.com/shade-solutions/notion-design-system#readme
- **NPM Package**: https://www.npmjs.com/package/notion-design-system
