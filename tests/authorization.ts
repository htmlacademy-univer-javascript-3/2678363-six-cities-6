import { Locator, Page } from '@playwright/test';

export class Authorization {
  constructor(page: Page, url = 'http://localhost:5173/login') {
    this.url = url;
    this.page = page;
    this.logInput = this.page.locator('#login__input');
    this.passInput = this.page.locator('#password__input');
    this.submitBtn = this.page.locator('.login__submit');
  }

  private readonly url: string;

  private readonly page: Page;

  public readonly logInput: Locator;

  public readonly passInput: Locator;

  public readonly submitBtn: Locator;

  public async load(): Promise<void> {
    await this.page.goto(this.url);
  }
}
