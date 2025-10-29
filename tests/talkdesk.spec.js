const { test, expect } = require('@playwright/test');

test('open talkdesk.com in Chrome', async ({ page }) => {
  // Navigate to talkdesk.com
  await page.goto('https://www.talkdesk.com');
  
  // Wait for the page to load
  await page.waitForLoadState('networkidle');
  
  // Verify the page title contains "Talkdesk"
  await expect(page).toHaveTitle(/Talkdesk/i);
  
  console.log('Successfully opened talkdesk.com in Chrome');
});
