import { test, expect } from '@playwright/test';
// import { PlaywrightPage } from './playwright-page';
import { Authorization } from './authorization';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// test.only('user can search through the documentation', async ({ page }) => {
//   const playwrightPage = new PlaywrightPage(page);
//   await playwrightPage.load();

//   await playwrightPage.searchButton.click();
//   await playwrightPage.searchInput.fill('Fixtures');

//   await expect(playwrightPage.searchHitsGroup).toHaveCount(1);
// });

test.only('user authorization', async ({ page }) => {
  const auth = new Authorization(page);
  await auth.load();

  await auth.logInput.click();
  await auth.logInput.fill('Oliver.conner@gmail.com');

  await auth.passInput.click();
  await auth.passInput.fill('qwerty123');

  await auth.submitBtn.click();
});

