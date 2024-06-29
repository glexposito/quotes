module.exports = {
  rootDir: process.cwd(),
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transformIgnorePatterns: [],
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ["spec"],
  transform: {
    '.*\\.(tsx?|jsx?)$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  }
};

export {};
