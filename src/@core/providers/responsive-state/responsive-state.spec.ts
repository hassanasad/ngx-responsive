import { ResponsiveState } from './responsive-state';
import { ResponsiveConfig } from '../responsive-config';
import { PlatformService } from '../platform-service/platform.service';
import { IResponsiveConfig } from '../../interfaces';

const config: IResponsiveConfig = {
  breakPoints: {
    xs: { max: 575 },
    sm: { min: 576, max: 767 },
    md: { min: 768, max: 991 },
    lg: { min: 992, max: 1199 },
    xl: { min: 1200, max: 1399 },
    xxl: { min: 1400 },
  },
  debounceTime: 100,
  renderOnServer: false,
};

describe('ResponsiveState', () => {
  let responsiveState: ResponsiveState;

  beforeEach(() => {
    const responsiveConfig = new ResponsiveConfig(config);
    // Disabled platform so the constructor skips the window event wiring (jsdom-safe).
    const platformService = { isEnabledForPlatform: () => false } as PlatformService;
    responsiveState = new ResponsiveState(platformService, responsiveConfig);
  });

  it('should create', () => {
    expect(responsiveState).toBeTruthy();
  });

  it('getWidth returns 0 when the platform is disabled', () => {
    expect(responsiveState.getWidth('window')).toBe(0);
  });
});
