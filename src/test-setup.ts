import { getTestBed } from '@angular/core/testing';
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';

// Zoneless test environment — no zone.js. The library drives change detection
// via markForCheck(), so it works without Zone.js (see the *.zoneless.spec.ts).
getTestBed().initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
