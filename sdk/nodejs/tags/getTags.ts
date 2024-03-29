// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Tags -->List all available Tags.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@pulumi/sonarr";
 *
 * const example = sonarr.Tags.getTags({});
 * ```
 */
export function getTags(opts?: pulumi.InvokeOptions): Promise<GetTagsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sonarr:Tags/getTags:getTags", {
    }, opts);
}

/**
 * A collection of values returned by getTags.
 */
export interface GetTagsResult {
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * Tag list.
     */
    readonly tags: outputs.Tags.GetTagsTag[];
}
