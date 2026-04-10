import { test, expect } from '@playwright/test';
import { AuthorizationPage } from './authorization';
import { SortingPage } from './sorting';
import { CityPage } from './city-change';

test('user authorization', async ({ page }) => {
  const auth = new AuthorizationPage(page);
  await auth.load();

  await auth.inputLogin();
  await auth.inputPassword();
  await auth.submitBtn.click();

  await expect(page).toHaveURL('http://localhost:5173/');
  await expect(page.getByTestId('user-email')).toContainText('oliver.conner@gmail.com');
});

test('offers sorting', async ({ page }) => {
  const sort = new SortingPage(page);
  await sort.load();

  // Проверка отображения опций сортировки
  await sort.sortingBtn.click();
  await expect(sort.firstSort).toBeVisible();
  await expect(sort.secondSort).toBeVisible();
  await expect(sort.thirdSort).toBeVisible();
  await expect(sort.fourthSort).toBeVisible();
  await sort.sortingBtn.click();

  const originalPrices = await sort.getOfferPrices();

  // Сортировка по возрастанию цены
  await sort.sortByPriceLowToHigh();
  const prices = await sort.getOfferPrices();
  expect(prices).toEqual([...prices].sort((a: number, b: number) => a - b));

  // Сортировка по убыванию цены
  await sort.sortByPriceHighToLow();
  const pricesAfter = await sort.getOfferPrices();
  expect(pricesAfter).toEqual([...pricesAfter].sort((a: number, b: number) => b - a));

  // Сортировка по рейтингу
  await sort.sortByTopRated();
  const ratings = await sort.getOfferRatings();
  const expectedSorted = [...ratings].sort((a: number, b: number) => b - a);
  expect(ratings).toEqual(expectedSorted);

  // Сортировка по популярности
  await sort.sortByPopular();
  const pricesAfterPopularSort = await sort.getOfferPrices();
  expect(pricesAfterPopularSort).toEqual(originalPrices);
});

test('changing cities', async ({ page }) => {
  const city = new CityPage(page);
  await city.load();

  const cities = [
    {name: 'Paris', locator: city.paris},
    {name: 'Cologne', locator: city.cologne},
    {name: 'Brussels', locator: city.brussels},
    {name: 'Amsterdam', locator: city.amsterdam},
    {name: 'Hamburg', locator: city.hamburg},
    {name: 'Dusseldorf', locator: city.dusseldorf}
  ];

  let previousCity = cities[0];
  await expect(previousCity.locator).toHaveClass(/tabs__item--active/);

  for (let i = 1; i < cities.length; i++) {
    const currentCity = cities[i];
    await currentCity.locator.click();

    await expect(currentCity.locator).toHaveClass(/tabs__item--active/);
    await expect(previousCity.locator).not.toHaveClass(/tabs__item--active/);

    previousCity = currentCity;
  }
});
