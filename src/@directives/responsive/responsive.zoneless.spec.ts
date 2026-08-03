import { Component, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { ResponsiveDirective } from './responsive';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

@Component({
  imports: [ResponsiveDirective],
  template: `<div *responsive="{ bootstrap: 'sm' }">SM</div>`,
})
class HostComponent {}

// Validates the effect-driven conversion of the main [responsive] directive:
// setting the `responsive` signal input triggers init_responsive() (subscribes to
// elemento$), and breakpoint emissions show/hide the view under zoneless CD.
describe('ResponsiveDirective (zoneless)', () => {
  let elemento$: Subject<string>;

  beforeEach(() => {
    elemento$ = new Subject<string>();
    TestBed.configureTestingModule({
      imports: [HostComponent],
      providers: [
        provideZonelessChangeDetection(),
        { provide: ResponsiveState, useValue: { elemento$, getWidth: () => 0 } },
        { provide: PlatformService, useValue: { isEnabledForPlatform: () => true } },
      ],
    });
  });

  it('shows content when the current bootstrap breakpoint matches the config', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges(); // effect runs init_responsive() -> subscribes to elemento$
    expect(fixture.nativeElement.textContent).not.toContain('SM');

    elemento$.next('sm');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('SM');

    elemento$.next('lg');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).not.toContain('SM');
  });
});
