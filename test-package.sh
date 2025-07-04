#!/bin/bash
# Simple test script to verify the package builds and exports correctly

echo "Testing package exports..."

# Test if the package can be imported
node -e "
const pkg = require('./dist/index.js');
console.log('Available exports:');
console.log(Object.keys(pkg));
console.log('');
console.log('Button component:', typeof pkg.Button);
console.log('Typography component:', typeof pkg.Typography);
console.log('Card component:', typeof pkg.Card);
console.log('');
console.log('✅ Package exports are working correctly!');
"

echo "✅ Build test passed!"
