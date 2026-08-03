
/**
 * @name browser-info.directive
 * @description Browser info directive in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, Directive, Input, Output, OnInit, OnDestroy, ChangeDetectorRef , output , input } from '@angular/core';

import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { BrowserInfo } from './browser-info';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

@Directive({
    selector: 'browser-info'
})
export class BrowserInfoDirective extends BrowserInfo implements OnInit, OnDestroy {
    readonly browser = output<any>();
    readonly browserInfo = input<string[] | string>();
    constructor(public _responsiveState: ResponsiveState,
        private cd: ChangeDetectorRef,
        protected platformService: PlatformService
    ) { super(_responsiveState, platformService); }

    ngOnInit(): void {
        this.connect();
    }
    ngOnDestroy(): void {
        this.disconnect();
    }
    protected _updateData(value: any) {
        this.browser.emit(value);
        this.cd.markForCheck();
    }
}
