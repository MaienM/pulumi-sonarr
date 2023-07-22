// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Tags -->Auto Tag resource.
 * For more information refer to [Tags](https://wiki.servarr.com/sonarr/settings#tags) documentation.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@maienm/pulumi-sonarr";
 *
 * const example = new sonarr.tags.AutoTag("example", {
 *     name: "Example",
 *     removeTagsAutomatically: true,
 *     specifications: [
 *         {
 *             implementation: "RootFolderSpecification",
 *             name: "folder",
 *             negate: true,
 *             required: false,
 *             value: "/series",
 *         },
 *         {
 *             implementation: "SeriesTypeSpecification",
 *             name: "type",
 *             negate: true,
 *             required: false,
 *             value: "2",
 *         },
 *         {
 *             implementation: "GenreSpecification",
 *             name: "genre",
 *             negate: false,
 *             required: false,
 *             value: "horror comedy",
 *         },
 *     ],
 *     tags: [
 *         1,
 *         2,
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import sonarr:Tags/autoTag:AutoTag example 1
 * ```
 */
export class AutoTag extends pulumi.CustomResource {
    /**
     * Get an existing AutoTag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AutoTagState, opts?: pulumi.CustomResourceOptions): AutoTag {
        return new AutoTag(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sonarr:Tags/autoTag:AutoTag';

    /**
     * Returns true if the given object is an instance of AutoTag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AutoTag {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AutoTag.__pulumiType;
    }

    /**
     * Auto Tag name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Remove tags automatically flag.
     */
    public readonly removeTagsAutomatically!: pulumi.Output<boolean>;
    /**
     * Specifications.
     */
    public readonly specifications!: pulumi.Output<outputs.Tags.AutoTagSpecification[]>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;

    /**
     * Create a AutoTag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutoTagArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AutoTagArgs | AutoTagState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AutoTagState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["removeTagsAutomatically"] = state ? state.removeTagsAutomatically : undefined;
            resourceInputs["specifications"] = state ? state.specifications : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as AutoTagArgs | undefined;
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.specifications === undefined) && !opts.urn) {
                throw new Error("Missing required property 'specifications'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["removeTagsAutomatically"] = args ? args.removeTagsAutomatically : undefined;
            resourceInputs["specifications"] = args ? args.specifications : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AutoTag.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AutoTag resources.
 */
export interface AutoTagState {
    /**
     * Auto Tag name.
     */
    name?: pulumi.Input<string>;
    /**
     * Remove tags automatically flag.
     */
    removeTagsAutomatically?: pulumi.Input<boolean>;
    /**
     * Specifications.
     */
    specifications?: pulumi.Input<pulumi.Input<inputs.Tags.AutoTagSpecification>[]>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a AutoTag resource.
 */
export interface AutoTagArgs {
    /**
     * Auto Tag name.
     */
    name: pulumi.Input<string>;
    /**
     * Remove tags automatically flag.
     */
    removeTagsAutomatically?: pulumi.Input<boolean>;
    /**
     * Specifications.
     */
    specifications: pulumi.Input<pulumi.Input<inputs.Tags.AutoTagSpecification>[]>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}
