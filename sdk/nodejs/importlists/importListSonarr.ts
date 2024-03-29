// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Import Lists -->ImportList Sonarr resource.
 * For more information refer to [Import List](https://wiki.servarr.com/sonarr/settings#import-lists) and [Sonarr](https://wiki.servarr.com/sonarr/supported#sonarr).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@maienm/pulumi-sonarr";
 *
 * const example = new sonarr.importlists.ImportListSonarr("example", {
 *     enableAutomaticAdd: true,
 *     seasonFolder: true,
 *     shouldMonitor: "all",
 *     seriesType: "standard",
 *     rootFolderPath: sonarr_root_folder.example.path,
 *     qualityProfileId: 1,
 *     name: "Example",
 *     baseUrl: "http://127.0.0.1:8989",
 *     apiKey: "APIKey",
 *     tags: [
 *         1,
 *         2,
 *         3,
 *     ],
 *     qualityProfileIds: [
 *         1,
 *         2,
 *     ],
 *     languageProfileIds: [1],
 *     tagIds: [
 *         1,
 *         2,
 *         3,
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import sonarr:ImportLists/importListSonarr:ImportListSonarr example 1
 * ```
 */
export class ImportListSonarr extends pulumi.CustomResource {
    /**
     * Get an existing ImportListSonarr resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImportListSonarrState, opts?: pulumi.CustomResourceOptions): ImportListSonarr {
        return new ImportListSonarr(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sonarr:ImportLists/importListSonarr:ImportListSonarr';

    /**
     * Returns true if the given object is an instance of ImportListSonarr.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImportListSonarr {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImportListSonarr.__pulumiType;
    }

    /**
     * API key.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * Base URL.
     */
    public readonly baseUrl!: pulumi.Output<string>;
    /**
     * Enable automatic add flag.
     */
    public readonly enableAutomaticAdd!: pulumi.Output<boolean>;
    /**
     * Language profile IDs.
     */
    public readonly languageProfileIds!: pulumi.Output<number[]>;
    /**
     * Import List name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Quality profile ID.
     */
    public readonly qualityProfileId!: pulumi.Output<number>;
    /**
     * Quality profile IDs.
     */
    public readonly qualityProfileIds!: pulumi.Output<number[]>;
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
     * Tag IDs.
     */
    public readonly tagIds!: pulumi.Output<number[]>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;

    /**
     * Create a ImportListSonarr resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImportListSonarrArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImportListSonarrArgs | ImportListSonarrState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ImportListSonarrState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["baseUrl"] = state ? state.baseUrl : undefined;
            resourceInputs["enableAutomaticAdd"] = state ? state.enableAutomaticAdd : undefined;
            resourceInputs["languageProfileIds"] = state ? state.languageProfileIds : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["qualityProfileId"] = state ? state.qualityProfileId : undefined;
            resourceInputs["qualityProfileIds"] = state ? state.qualityProfileIds : undefined;
            resourceInputs["rootFolderPath"] = state ? state.rootFolderPath : undefined;
            resourceInputs["seasonFolder"] = state ? state.seasonFolder : undefined;
            resourceInputs["seriesType"] = state ? state.seriesType : undefined;
            resourceInputs["shouldMonitor"] = state ? state.shouldMonitor : undefined;
            resourceInputs["tagIds"] = state ? state.tagIds : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ImportListSonarrArgs | undefined;
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            if ((!args || args.baseUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'baseUrl'");
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
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["baseUrl"] = args ? args.baseUrl : undefined;
            resourceInputs["enableAutomaticAdd"] = args ? args.enableAutomaticAdd : undefined;
            resourceInputs["languageProfileIds"] = args ? args.languageProfileIds : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["qualityProfileId"] = args ? args.qualityProfileId : undefined;
            resourceInputs["qualityProfileIds"] = args ? args.qualityProfileIds : undefined;
            resourceInputs["rootFolderPath"] = args ? args.rootFolderPath : undefined;
            resourceInputs["seasonFolder"] = args ? args.seasonFolder : undefined;
            resourceInputs["seriesType"] = args ? args.seriesType : undefined;
            resourceInputs["shouldMonitor"] = args ? args.shouldMonitor : undefined;
            resourceInputs["tagIds"] = args ? args.tagIds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ImportListSonarr.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ImportListSonarr resources.
 */
export interface ImportListSonarrState {
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Base URL.
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * Enable automatic add flag.
     */
    enableAutomaticAdd?: pulumi.Input<boolean>;
    /**
     * Language profile IDs.
     */
    languageProfileIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Import List name.
     */
    name?: pulumi.Input<string>;
    /**
     * Quality profile ID.
     */
    qualityProfileId?: pulumi.Input<number>;
    /**
     * Quality profile IDs.
     */
    qualityProfileIds?: pulumi.Input<pulumi.Input<number>[]>;
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
     * Tag IDs.
     */
    tagIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a ImportListSonarr resource.
 */
export interface ImportListSonarrArgs {
    /**
     * API key.
     */
    apiKey: pulumi.Input<string>;
    /**
     * Base URL.
     */
    baseUrl: pulumi.Input<string>;
    /**
     * Enable automatic add flag.
     */
    enableAutomaticAdd: pulumi.Input<boolean>;
    /**
     * Language profile IDs.
     */
    languageProfileIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Import List name.
     */
    name: pulumi.Input<string>;
    /**
     * Quality profile ID.
     */
    qualityProfileId: pulumi.Input<number>;
    /**
     * Quality profile IDs.
     */
    qualityProfileIds?: pulumi.Input<pulumi.Input<number>[]>;
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
     * Tag IDs.
     */
    tagIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}
