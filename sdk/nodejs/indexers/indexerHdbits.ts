// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Indexers -->Indexer HDBits resource.
 * For more information refer to [Indexer](https://wiki.servarr.com/sonarr/settings#indexers) and [HDBits](https://wiki.servarr.com/sonarr/supported#hdbits).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@maienm/pulumi-sonarr";
 *
 * const example = new sonarr.indexers.IndexerHdbits("example", {
 *     apiKey: "APIKey",
 *     baseUrl: "https://hdbits.org",
 *     enableAutomaticSearch: true,
 *     minimumSeeders: 1,
 *     name: "Example",
 *     username: "User",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import sonarr:Indexers/indexerHdbits:IndexerHdbits example 1
 * ```
 */
export class IndexerHdbits extends pulumi.CustomResource {
    /**
     * Get an existing IndexerHdbits resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IndexerHdbitsState, opts?: pulumi.CustomResourceOptions): IndexerHdbits {
        return new IndexerHdbits(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sonarr:Indexers/indexerHdbits:IndexerHdbits';

    /**
     * Returns true if the given object is an instance of IndexerHdbits.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IndexerHdbits {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IndexerHdbits.__pulumiType;
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
     * Download client ID.
     */
    public readonly downloadClientId!: pulumi.Output<number>;
    /**
     * Enable automatic search flag.
     */
    public readonly enableAutomaticSearch!: pulumi.Output<boolean>;
    /**
     * Enable interactive search flag.
     */
    public readonly enableInteractiveSearch!: pulumi.Output<boolean>;
    /**
     * Enable RSS flag.
     */
    public readonly enableRss!: pulumi.Output<boolean>;
    /**
     * Minimum seeders.
     */
    public readonly minimumSeeders!: pulumi.Output<number>;
    /**
     * IndexerHdbits name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Priority.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Season seed time.
     */
    public readonly seasonPackSeedTime!: pulumi.Output<number>;
    /**
     * Seed ratio.
     */
    public readonly seedRatio!: pulumi.Output<number>;
    /**
     * Seed time.
     */
    public readonly seedTime!: pulumi.Output<number>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Username.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a IndexerHdbits resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IndexerHdbitsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IndexerHdbitsArgs | IndexerHdbitsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IndexerHdbitsState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["baseUrl"] = state ? state.baseUrl : undefined;
            resourceInputs["downloadClientId"] = state ? state.downloadClientId : undefined;
            resourceInputs["enableAutomaticSearch"] = state ? state.enableAutomaticSearch : undefined;
            resourceInputs["enableInteractiveSearch"] = state ? state.enableInteractiveSearch : undefined;
            resourceInputs["enableRss"] = state ? state.enableRss : undefined;
            resourceInputs["minimumSeeders"] = state ? state.minimumSeeders : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["seasonPackSeedTime"] = state ? state.seasonPackSeedTime : undefined;
            resourceInputs["seedRatio"] = state ? state.seedRatio : undefined;
            resourceInputs["seedTime"] = state ? state.seedTime : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as IndexerHdbitsArgs | undefined;
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["baseUrl"] = args ? args.baseUrl : undefined;
            resourceInputs["downloadClientId"] = args ? args.downloadClientId : undefined;
            resourceInputs["enableAutomaticSearch"] = args ? args.enableAutomaticSearch : undefined;
            resourceInputs["enableInteractiveSearch"] = args ? args.enableInteractiveSearch : undefined;
            resourceInputs["enableRss"] = args ? args.enableRss : undefined;
            resourceInputs["minimumSeeders"] = args ? args.minimumSeeders : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["seasonPackSeedTime"] = args ? args.seasonPackSeedTime : undefined;
            resourceInputs["seedRatio"] = args ? args.seedRatio : undefined;
            resourceInputs["seedTime"] = args ? args.seedTime : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(IndexerHdbits.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IndexerHdbits resources.
 */
export interface IndexerHdbitsState {
    /**
     * API key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Base URL.
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * Download client ID.
     */
    downloadClientId?: pulumi.Input<number>;
    /**
     * Enable automatic search flag.
     */
    enableAutomaticSearch?: pulumi.Input<boolean>;
    /**
     * Enable interactive search flag.
     */
    enableInteractiveSearch?: pulumi.Input<boolean>;
    /**
     * Enable RSS flag.
     */
    enableRss?: pulumi.Input<boolean>;
    /**
     * Minimum seeders.
     */
    minimumSeeders?: pulumi.Input<number>;
    /**
     * IndexerHdbits name.
     */
    name?: pulumi.Input<string>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Season seed time.
     */
    seasonPackSeedTime?: pulumi.Input<number>;
    /**
     * Seed ratio.
     */
    seedRatio?: pulumi.Input<number>;
    /**
     * Seed time.
     */
    seedTime?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IndexerHdbits resource.
 */
export interface IndexerHdbitsArgs {
    /**
     * API key.
     */
    apiKey: pulumi.Input<string>;
    /**
     * Base URL.
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * Download client ID.
     */
    downloadClientId?: pulumi.Input<number>;
    /**
     * Enable automatic search flag.
     */
    enableAutomaticSearch?: pulumi.Input<boolean>;
    /**
     * Enable interactive search flag.
     */
    enableInteractiveSearch?: pulumi.Input<boolean>;
    /**
     * Enable RSS flag.
     */
    enableRss?: pulumi.Input<boolean>;
    /**
     * Minimum seeders.
     */
    minimumSeeders?: pulumi.Input<number>;
    /**
     * IndexerHdbits name.
     */
    name: pulumi.Input<string>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Season seed time.
     */
    seasonPackSeedTime?: pulumi.Input<number>;
    /**
     * Seed ratio.
     */
    seedRatio?: pulumi.Input<number>;
    /**
     * Seed time.
     */
    seedTime?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Username.
     */
    username: pulumi.Input<string>;
}
