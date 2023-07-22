// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Profiles -->List all available Quality Profiles.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@pulumi/sonarr";
 *
 * const example = sonarr.Profiles.getQualityProfiles({});
 * ```
 */
export function getQualityProfiles(opts?: pulumi.InvokeOptions): Promise<GetQualityProfilesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sonarr:Profiles/getQualityProfiles:getQualityProfiles", {
    }, opts);
}

/**
 * A collection of values returned by getQualityProfiles.
 */
export interface GetQualityProfilesResult {
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * Quality Profile list.
     */
    readonly qualityProfiles: outputs.Profiles.GetQualityProfilesQualityProfile[];
}
