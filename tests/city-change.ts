import { Locator, Page } from '@playwright/test';

export class CityPage {
  constructor(page: Page, url = 'http://localhost:5173/') {
    this.url = url;
    this.page = page;
    this.paris = this.page.getByTestId('Paris');
    this.cologne = this.page.getByTestId('Cologne');
    this.brussels = this.page.getByTestId('Brussels');
    this.amsterdam = this.page.getByTestId('Amsterdam');
    this.hamburg = this.page.getByTestId('Hamburg');
    this.dusseldorf = this.page.getByTestId('Dusseldorf');
  }

  private readonly url: string;
  private readonly page: Page;

  public readonly paris: Locator;
  public readonly cologne: Locator;
  public readonly brussels: Locator;
  public readonly amsterdam: Locator;
  public readonly hamburg: Locator;
  public readonly dusseldorf: Locator;

  public async load(): Promise<void> {
    await this.page.goto(this.url);
  }
}
