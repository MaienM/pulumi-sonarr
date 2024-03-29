// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Profiles -> Custom Format Condition Size data source.
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
 * const exampleCustomFormatConditionSize = sonarr.Profiles.getCustomFormatConditionSize({
 *     name: "Example",
 *     negate: false,
 *     required: false,
 *     min: 5,
 *     max: 50,
 * });
 * const exampleCustomFormat = new sonarr.profiles.CustomFormat("exampleCustomFormat", {
 *     includeCustomFormatWhenRenaming: false,
 *     name: "Example",
 *     specifications: [exampleCustomFormatConditionSize],
 * });
 * ```
 * {{% /example %}}
 * {{% /examples %}}
 */
export function getCustomFormatConditionSize(args: GetCustomFormatConditionSizeArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomFormatConditionSizeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sonarr:Profiles/getCustomFormatConditionSize:getCustomFormatConditionSize", {
        "max": args.max,
        "min": args.min,
        "name": args.name,
        "negate": args.negate,
        "required": args.required,
    }, opts);
}

/**
 * A collection of arguments for invoking getCustomFormatConditionSize.
 */
export interface GetCustomFormatConditionSizeArgs {
    /**
     * Max size in GB.
     */
    max: number;
    /**
     * Min size in GB.
     */
    min: number;
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
}

/**
 * A collection of values returned by getCustomFormatConditionSize.
 */
export interface GetCustomFormatConditionSizeResult {
    /**
     * Custom format condition size ID.
     */
    readonly id: number;
    /**
     * Implementation.
     */
    readonly implementation: string;
    /**
     * Max size in GB.
     */
    readonly max: number;
    /**
     * Min size in GB.
     */
    readonly min: number;
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
}
/**
 * <!-- subcategory:Profiles -> Custom Format Condition Size data source.
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
 * const exampleCustomFormatConditionSize = sonarr.Profiles.getCustomFormatConditionSize({
 *     name: "Example",
 *     negate: false,
 *     required: false,
 *     min: 5,
 *     max: 50,
 * });
 * const exampleCustomFormat = new sonarr.profiles.CustomFormat("exampleCustomFormat", {
 *     includeCustomFormatWhenRenaming: false,
 *     name: "Example",
 *     specifications: [exampleCustomFormatConditionSize],
 * });
 * ```
 * {{% /example %}}
 * {{% /examples %}}
 */
export function getCustomFormatConditionSizeOutput(args: GetCustomFormatConditionSizeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomFormatConditionSizeResult> {
    return pulumi.output(args).apply((a: any) => getCustomFormatConditionSize(a, opts))
}

/**
 * A collection of arguments for invoking getCustomFormatConditionSize.
 */
export interface GetCustomFormatConditionSizeOutputArgs {
    /**
     * Max size in GB.
     */
    max: pulumi.Input<number>;
    /**
     * Min size in GB.
     */
    min: pulumi.Input<number>;
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
}
