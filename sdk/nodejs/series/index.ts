// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

// Export members:
export { GetAllSeriesResult } from "./getAllSeries";
export const getAllSeries: typeof import("./getAllSeries").getAllSeries = null as any;
utilities.lazyLoad(exports, ["getAllSeries"], () => require("./getAllSeries"));

export { GetSearchSeriesArgs, GetSearchSeriesResult, GetSearchSeriesOutputArgs } from "./getSearchSeries";
export const getSearchSeries: typeof import("./getSearchSeries").getSearchSeries = null as any;
export const getSearchSeriesOutput: typeof import("./getSearchSeries").getSearchSeriesOutput = null as any;
utilities.lazyLoad(exports, ["getSearchSeries","getSearchSeriesOutput"], () => require("./getSearchSeries"));

export { GetSeriesArgs, GetSeriesResult, GetSeriesOutputArgs } from "./getSeries";
export const getSeries: typeof import("./getSeries").getSeries = null as any;
export const getSeriesOutput: typeof import("./getSeries").getSeriesOutput = null as any;
utilities.lazyLoad(exports, ["getSeries","getSeriesOutput"], () => require("./getSeries"));

export { SeriesArgs, SeriesState } from "./series";
export type Series = import("./series").Series;
export const Series: typeof import("./series").Series = null as any;
utilities.lazyLoad(exports, ["Series"], () => require("./series"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "sonarr:Series/series:Series":
                return new Series(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("sonarr", "Series/series", _module)
