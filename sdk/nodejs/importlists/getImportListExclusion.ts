// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Import Lists -->Single ImportListExclusion.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@pulumi/sonarr";
 *
 * const example = sonarr.ImportLists.getImportListExclusion({
 *     tvdbId: 987,
 * });
 * ```
 */
export function getImportListExclusion(args: GetImportListExclusionArgs, opts?: pulumi.InvokeOptions): Promise<GetImportListExclusionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sonarr:ImportLists/getImportListExclusion:getImportListExclusion", {
        "tvdbId": args.tvdbId,
    }, opts);
}

/**
 * A collection of arguments for invoking getImportListExclusion.
 */
export interface GetImportListExclusionArgs {
    /**
     * Series TVDB ID.
     */
    tvdbId: number;
}

/**
 * A collection of values returned by getImportListExclusion.
 */
export interface GetImportListExclusionResult {
    /**
     * ImportListExclusion ID.
     */
    readonly id: number;
    /**
     * Series to be excluded.
     */
    readonly title: string;
    /**
     * Series TVDB ID.
     */
    readonly tvdbId: number;
}
/**
 * <!-- subcategory:Import Lists -->Single ImportListExclusion.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@pulumi/sonarr";
 *
 * const example = sonarr.ImportLists.getImportListExclusion({
 *     tvdbId: 987,
 * });
 * ```
 */
export function getImportListExclusionOutput(args: GetImportListExclusionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImportListExclusionResult> {
    return pulumi.output(args).apply((a: any) => getImportListExclusion(a, opts))
}

/**
 * A collection of arguments for invoking getImportListExclusion.
 */
export interface GetImportListExclusionOutputArgs {
    /**
     * Series TVDB ID.
     */
    tvdbId: pulumi.Input<number>;
}