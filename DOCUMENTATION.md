# Documentation

This project uses **Storybook** for interactive component documentation and is automatically deployed to GitHub Pages.

## 📚 Live Documentation

Visit our live documentation at: **https://shade-solutions.github.io/notion-design-system/**

## 🚀 Documentation Features

- **Interactive Component Previews**: See all components in action
- **Dark/Light Theme Toggle**: Test components in both themes
- **Responsive Design**: Preview components on different screen sizes
- **Code Examples**: Copy-paste ready code snippets
- **Props Documentation**: Complete API reference for each component
- **Design Tokens**: Colors, typography, and spacing documentation

## 🛠️ Development

### Running Storybook Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run storybook
# or
npm run docs:dev

# Build for production
npm run build-storybook
# or
npm run docs:build

# Serve built documentation
npm run docs:serve
```

### Adding New Stories

1. Create a new story file in the component directory:
   ```
   src/components/YourComponent/YourComponent.stories.tsx
   ```

2. Follow the existing story structure:
   ```typescript
   import type { Meta, StoryObj } from '@storybook/react';
   import { YourComponent } from './YourComponent';

   const meta: Meta<typeof YourComponent> = {
     title: 'Components/YourComponent',
     component: YourComponent,
     parameters: {
       layout: 'centered',
     },
     tags: ['autodocs'],
   };

   export default meta;
   type Story = StoryObj<typeof meta>;

   export const Default: Story = {
     args: {
       // your props here
     },
   };
   ```

3. The story will automatically appear in the Storybook sidebar.

## 🔧 Configuration

### Storybook Configuration

- **Main Config**: `.storybook/main.ts` - Addons and framework configuration
- **Preview Config**: `.storybook/preview.ts` - Global decorators and parameters
- **Theme Config**: `.storybook/theme.ts` & `.storybook/theme-dark.ts` - Custom themes
- **Manager Config**: `.storybook/manager.ts` - Storybook UI customization

### GitHub Pages Deployment

The documentation is automatically deployed via GitHub Actions whenever code is pushed to the `main` branch. The workflow is defined in `.github/workflows/deploy-storybook.yml`.

## 🎨 Customization

### Adding New Design Tokens

1. Add new color stories in `src/stories/Colors.stories.tsx`
2. Update the Tailwind configuration in `tailwind.config.js`
3. Document the new tokens in the Colors story

### Custom Themes

To modify the Storybook theme, edit:
- `.storybook/theme.ts` (light theme)
- `.storybook/theme-dark.ts` (dark theme)

## 📝 Alternative Documentation

While Storybook is the primary documentation, VitePress configuration is also available in the `docs/` directory for static documentation needs.

## 🌐 URLs

- **Live Documentation**: https://shade-solutions.github.io/notion-design-system/
- **GitHub Repository**: https://github.com/shade-solutions/notion-design-system
- **NPM Package**: https://www.npmjs.com/package/notion-design-system

## 🤝 Contributing

When contributing new components:

1. Create the component with proper TypeScript types
2. Add comprehensive stories with all variants
3. Include accessibility considerations
4. Test in both light and dark themes
5. Update documentation as needed

The documentation will automatically update when your changes are merged to `main`.
