// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Languages -->List all available Languages.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@pulumi/sonarr";
 *
 * const example = sonarr.Languages.getLanguages({});
 * ```
 */
export function getLanguages(opts?: pulumi.InvokeOptions): Promise<GetLanguagesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sonarr:Languages/getLanguages:getLanguages", {
    }, opts);
}

/**
 * A collection of values returned by getLanguages.
 */
export interface GetLanguagesResult {
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * Language list.
     */
    readonly languages: outputs.Languages.GetLanguagesLanguage[];
}