module.exports = {
    rootDir: '.',
    
    testMatch: ['<rootDir>/src/**/__tests__/**/*.js', '<rootDir>/src/**/*.test.js'],
  
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  
    transformIgnorePatterns: ['node_modules/(?!(react-native)/)'],
  
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage',
    coverageReporters: ['lcov', 'text-summary'],
    
    coverageThreshold: {
      global: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
  
  };
  