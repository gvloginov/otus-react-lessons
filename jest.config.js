// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom", /* "node" */
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  setupFilesAfterEnv: ['<rootDir>/settings/JestSetup.js'],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/settings/__mocks__/styleMock.js",
    '^@/(.*)$': '<rootDir>/src/$1',
  },    
};
