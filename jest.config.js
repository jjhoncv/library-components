module.exports = {
  setupFiles: [
    "<rootDir>/src/config/jest/test-setup"
  ],
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [
    '**/src/**/*.(test|spec).(jsx|tsx|js|ts)'
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    'jsx',
    'json',
    'node'
  ],
  testEnvironment: 'node'
}
