// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Import Lists -->ImportList Plex resource.
 * For more information refer to [Import List](https://wiki.servarr.com/sonarr/settings#import-lists) and [Plex](https://wiki.servarr.com/sonarr/supported#pleximport).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@maienm/pulumi-sonarr";
 *
 * const example = new sonarr.importlists.ImportListPlex("example", {
 *     enableAutomaticAdd: true,
 *     seasonFolder: true,
 *     shouldMonitor: "all",
 *     seriesType: "standard",
 *     rootFolderPath: sonarr_root_folder.example.path,
 *     qualityProfileId: 1,
 *     name: "Example",
 *     accessToken: "Token",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import sonarr:ImportLists/importListPlex:ImportListPlex example 1
 * ```
 */
export class ImportListPlex extends pulumi.CustomResource {
    /**
     * Get an existing ImportListPlex resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImportListPlexState, opts?: pulumi.CustomResourceOptions): ImportListPlex {
        return new ImportListPlex(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sonarr:ImportLists/importListPlex:ImportListPlex';

    /**
     * Returns true if the given object is an instance of ImportListPlex.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImportListPlex {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImportListPlex.__pulumiType;
    }

    /**
     * Access token.
     */
    public readonly accessToken!: pulumi.Output<string>;
    /**
     * Enable automatic add flag.
     */
    public readonly enableAutomaticAdd!: pulumi.Output<boolean>;
    /**
     * Import List name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Quality profile ID.
     */
    public readonly qualityProfileId!: pulumi.Output<number>;
    /**
     * Root folder path.
     */
    public readonly rootFolderPath!: pulumi.Output<string>;
    /**
     * Season folder flag.
     */
    public readonly seasonFolder!: pulumi.Output<boolean>;
    /**
     * Series type.
     */
    public readonly seriesType!: pulumi.Output<string>;
    /**
     * Should monitor.
     */
    public readonly shouldMonitor!: pulumi.Output<string>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;

    /**
     * Create a ImportListPlex resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImportListPlexArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImportListPlexArgs | ImportListPlexState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ImportListPlexState | undefined;
            resourceInputs["accessToken"] = state ? state.accessToken : undefined;
            resourceInputs["enableAutomaticAdd"] = state ? state.enableAutomaticAdd : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["qualityProfileId"] = state ? state.qualityProfileId : undefined;
            resourceInputs["rootFolderPath"] = state ? state.rootFolderPath : undefined;
            resourceInputs["seasonFolder"] = state ? state.seasonFolder : undefined;
            resourceInputs["seriesType"] = state ? state.seriesType : undefined;
            resourceInputs["shouldMonitor"] = state ? state.shouldMonitor : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ImportListPlexArgs | undefined;
            if ((!args || args.accessToken === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessToken'");
            }
            if ((!args || args.enableAutomaticAdd === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enableAutomaticAdd'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.qualityProfileId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'qualityProfileId'");
            }
            if ((!args || args.rootFolderPath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rootFolderPath'");
            }
            if ((!args || args.seasonFolder === undefined) && !opts.urn) {
                throw new Error("Missing required property 'seasonFolder'");
            }
            if ((!args || args.seriesType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'seriesType'");
            }
            if ((!args || args.shouldMonitor === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shouldMonitor'");
            }
            resourceInputs["accessToken"] = args?.accessToken ? pulumi.secret(args.accessToken) : undefined;
            resourceInputs["enableAutomaticAdd"] = args ? args.enableAutomaticAdd : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["qualityProfileId"] = args ? args.qualityProfileId : undefined;
            resourceInputs["rootFolderPath"] = args ? args.rootFolderPath : undefined;
            resourceInputs["seasonFolder"] = args ? args.seasonFolder : undefined;
            resourceInputs["seriesType"] = args ? args.seriesType : undefined;
            resourceInputs["shouldMonitor"] = args ? args.shouldMonitor : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accessToken"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ImportListPlex.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ImportListPlex resources.
 */
export interface ImportListPlexState {
    /**
     * Access token.
     */
    accessToken?: pulumi.Input<string>;
    /**
     * Enable automatic add flag.
     */
    enableAutomaticAdd?: pulumi.Input<boolean>;
    /**
     * Import List name.
     */
    name?: pulumi.Input<string>;
    /**
     * Quality profile ID.
     */
    qualityProfileId?: pulumi.Input<number>;
    /**
     * Root folder path.
     */
    rootFolderPath?: pulumi.Input<string>;
    /**
     * Season folder flag.
     */
    seasonFolder?: pulumi.Input<boolean>;
    /**
     * Series type.
     */
    seriesType?: pulumi.Input<string>;
    /**
     * Should monitor.
     */
    shouldMonitor?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a ImportListPlex resource.
 */
export interface ImportListPlexArgs {
    /**
     * Access token.
     */
    accessToken: pulumi.Input<string>;
    /**
     * Enable automatic add flag.
     */
    enableAutomaticAdd: pulumi.Input<boolean>;
    /**
     * Import List name.
     */
    name: pulumi.Input<string>;
    /**
     * Quality profile ID.
     */
    qualityProfileId: pulumi.Input<number>;
    /**
     * Root folder path.
     */
    rootFolderPath: pulumi.Input<string>;
    /**
     * Season folder flag.
     */
    seasonFolder: pulumi.Input<boolean>;
    /**
     * Series type.
     */
    seriesType: pulumi.Input<string>;
    /**
     * Should monitor.
     */
    shouldMonitor: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}