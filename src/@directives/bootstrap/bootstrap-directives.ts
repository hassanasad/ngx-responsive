/**
 *  @name bootstrap.directives
 *  @description bootstrap directives
 *  @license MIT
 */
import { Directive, Input, TemplateRef, ViewContainerRef, ChangeDetectorRef , input } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';

import { ResponsiveState } from '../../@core/providers/responsive-state/responsive-state';
import { RESPONSIVE_BASE } from '../../@core/providers/responsive-base/responsive-base';
import { PlatformService } from '../../@core/providers/platform-service/platform.service';
@Directive({
    selector: '[xxl]'
})
export class XxlDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'xxl';
    protected _showWhenTrue = true;
    
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 platformService: PlatformService
    ) {

        super ( templateRef, viewContainer, _responsiveState, cd, platformService );
        this.setGrid(this._state, 'bootstrap');
    }
}

@Directive({
    selector: '[xl]'
})
export class XlDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'xl';
    protected _showWhenTrue = true;
    
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 platformService: PlatformService
    ) {

        super ( templateRef, viewContainer, _responsiveState, cd, platformService );
        this.setGrid(this._state, 'bootstrap');
    }
}

@Directive(
{
    selector: '[lg]'
})
export class LgDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'lg';
    protected _showWhenTrue = true;
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 platformService: PlatformService
    ) {
        super( templateRef, viewContainer, _responsiveState, cd, platformService );
        this.setGrid( this._state, 'bootstrap' );
    }
}
@Directive(
{
    selector: '[md]'
})
export class MdDirective extends RESPONSIVE_BASE<any> {
    protected _state = 'md';
    protected _showWhenTrue = true;
    
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 platformService: PlatformService
    ) {
        super( templateRef, viewContainer, _responsiveState, cd, platformService );
        this.setGrid( this._state, 'bootstrap' );
    }
}

@Directive({
    selector: '[sm]'
})
export class SmDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'sm';
    protected _showWhenTrue = true;

    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 platformService: PlatformService
    ) {
        super( templateRef, viewContainer, _responsiveState, cd, platformService );
        this.setGrid( this._state, 'bootstrap' );
    }
}

@Directive({
    selector: '[xs]'
})
export class XsDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'xs';
    protected _showWhenTrue = true;
    
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef,
                 platformService: PlatformService
    ) {
        super( templateRef, viewContainer, _responsiveState, cd, platformService );
        this.setGrid(this._state, 'bootstrap');
    }
}
@Directive(
{
    selector: '[showItBootstrap]'
})
export class ShowItBootstrapDirective extends RESPONSIVE_BASE<any> {
    protected _showWhenTrue = true;
    readonly showItBootstrap = input<string[] | string>();

    protected override configure(): void {
        this.setGrid( this.showItBootstrap(), 'bootstrap' );
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
    selector: '[hideItBootstrap]'
})
export class HideItBootstrapDirective extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = false;

    readonly hideItBootstrap = input<string[] | string>();

    protected override configure(): void {
        this.setGrid( this.hideItBootstrap(), 'bootstrap' );
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
