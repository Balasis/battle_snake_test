module.exports = {
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    testEnvironment: 'node', // You can specify your environment here (e.g., 'node' or 'jsdom')
  };