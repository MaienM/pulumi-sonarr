// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Profiles -->Quality Profile resource.
 * For more information refer to [Quality Profile](https://wiki.servarr.com/sonarr/settings#quality-profiles) documentation.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@maienm/pulumi-sonarr";
 *
 * const example = new sonarr.profiles.QualityProfile("example", {
 *     cutoff: 1100,
 *     name: "example-4k",
 *     qualityGroups: [{
 *         id: 1100,
 *         name: "4k",
 *         qualities: [
 *             {
 *                 id: 18,
 *                 name: "WEBDL-2160p",
 *                 resolution: 2160,
 *                 source: "web",
 *             },
 *             {
 *                 id: 19,
 *                 name: "Bluray-2160p",
 *                 resolution: 2160,
 *                 source: "bluray",
 *             },
 *         ],
 *     }],
 *     upgradeAllowed: true,
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import sonarr:Profiles/qualityProfile:QualityProfile example 10
 * ```
 */
export class QualityProfile extends pulumi.CustomResource {
    /**
     * Get an existing QualityProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QualityProfileState, opts?: pulumi.CustomResourceOptions): QualityProfile {
        return new QualityProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sonarr:Profiles/qualityProfile:QualityProfile';

    /**
     * Returns true if the given object is an instance of QualityProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is QualityProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === QualityProfile.__pulumiType;
    }

    /**
     * Quality ID to which cutoff.
     */
    public readonly cutoff!: pulumi.Output<number>;
    /**
     * Cutoff format score.
     */
    public readonly cutoffFormatScore!: pulumi.Output<number>;
    /**
     * Format items.
     */
    public readonly formatItems!: pulumi.Output<outputs.Profiles.QualityProfileFormatItem[]>;
    /**
     * Min format score.
     */
    public readonly minFormatScore!: pulumi.Output<number>;
    /**
     * Quality Profile Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Quality groups.
     */
    public readonly qualityGroups!: pulumi.Output<outputs.Profiles.QualityProfileQualityGroup[]>;
    /**
     * Upgrade allowed flag.
     */
    public readonly upgradeAllowed!: pulumi.Output<boolean>;

    /**
     * Create a QualityProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QualityProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: QualityProfileArgs | QualityProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as QualityProfileState | undefined;
            resourceInputs["cutoff"] = state ? state.cutoff : undefined;
            resourceInputs["cutoffFormatScore"] = state ? state.cutoffFormatScore : undefined;
            resourceInputs["formatItems"] = state ? state.formatItems : undefined;
            resourceInputs["minFormatScore"] = state ? state.minFormatScore : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["qualityGroups"] = state ? state.qualityGroups : undefined;
            resourceInputs["upgradeAllowed"] = state ? state.upgradeAllowed : undefined;
        } else {
            const args = argsOrState as QualityProfileArgs | undefined;
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.qualityGroups === undefined) && !opts.urn) {
                throw new Error("Missing required property 'qualityGroups'");
            }
            resourceInputs["cutoff"] = args ? args.cutoff : undefined;
            resourceInputs["cutoffFormatScore"] = args ? args.cutoffFormatScore : undefined;
            resourceInputs["formatItems"] = args ? args.formatItems : undefined;
            resourceInputs["minFormatScore"] = args ? args.minFormatScore : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["qualityGroups"] = args ? args.qualityGroups : undefined;
            resourceInputs["upgradeAllowed"] = args ? args.upgradeAllowed : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(QualityProfile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering QualityProfile resources.
 */
export interface QualityProfileState {
    /**
     * Quality ID to which cutoff.
     */
    cutoff?: pulumi.Input<number>;
    /**
     * Cutoff format score.
     */
    cutoffFormatScore?: pulumi.Input<number>;
    /**
     * Format items.
     */
    formatItems?: pulumi.Input<pulumi.Input<inputs.Profiles.QualityProfileFormatItem>[]>;
    /**
     * Min format score.
     */
    minFormatScore?: pulumi.Input<number>;
    /**
     * Quality Profile Name.
     */
    name?: pulumi.Input<string>;
    /**
     * Quality groups.
     */
    qualityGroups?: pulumi.Input<pulumi.Input<inputs.Profiles.QualityProfileQualityGroup>[]>;
    /**
     * Upgrade allowed flag.
     */
    upgradeAllowed?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a QualityProfile resource.
 */
export interface QualityProfileArgs {
    /**
     * Quality ID to which cutoff.
     */
    cutoff?: pulumi.Input<number>;
    /**
     * Cutoff format score.
     */
    cutoffFormatScore?: pulumi.Input<number>;
    /**
     * Format items.
     */
    formatItems?: pulumi.Input<pulumi.Input<inputs.Profiles.QualityProfileFormatItem>[]>;
    /**
     * Min format score.
     */
    minFormatScore?: pulumi.Input<number>;
    /**
     * Quality Profile Name.
     */
    name: pulumi.Input<string>;
    /**
     * Quality groups.
     */
    qualityGroups: pulumi.Input<pulumi.Input<inputs.Profiles.QualityProfileQualityGroup>[]>;
    /**
     * Upgrade allowed flag.
     */
    upgradeAllowed?: pulumi.Input<boolean>;
}
