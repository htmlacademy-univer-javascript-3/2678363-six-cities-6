import { Locator, Page } from '@playwright/test';
import { SortType } from '../src/types/sorting';

export class SortingPage {
  constructor(page: Page, url = 'http://localhost:5173/') {
    this.url = url;
    this.page = page;
    this.sortingBtn = this.page.getByTestId('sorting-btn');
    this.firstSort = this.page.getByTestId(SortType.Popular);
    this.secondSort = this.page.getByTestId(SortType.PriceLowToHigh);
    this.thirdSort = this.page.getByTestId(SortType.PriceHighToLow);
    this.fourthSort = this.page.getByTestId(SortType.TopRatedFirst);
    this.offersList = this.page.getByTestId('offers-list');
  }

  private readonly url: string;
  private readonly page: Page;

  public readonly sortingBtn: Locator;
  public readonly firstSort: Locator;
  public readonly secondSort: Locator;
  public readonly thirdSort: Locator;
  public readonly fourthSort: Locator;
  public readonly offersList: Locator;

  public async load(): Promise<void> {
    await this.page.goto(this.url);
  }

  public async sortByPopular(): Promise<void> {
    await this.sortingBtn.click();
    await this.firstSort.click();
  }

  public async sortByPriceLowToHigh(): Promise<void> {
    await this.sortingBtn.click();
    await this.secondSort.click();
  }

  public async sortByPriceHighToLow(): Promise<void> {
    await this.sortingBtn.click();
    await this.thirdSort.click();
  }

  public async sortByTopRated(): Promise<void> {
    await this.sortingBtn.click();
    await this.fourthSort.click();
  }

  public async getOfferPrices(): Promise<number[]> {
    const priceElements = this.offersList.locator('.place-card__price-value');
    const prices = await priceElements.allTextContents();
    return prices.map((price) => parseInt(price.replace('€', ''), 10));
  }

  public async getOfferRatings(): Promise<number[]> {
    const ratingElements = this.offersList.locator('.place-card__rating-value');
    const ratings = await ratingElements.allTextContents();
    return ratings.map((rating) => parseFloat(rating));
  }
}
