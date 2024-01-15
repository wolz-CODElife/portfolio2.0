import { test, expect } from '@playwright/test';

test('Checkly Docs', async ({ page }) => {
  const response = await page.goto('https://www.checklyhq.com/docs/browser-checks/');
  
  // Ensure the page is loaded successfully
  expect(response?.status()).toBeLessThan(400);

  // Check if the page title is as expected
  const pageTitle = await page.title();
  const expectedTitle = 'Getting started | Checkly';
  expect(pageTitle).toBe(expectedTitle);

  // Optionally, you can take a screenshot if needed
  await page.screenshot({ path: 'homepage.jpg' });
});
