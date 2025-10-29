const { test, expect } = require('@playwright/test');

test('open google.com in Chrome', async ({ page }) => {
  
  await page.goto('https://www.google.com');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveTitle(/Google/i);
  
  console.log('Successfully opened google.com in Chrome');
});
