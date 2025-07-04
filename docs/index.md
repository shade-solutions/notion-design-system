---
layout: home
hero:
  name: "Notion Design System"
  text: "Beautiful React Components"
  tagline: "A comprehensive Notion-inspired design system built with React, TypeScript, and Tailwind CSS"
  image:
    src: /logo.svg
    alt: Notion Design System
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: Components
      link: /components/button
    - theme: alt
      text: GitHub
      link: https://github.com/shade-solutions/notion-design-system

features:
  - icon: 🎨
    title: Notion-inspired Design
    details: Carefully crafted components that match Notion's visual style and user experience
  - icon: 🌙
    title: Dark Mode Support
    details: Built-in dark mode with seamless theme switching for better accessibility
  - icon: 🎯
    title: TypeScript Support
    details: Fully typed components with excellent IntelliSense and type safety
  - icon: 📦
    title: Tree Shaking
    details: Optimized bundle size with ES modules and tree-shakeable exports
  - icon: 🚀
    title: Tailwind CSS
    details: Utility-first CSS framework integration with custom design tokens
  - icon: ♿
    title: Accessibility
    details: WCAG compliant components with proper ARIA attributes and keyboard navigation
---

## Installation

```bash
npm install notion-design-system
```

## Quick Start

```jsx
import { Button, Card, Typography } from 'notion-design-system';
import 'notion-design-system/dist/index.css';

function App() {
  return (
    <div>
      <Typography variant="h1">Hello Notion Design System!</Typography>
      <Card>
        <Card.Content>
          <Typography variant="body1">
            This is a beautiful card component!
          </Typography>
        </Card.Content>
      </Card>
      <Button variant="primary">Get Started</Button>
    </div>
  );
}
```

## Live Examples

<div class="component-preview">
  <iframe src="/preview/button" width="100%" height="200" frameborder="0"></iframe>
</div>
