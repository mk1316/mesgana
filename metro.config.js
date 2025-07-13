// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Enable package exports for web support with import.meta
config.resolver.unstable_enablePackageExports = true;

module.exports = config;