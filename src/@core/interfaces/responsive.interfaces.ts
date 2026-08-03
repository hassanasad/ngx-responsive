export interface IResponsivePattern {
    bootstrap?: string | string[];
    browser?: string | string[];
    device?: string | string[];
    pixelratio?: string | string[];
    orientation?: string | string[];
    standard?: string | string[];
    sizes?: number;
}

export interface IResponsiveSubscriptions {
    [key: string]: boolean | undefined;
    bootstrap?: boolean;
    browser?: boolean;
    device?: boolean;
    pixelratio?: boolean;
    orientation?: boolean;
    standard?: boolean;
    sizes?: boolean;
}
