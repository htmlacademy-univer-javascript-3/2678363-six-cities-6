import { Locator, Page } from '@playwright/test';

export class AuthorizationPage {
  constructor(page: Page, url = 'http://localhost:5173/login') {
    this.url = url;
    this.page = page;
    this.logInput = this.page.getByTestId('login');
    this.passInput = this.page.getByTestId('password');
    this.submitBtn = this.page.getByTestId('submit');
  }

  private readonly url: string;

  private readonly page: Page;

  public readonly logInput: Locator;

  public readonly passInput: Locator;

  public readonly submitBtn: Locator;

  public async load(): Promise<void> {
    await this.page.goto(this.url);
  }

  public async inputLogin(): Promise<void> {
    await this.logInput.click();
    await this.logInput.fill('oliver.conner@gmail.com');
  }

  public async inputPassword(): Promise<void> {
    await this.passInput.click();
    await this.passInput.fill('qwerty123');
  }
}
