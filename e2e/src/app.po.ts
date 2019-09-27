import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getParagraphText() {
    return element(by.css('app-root mat-sidenav-container')).getText() as Promise<string>;
  }

  fillInfo() {
    element(by.id('mat-input-0')).sendKeys('dev');
    element(by.id('mat-input-1')).sendKeys('dev');
    element(by.buttonText('登录')).click();
    return browser.takeScreenshot();
  }
}
