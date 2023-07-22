// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Download Clients -->List all available Download Clients.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@pulumi/sonarr";
 *
 * const example = sonarr.DownloadClients.getDownloadClients({});
 * ```
 */
export function getDownloadClients(opts?: pulumi.InvokeOptions): Promise<GetDownloadClientsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sonarr:DownloadClients/getDownloadClients:getDownloadClients", {
    }, opts);
}

/**
 * A collection of values returned by getDownloadClients.
 */
export interface GetDownloadClientsResult {
    /**
     * Download Client list.
     */
    readonly downloadClients: outputs.DownloadClients.GetDownloadClientsDownloadClient[];
    /**
     * The ID of this resource.
     */
    readonly id: string;
}
