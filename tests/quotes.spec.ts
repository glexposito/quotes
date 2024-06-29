import { test, expect } from '@playwright/test';

test.describe('Quotes Page', () => {

  // Run before each test
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.URL as string);
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Quotes/);
  });

  test('get quote section', async ({ page }) => {
    const leadSection = await page.waitForSelector('.lead', { timeout: 20000 });
    
    expect(leadSection).toBeDefined();
  });

  test('quote section has content', async ({ page }) => {
    const leadSection = await page.waitForSelector('.lead', { timeout: 20000 });
    
    const textContent = await leadSection.textContent();
    expect(textContent).not.toBeNull();
    expect(textContent).not.toBe('');
  });

});