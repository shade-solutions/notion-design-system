# Notion Design System

A comprehensive React component library inspired by Notion's clean and intuitive design language. Built with TypeScript, Tailwind CSS, and Storybook.

## ✨ Features

- 🎨 **Complete Component Library** - Buttons, inputs, typography, cards, badges, and more
- 🏗️ **Notion-Specific Components** - Blocks, sidebar navigation, and page layouts
- 🌙 **Dark Mode Support** - Seamless light and dark theme switching
- 📱 **Responsive Design** - Mobile-first approach with responsive components
- ♿ **Accessibility** - WCAG compliant with keyboard navigation and screen reader support
- 🔧 **TypeScript** - Full type safety and excellent developer experience
- 📚 **Storybook** - Comprehensive documentation and interactive examples
- 🎯 **Customizable** - Easy theming with CSS custom properties

## 🚀 Quick Start

### Installation

```bash
npm install notion-design-system
# or
yarn add notion-design-system
# or
pnpm add notion-design-system
```

### Basic Usage

```tsx
import { Button, Typography, Card } from 'notion-design-system';
import 'notion-design-system/dist/styles.css';

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