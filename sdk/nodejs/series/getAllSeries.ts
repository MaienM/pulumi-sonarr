// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Series -->List all available Series.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@pulumi/sonarr";
 *
 * const example = sonarr.Series.getAllSeries({});
 * ```
 */
export function getAllSeries(opts?: pulumi.InvokeOptions): Promise<GetAllSeriesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sonarr:Series/getAllSeries:getAllSeries", {
    }, opts);
}

/**
 * A collection of values returned by getAllSeries.
 */
export interface GetAllSeriesResult {
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * Series list.
     */
    readonly series: outputs.Series.GetAllSeriesSeries[];
}
