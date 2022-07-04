/** @type {import('next').NextConfig} */

const BUNDLE_ANALYZER_ENABLED = process.env.BUNDLE_ANALYZER_ENABLED === 'true';

const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: BUNDLE_ANALYZER_ENABLED,
});

module.exports = withBundleAnalyzer(nextConfig);
