import { Component, provideZonelessChangeDetection, Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { XlDirective } from './bootstrap/bootstrap-directives';
import { IsMobileDirective, IsPortraitDirective, IsLandscapeDirective, IsIphoneDirective } from './devices/devices-directives';
import { IsRetinaDirective } from './pixelratio/pixelratio-directives';
import { ResponsiveState } from '../@core/providers/responsive-state/responsive-state';
import { PlatformService } from '../@core/providers/platform-service/platform.service';

// One host per directive family — proves each show/hide pattern reacts to its
// ResponsiveState observable and toggles the view under zoneless CD.
@Component({ imports: [XlDirective], template: `<div *xl>M</div>` })
class BootstrapHost {}
@Component({ imports: [IsMobileDirective], template: `<div *isMobile>M</div>` })
class DeviceHost {}
@Component({ imports: [IsRetinaDirective], template: `<div *isRetina>M</div>` })
class PixelHost {}
@Component({ imports: [IsPortraitDirective], template: `<div *isPortrait>M</div>` })
class OrientationHost {}
@Component({ imports: [IsLandscapeDirective], template: `<div *isLandscape>M</div>` })
class LandscapeHost {}
@Component({ imports: [IsIphoneDirective], template: `<div *isIphone>M</div>` })
class StandardHost {}

interface Family {
  name: string;
  host: Type<unknown>;
  observable: 'elemento$' | 'device$' | 'pixel$' | 'orientation$' | 'standard$';
  match: string;
  other: string;
}

const FAMILIES: Family[] = [
  { name: 'bootstrap (*xl)',        host: BootstrapHost,   observable: 'elemento$',    match: 'xl',       other: 'lg' },
  { name: 'device (*isMobile)',     host: DeviceHost,      observable: 'device$',      match: 'mobile',   other: 'desktop' },
  { name: 'pixelratio (*isRetina)', host: PixelHost,       observable: 'pixel$',       match: 'retina',   other: '1x' },
  { name: 'orientation (*isPortrait)', host: OrientationHost, observable: 'orientation$', match: 'portrait', other: 'landscape' },
  { name: 'orientation (*isLandscape)', host: LandscapeHost, observable: 'orientation$', match: 'landscape', other: 'portrait' },
  { name: 'standard (*isIphone)',   host: StandardHost,    observable: 'standard$',    match: 'iphone',   other: 'ipad' },
];

describe('Structural directive families (zoneless)', () => {
  let state: Record<string, Subject<string>>;

  beforeEach(() => {
    state = {
      elemento$: new Subject<string>(),
      device$: new Subject<string>(),
      pixel$: new Subject<string>(),
      orientation$: new Subject<string>(),
      standard$: new Subject<string>(),
    };
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        { provide: ResponsiveState, useValue: state },
        { provide: PlatformService, useValue: { isEnabledForPlatform: () => true } },
      ],
    });
  });

  for (const f of FAMILIES) {
    it(`${f.name} shows on a matching value and hides otherwise`, () => {
      const fixture = TestBed.createComponent(f.host);
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).not.toContain('M');

      state[f.observable].next(f.match);
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toContain('M');

      state[f.observable].next(f.other);
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).not.toContain('M');
    });
  }
});
