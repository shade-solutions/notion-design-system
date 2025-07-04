#!/bin/bash

# Deploy Notion Design System Documentation to Surge.sh
# Usage: ./deploy.sh

echo "🚀 Deploying Notion Design System Documentation..."

# Check if surge is installed
if ! command -v surge &> /dev/null; then
    echo "❌ Surge CLI not found. Installing..."
    npm install -g surge
fi

# Build Storybook
echo "📦 Building Storybook..."
npm run build-storybook

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Aborting deployment."
    exit 1
fi

# Deploy to Surge
echo "🌐 Deploying to Surge.sh..."
cd storybook-static
surge --domain notion-design-system.surge.sh

# Check if deployment was successful
if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌍 Live at: https://notion-design-system.surge.sh"
else
    echo "❌ Deployment failed."
    exit 1
fi
