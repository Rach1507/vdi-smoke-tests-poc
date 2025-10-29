const { test, expect } = require('@playwright/test');

test('hello world test', async () => {
  console.log('Hello World');
  
  // Simple assertion to make the test pass
  const message = 'Hello World';
  expect(message).toBe('Hello World');
});
