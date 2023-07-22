// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Download Clients -->List all available Remote Path Mappings.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@pulumi/sonarr";
 *
 * const example = sonarr.Tags.getRemotePathMappings({});
 * ```
 */
export function getRemotePathMappings(opts?: pulumi.InvokeOptions): Promise<GetRemotePathMappingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sonarr:Tags/getRemotePathMappings:getRemotePathMappings", {
    }, opts);
}

/**
 * A collection of values returned by getRemotePathMappings.
 */
export interface GetRemotePathMappingsResult {
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * Remote Path Mapping list.
     */
    readonly remotePathMappings: outputs.Tags.GetRemotePathMappingsRemotePathMapping[];
}
