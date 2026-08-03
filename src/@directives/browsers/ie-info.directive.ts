/**
 * @name ie-info.directives
 * @description IE Info directives in ngx-responsive
 *
 * @license MIT
 */
import { EventEmitter, Directive, Input, Output, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef , output , input } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { Subscription } from 'rxjs';

import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { IeInfo } from './ie-info';

@Directive({ selector: 'ie-info' })
export class IeInfoDirective extends IeInfo implements OnInit, OnDestroy {
    readonly ieInfo = input<string[] | string>();
    readonly ieVersion = output<any>();
    constructor(public _responsiveState: ResponsiveState,
        private viewContainer: ViewContainerRef,
        private cd: ChangeDetectorRef,
        @Inject(PLATFORM_ID) protected _platformId: Object
    ) { super(_responsiveState, _platformId); }
    ngOnInit() {
        this.connect();
    }
    ngOnDestroy() {
        this.disconnect();
    }
    protected _updateData(value: any) {
        this.ieVersion.emit(value);
        this.cd.markForCheck();
    }
}
