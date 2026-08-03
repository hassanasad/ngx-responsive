import { Component, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { ShowItBrowserDirective } from './browsers-directives';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

@Component({
  imports: [ShowItBrowserDirective],
  template: `<div *showItBrowser="'chrome'">CHROME</div>`,
})
class HostComponent {}

// Proves the library's reactivity works with NO Zone.js: the directive reacts to
// ResponsiveState emissions and toggles the view via markForCheck / ViewContainerRef,
// driven purely by Angular's zoneless scheduler.
describe('Browser directives (zoneless)', () => {
  let browser$: Subject<string>;

  beforeEach(() => {
    browser$ = new Subject<string>();
    TestBed.configureTestingModule({
      imports: [HostComponent],
      providers: [
        provideZonelessChangeDetection(),
        { provide: ResponsiveState, useValue: { browser$ } },
        { provide: PlatformService, useValue: { isEnabledForPlatform: () => true } },
      ],
    });
  });

  it('shows and hides content as the detected browser changes', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges(); // sets the input (setGrid) and runs ngOnInit (subscribes)
    expect(fixture.nativeElement.textContent).not.toContain('CHROME');

    // A resize/detection emission from ResponsiveState — the directive reacts and
    // creates the embedded view imperatively + markForCheck, no Zone.js involved.
    browser$.next('chrome');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('CHROME');

    browser$.next('firefox');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).not.toContain('CHROME');
  });
});
