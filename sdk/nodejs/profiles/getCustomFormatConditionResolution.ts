// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Profiles -> Custom Format Condition Resolution data source.
 * For more information refer to [Custom Format Conditions](https://wiki.servarr.com/sonarr/settings#conditions).
 *
 * {{% examples %}}
 * ## Example Usage
 * {{% example %}}
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@maienm/pulumi-sonarr";
 * import * as sonarr from "@pulumi/sonarr";
 *
 * const exampleCustomFormatConditionResolution = sonarr.Profiles.getCustomFormatConditionResolution({
 *     name: "Example",
 *     negate: false,
 *     required: false,
 *     value: "1080",
 * });
 * const exampleCustomFormat = new sonarr.profiles.CustomFormat("exampleCustomFormat", {
 *     includeCustomFormatWhenRenaming: false,
 *     name: "Example",
 *     specifications: [exampleCustomFormatConditionResolution],
 * });
 * ```
 * {{% /example %}}
 * {{% /examples %}}
 */
export function getCustomFormatConditionResolution(args: GetCustomFormatConditionResolutionArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomFormatConditionResolutionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sonarr:Profiles/getCustomFormatConditionResolution:getCustomFormatConditionResolution", {
        "name": args.name,
        "negate": args.negate,
        "required": args.required,
        "value": args.value,
    }, opts);
}

/**
 * A collection of arguments for invoking getCustomFormatConditionResolution.
 */
export interface GetCustomFormatConditionResolutionArgs {
    /**
     * Specification name.
     */
    name: string;
    /**
     * Negate flag.
     */
    negate: boolean;
    /**
     * Computed flag.
     */
    required: boolean;
    /**
     * Resolution ID. `0` Unknown, `1` R360p, `2` R480p, `3` R540p, `4` R576p, `5` R720p, `6` R1080p, `7` R2160p.
     */
    value: string;
}

/**
 * A collection of values returned by getCustomFormatConditionResolution.
 */
export interface GetCustomFormatConditionResolutionResult {
    /**
     * Custom format condition resolution ID.
     */
    readonly id: number;
    /**
     * Implementation.
     */
    readonly implementation: string;
    /**
     * Specification name.
     */
    readonly name: string;
    /**
     * Negate flag.
     */
    readonly negate: boolean;
    /**
     * Computed flag.
     */
    readonly required: boolean;
    /**
     * Resolution ID. `0` Unknown, `1` R360p, `2` R480p, `3` R540p, `4` R576p, `5` R720p, `6` R1080p, `7` R2160p.
     */
    readonly value: string;
}
/**
 * <!-- subcategory:Profiles -> Custom Format Condition Resolution data source.
 * For more information refer to [Custom Format Conditions](https://wiki.servarr.com/sonarr/settings#conditions).
 *
 * {{% examples %}}
 * ## Example Usage
 * {{% example %}}
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@maienm/pulumi-sonarr";
 * import * as sonarr from "@pulumi/sonarr";
 *
 * const exampleCustomFormatConditionResolution = sonarr.Profiles.getCustomFormatConditionResolution({
 *     name: "Example",
 *     negate: false,
 *     required: false,
 *     value: "1080",
 * });
 * const exampleCustomFormat = new sonarr.profiles.CustomFormat("exampleCustomFormat", {
 *     includeCustomFormatWhenRenaming: false,
 *     name: "Example",
 *     specifications: [exampleCustomFormatConditionResolution],
 * });
 * ```
 * {{% /example %}}
 * {{% /examples %}}
 */
export function getCustomFormatConditionResolutionOutput(args: GetCustomFormatConditionResolutionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomFormatConditionResolutionResult> {
    return pulumi.output(args).apply((a: any) => getCustomFormatConditionResolution(a, opts))
}

/**
 * A collection of arguments for invoking getCustomFormatConditionResolution.
 */
export interface GetCustomFormatConditionResolutionOutputArgs {
    /**
     * Specification name.
     */
    name: pulumi.Input<string>;
    /**
     * Negate flag.
     */
    negate: pulumi.Input<boolean>;
    /**
     * Computed flag.
     */
    required: pulumi.Input<boolean>;
    /**
     * Resolution ID. `0` Unknown, `1` R360p, `2` R480p, `3` R540p, `4` R576p, `5` R720p, `6` R1080p, `7` R2160p.
     */
    value: pulumi.Input<string>;
}
