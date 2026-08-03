/**
 * @name browser-directives
 * @description Browser directives in ngx-responsive
 *
 * @license MIT
 */
import { Directive, Input, TemplateRef, ViewContainerRef, ChangeDetectorRef , input } from '@angular/core';

import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { RESPONSIVE_BASE } from '../../@core/providers/responsive-base/responsive-base';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';

@Directive(
{
    selector: '[isChrome]'
})
export class IsChromeDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'chrome';
    protected _showWhenTrue = true;
    readonly isChrome = input<string[] | string>();

    protected override configure(): void {
        this.setGrid( this._state, 'browser' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 platformService: PlatformService
        ) {
        super( templateRef, viewContainer, _responsiveState, cd, platformService );
    }
}

@Directive({
    selector: '[isFirefox]'
})

export class IsFirefoxDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'firefox';
    protected _showWhenTrue = true;
    readonly isFirefox = input<string[] | string>();

    protected override configure(): void {
        this.setGrid( this._state, 'browser' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 platformService: PlatformService
        ) {
        super( templateRef, viewContainer, _responsiveState, cd, platformService );
    }
}

@Directive(
{
    selector: '[isSafari]'
})
export class IsSafariDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'safari';
    protected _showWhenTrue = true;
    readonly isSafari = input<string[] | string>();

    protected override configure(): void {
        this.setGrid( this._state, 'browser' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 platformService: PlatformService
        ) {
        super( templateRef, viewContainer, _responsiveState, cd, platformService );
    }
}

@Directive(
{
    selector: '[isOpera]'
})
export class IsOperaDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'opera';
    protected _showWhenTrue = true;
    readonly isOpera = input<string[] | string>();

    protected override configure(): void {
        this.setGrid( this._state, 'browser' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 platformService: PlatformService
        ) {
        super( templateRef, viewContainer, _responsiveState, cd, platformService );
    }
}

@Directive(
{
    selector: '[showItBrowser]'
})
export class ShowItBrowserDirective extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = true;
    readonly showItBrowser = input<string[] | string>();

    protected override configure(): void {
        this.setGrid( this.showItBrowser(), 'browser' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 platformService: PlatformService
        ) {
        super( templateRef, viewContainer, _responsiveState, cd, platformService );
    }
}

@Directive(
{
    selector: '[hideItBrowser]'
})
export class HideItBrowserDirective extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = false;
    readonly hideItBrowser = input<string[] | string>();

    protected override configure(): void {
        this.setGrid( this.hideItBrowser(), 'browser' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 platformService: PlatformService
        ) {
        super( templateRef, viewContainer, _responsiveState, cd, platformService );
    }
}
