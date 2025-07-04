# Publishing Guide for Notion Design System

## Prerequisites

1. **npm Account**: Make sure you have an npm account at [npmjs.com](https://www.npmjs.com/)
2. **npm CLI**: Install npm CLI and login to your account
3. **Git**: Ensure your changes are committed and pushed to GitHub

## Steps to Publish

### 1. Login to npm
```bash
npm login
```
Enter your npm username (`sh20raj`), password, and email when prompted.

### 2. Verify Your Login
```bash
npm whoami
```
This should return `sh20raj`.

### 3. Build the Package
```bash
npm run build
```
This will create the `dist` folder with all the compiled files.

### 4. Test the Package Locally (Optional)
```bash
npm pack
```
This creates a `.tgz` file that you can test locally in another project.

### 5. Publish to npm
```bash
npm publish --access public
```
Since this is a scoped package (`@sh20raj/notion-design-system`), you need the `--access public` flag.

### 6. Verify Publication
Check your package at: `https://www.npmjs.com/package/@sh20raj/notion-design-system`

## Version Management

### Update Version
```bash
# For patch updates (bug fixes)
npm version patch

# For minor updates (new features)
npm version minor

# For major updates (breaking changes)
npm version major
```

### Publish New Version
```bash
npm publish --access public
```

## GitHub Release (Optional)

1. Go to https://github.com/shade-solutions/notion-design-system/releases
2. Click "Create a new release"
3. Create a new tag (e.g., `v1.0.0`)
4. Add release notes
5. Publish the release

## Troubleshooting

### Package Name Already Exists
If you get an error about the package name already existing, you might need to:
1. Choose a different package name
2. Use a scoped package name (which we're already doing)

### Permission Issues
Make sure you're logged in with the correct npm account:
```bash
npm logout
npm login
```

### Build Errors
If the build fails, check:
1. All dependencies are installed: `npm install`
2. TypeScript files compile correctly
3. No syntax errors in the code

## Post-Publication

### Update Documentation
- Update README.md with the correct installation instructions
- Update any example projects or documentation sites

### Announce
- Share on social media
- Update project documentation
- Notify users of the new package

## Automated Publishing (Future)

Consider setting up GitHub Actions for automated publishing:
1. Create `.github/workflows/publish.yml`
2. Set up npm token in GitHub secrets
3. Automate publishing on version tags
