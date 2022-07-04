// @ts-check
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/__tests__/setup-tests.ts'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
	},
	testMatch: ['**/*.test.{js,jsx,ts,tsx}'],
	moduleNameMapper: {
		'^~atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
		'^~organisms/(.*)$': '<rootDir>/src/components/organisms/$1',
		'^~molecules/(.*)$': '<rootDir>/src/components/molecules/$1',
		'^~templates/(.*)$': '<rootDir>/src/components/templates/$1',
		'^~icons/(.*)$': '<rootDir>/src/components/icons/$1',
		'^~(.*)$': '<rootDir>/src/$1',
	},
	collectCoverageFrom: [
		'**/*.{ts,tsx}',
		'!**/pages/_app.tsx',
		'!**/pages/_document.tsx',
		'!**/index.ts',
		'!**/*.d.ts',
		'!**/node_modules/**',
		'!coverage/**',
		'!**/.next/**',
		'!**/utils/constants.ts',
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
};
