/**
 * @name browsers
 * @description browsers module in ngx-responsive
 *
 * @license MIT
 */
import { Provider } from '@angular/core';
import {
  IsChromeDirective,
  IsFirefoxDirective,
  IsSafariDirective,
  IsOperaDirective,
  ShowItBrowserDirective,
  HideItBrowserDirective,
} from './browsers-directives';
import { BrowserInfoRx } from './browser-info.rx';
import { BrowserInfoDirective } from './browser-info.directive';

export const BROWSER_DIRECTIVES: Provider[] = [
  IsChromeDirective,
  IsFirefoxDirective,
  IsSafariDirective,
  IsOperaDirective,
  ShowItBrowserDirective,
  HideItBrowserDirective,
  BrowserInfoDirective
];

export const BROWSER_INFO_RX: Provider[] = [BrowserInfoRx];
export * from './browsers-directives';
export * from './browser-info.rx';
export * from './browser-info.directive';
