const { test } = require('@playwright/test');

test('hello world test', async () => {
  console.log('Hello World');
  
  // Simple assertion to make the test pass
  const message = 'Hello World';
  if (message !== 'Hello World') {
    throw new Error('Test failed');
  }
});
