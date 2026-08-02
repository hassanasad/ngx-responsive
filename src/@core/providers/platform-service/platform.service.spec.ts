import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { PlatformService } from './platform.service';
import { ResponsiveConfig } from '../responsive-config/responsive-config';

const breakPoints = {
  xs: { max: 575 },
  sm: { min: 576, max: 767 },
  md: { min: 768, max: 991 },
  lg: { min: 992, max: 1199 },
  xl: { min: 1200, max: 1399 },
  xxl: { min: 1400 },
};

// Build the service with an explicit platform + config so each scenario is
// isolated (the module is configured *after* the values are chosen).
function createService(platformId: 'browser' | 'server', renderOnServer: boolean): PlatformService {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({
    providers: [
      PlatformService,
      { provide: PLATFORM_ID, useValue: platformId },
      {
        provide: ResponsiveConfig,
        useValue: { config: { breakPoints, debounceTime: 100, renderOnServer } } as ResponsiveConfig,
      },
    ],
  });
  return TestBed.inject(PlatformService);
}

describe('PlatformService', () => {
  describe('isEnabledForPlatform', () => {
    it('is enabled when in a browser and renderOnServer is true', () => {
      expect(createService('browser', true).isEnabledForPlatform()).toBe(true);
    });

    it('is enabled when NOT in a browser but renderOnServer is true', () => {
      expect(createService('server', true).isEnabledForPlatform()).toBe(true);
    });

    it('is enabled when in a browser and renderOnServer is false', () => {
      expect(createService('browser', false).isEnabledForPlatform()).toBe(true);
    });

    it('is NOT enabled when NOT in a browser and renderOnServer is false', () => {
      expect(createService('server', false).isEnabledForPlatform()).toBe(false);
    });
  });
});
