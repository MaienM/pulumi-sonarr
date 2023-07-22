// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Download Clients -->Download Client Deluge resource.
 * For more information refer to [Download Client](https://wiki.servarr.com/sonarr/settings#download-clients) and [Deluge](https://wiki.servarr.com/sonarr/supported#deluge).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@maienm/pulumi-sonarr";
 *
 * const example = new sonarr.downloadclients.DownloadClientDeluge("example", {
 *     enable: true,
 *     host: "deluge",
 *     name: "Example",
 *     port: 9091,
 *     priority: 1,
 *     urlBase: "/deluge/",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import sonarr:DownloadClients/downloadClientDeluge:DownloadClientDeluge example 1
 * ```
 */
export class DownloadClientDeluge extends pulumi.CustomResource {
    /**
     * Get an existing DownloadClientDeluge resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DownloadClientDelugeState, opts?: pulumi.CustomResourceOptions): DownloadClientDeluge {
        return new DownloadClientDeluge(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sonarr:DownloadClients/downloadClientDeluge:DownloadClientDeluge';

    /**
     * Returns true if the given object is an instance of DownloadClientDeluge.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DownloadClientDeluge {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DownloadClientDeluge.__pulumiType;
    }

    /**
     * Add paused flag.
     */
    public readonly addPaused!: pulumi.Output<boolean>;
    /**
     * Enable flag.
     */
    public readonly enable!: pulumi.Output<boolean>;
    /**
     * host.
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * Download Client name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Older TV priority. `0` Last, `1` First.
     */
    public readonly olderTvPriority!: pulumi.Output<number>;
    /**
     * Password.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * Port.
     */
    public readonly port!: pulumi.Output<number>;
    /**
     * Priority.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Recent TV priority. `0` Last, `1` First.
     */
    public readonly recentTvPriority!: pulumi.Output<number>;
    /**
     * Remove completed downloads flag.
     */
    public readonly removeCompletedDownloads!: pulumi.Output<boolean>;
    /**
     * Remove failed downloads flag.
     */
    public readonly removeFailedDownloads!: pulumi.Output<boolean>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * TV category.
     */
    public readonly tvCategory!: pulumi.Output<string>;
    /**
     * TV imported category.
     */
    public readonly tvImportedCategory!: pulumi.Output<string>;
    /**
     * Base URL.
     */
    public readonly urlBase!: pulumi.Output<string>;
    /**
     * Use SSL flag.
     */
    public readonly useSsl!: pulumi.Output<boolean>;

    /**
     * Create a DownloadClientDeluge resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DownloadClientDelugeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DownloadClientDelugeArgs | DownloadClientDelugeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DownloadClientDelugeState | undefined;
            resourceInputs["addPaused"] = state ? state.addPaused : undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["olderTvPriority"] = state ? state.olderTvPriority : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["recentTvPriority"] = state ? state.recentTvPriority : undefined;
            resourceInputs["removeCompletedDownloads"] = state ? state.removeCompletedDownloads : undefined;
            resourceInputs["removeFailedDownloads"] = state ? state.removeFailedDownloads : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tvCategory"] = state ? state.tvCategory : undefined;
            resourceInputs["tvImportedCategory"] = state ? state.tvImportedCategory : undefined;
            resourceInputs["urlBase"] = state ? state.urlBase : undefined;
            resourceInputs["useSsl"] = state ? state.useSsl : undefined;
        } else {
            const args = argsOrState as DownloadClientDelugeArgs | undefined;
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            resourceInputs["addPaused"] = args ? args.addPaused : undefined;
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["olderTvPriority"] = args ? args.olderTvPriority : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["recentTvPriority"] = args ? args.recentTvPriority : undefined;
            resourceInputs["removeCompletedDownloads"] = args ? args.removeCompletedDownloads : undefined;
            resourceInputs["removeFailedDownloads"] = args ? args.removeFailedDownloads : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tvCategory"] = args ? args.tvCategory : undefined;
            resourceInputs["tvImportedCategory"] = args ? args.tvImportedCategory : undefined;
            resourceInputs["urlBase"] = args ? args.urlBase : undefined;
            resourceInputs["useSsl"] = args ? args.useSsl : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DownloadClientDeluge.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DownloadClientDeluge resources.
 */
export interface DownloadClientDelugeState {
    /**
     * Add paused flag.
     */
    addPaused?: pulumi.Input<boolean>;
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * Download Client name.
     */
    name?: pulumi.Input<string>;
    /**
     * Older TV priority. `0` Last, `1` First.
     */
    olderTvPriority?: pulumi.Input<number>;
    /**
     * Password.
     */
    password?: pulumi.Input<string>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Recent TV priority. `0` Last, `1` First.
     */
    recentTvPriority?: pulumi.Input<number>;
    /**
     * Remove completed downloads flag.
     */
    removeCompletedDownloads?: pulumi.Input<boolean>;
    /**
     * Remove failed downloads flag.
     */
    removeFailedDownloads?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * TV category.
     */
    tvCategory?: pulumi.Input<string>;
    /**
     * TV imported category.
     */
    tvImportedCategory?: pulumi.Input<string>;
    /**
     * Base URL.
     */
    urlBase?: pulumi.Input<string>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a DownloadClientDeluge resource.
 */
export interface DownloadClientDelugeArgs {
    /**
     * Add paused flag.
     */
    addPaused?: pulumi.Input<boolean>;
    /**
     * Enable flag.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * host.
     */
    host?: pulumi.Input<string>;
    /**
     * Download Client name.
     */
    name: pulumi.Input<string>;
    /**
     * Older TV priority. `0` Last, `1` First.
     */
    olderTvPriority?: pulumi.Input<number>;
    /**
     * Password.
     */
    password: pulumi.Input<string>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * Priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Recent TV priority. `0` Last, `1` First.
     */
    recentTvPriority?: pulumi.Input<number>;
    /**
     * Remove completed downloads flag.
     */
    removeCompletedDownloads?: pulumi.Input<boolean>;
    /**
     * Remove failed downloads flag.
     */
    removeFailedDownloads?: pulumi.Input<boolean>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * TV category.
     */
    tvCategory?: pulumi.Input<string>;
    /**
     * TV imported category.
     */
    tvImportedCategory?: pulumi.Input<string>;
    /**
     * Base URL.
     */
    urlBase?: pulumi.Input<string>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
}
