/**
 * @name orientation-info.directive
 * @description Device orientation directive in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, Directive, Output, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef , output } from '@angular/core';

import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { OrientationInfo } from './orientation-info';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

@Directive({ selector: 'orientation-info' })
export class OrientationInfoDirective extends OrientationInfo implements OnInit, OnDestroy {
    readonly orientation = output<any>();
    constructor(protected _responsiveState: ResponsiveState,
        protected viewContainer: ViewContainerRef,
        protected cd: ChangeDetectorRef,
        platformService: PlatformService
    ) { super(_responsiveState, platformService); }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    protected _updateData(value: any) {
        this.orientation.emit(value);
        this.cd.markForCheck();
    }
}
