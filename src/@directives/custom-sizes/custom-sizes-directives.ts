/**
 * @name custom-sizes.directives
 * @description Custom sizes directives in ngx-responsive
 *
 * @license MIT
 */
import { Directive, Input, TemplateRef, ViewContainerRef, ChangeDetectorRef , input } from '@angular/core';
import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { RESPONSIVE_BASE } from '../../@core/providers/responsive-base/responsive-base';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';
@Directive(
{
    selector: '[showItSizes]'
})
export class ShowItSizesDirective extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = true;

    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 platformService: PlatformService
        ) {
        super( templateRef, viewContainer, _responsiveState, cd, platformService );
    }
     readonly showItSizes = input<any>();

    protected override configure(): void {
        this.setGrid(this.showItSizes(), 'sizes');
    }
}

@Directive(
{
    selector: '[hideItSizes]'
})
export class HideItSizesDirective extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = false;

    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 platformService: PlatformService
        ) {
        super( templateRef, viewContainer, _responsiveState, cd, platformService );
    }

    readonly hideItSizes = input<any>();

    protected override configure(): void {
        this.setGrid( this.hideItSizes(), 'sizes' );
    }
}
