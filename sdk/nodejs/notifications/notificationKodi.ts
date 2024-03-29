// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->Notification Kodi resource.
 * For more information refer to [Notification](https://wiki.servarr.com/sonarr/settings#connect) and [Kodi](https://wiki.servarr.com/sonarr/supported#xbmc).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@maienm/pulumi-sonarr";
 *
 * const example = new sonarr.notifications.NotificationKodi("example", {
 *     host: "http://kodi.com",
 *     includeHealthWarnings: false,
 *     name: "Example",
 *     notify: true,
 *     onApplicationUpdate: false,
 *     onDownload: false,
 *     onEpisodeFileDelete: false,
 *     onEpisodeFileDeleteForUpgrade: false,
 *     onGrab: false,
 *     onHealthIssue: false,
 *     onRename: false,
 *     onSeriesDelete: false,
 *     onUpgrade: false,
 *     password: "MyPass",
 *     port: 8080,
 *     username: "User",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import sonarr:Notifications/notificationKodi:NotificationKodi example 1
 * ```
 */
export class NotificationKodi extends pulumi.CustomResource {
    /**
     * Get an existing NotificationKodi resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationKodiState, opts?: pulumi.CustomResourceOptions): NotificationKodi {
        return new NotificationKodi(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sonarr:Notifications/notificationKodi:NotificationKodi';

    /**
     * Returns true if the given object is an instance of NotificationKodi.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationKodi {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationKodi.__pulumiType;
    }

    /**
     * Always update flag.
     */
    public readonly alwaysUpdate!: pulumi.Output<boolean>;
    /**
     * Clean library flag.
     */
    public readonly cleanLibrary!: pulumi.Output<boolean>;
    /**
     * Display time.
     */
    public readonly displayTime!: pulumi.Output<number>;
    /**
     * Host.
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * Include health warnings.
     */
    public readonly includeHealthWarnings!: pulumi.Output<boolean>;
    /**
     * NotificationKodi name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notification flag.
     */
    public readonly notify!: pulumi.Output<boolean>;
    /**
     * On application update flag.
     */
    public readonly onApplicationUpdate!: pulumi.Output<boolean>;
    /**
     * On download flag.
     */
    public readonly onDownload!: pulumi.Output<boolean>;
    /**
     * On episode file delete flag.
     */
    public readonly onEpisodeFileDelete!: pulumi.Output<boolean>;
    /**
     * On episode file delete for upgrade flag.
     */
    public readonly onEpisodeFileDeleteForUpgrade!: pulumi.Output<boolean>;
    /**
     * On grab flag.
     */
    public readonly onGrab!: pulumi.Output<boolean>;
    /**
     * On health issue flag.
     */
    public readonly onHealthIssue!: pulumi.Output<boolean>;
    /**
     * On health restored flag.
     */
    public readonly onHealthRestored!: pulumi.Output<boolean>;
    /**
     * On manual interaction required flag.
     */
    public readonly onManualInteractionRequired!: pulumi.Output<boolean>;
    /**
     * On rename flag.
     */
    public readonly onRename!: pulumi.Output<boolean>;
    /**
     * On series add flag.
     */
    public readonly onSeriesAdd!: pulumi.Output<boolean>;
    /**
     * On series delete flag.
     */
    public readonly onSeriesDelete!: pulumi.Output<boolean>;
    /**
     * On upgrade flag.
     */
    public readonly onUpgrade!: pulumi.Output<boolean>;
    /**
     * Password.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * Port.
     */
    public readonly port!: pulumi.Output<number>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Update library flag.
     */
    public readonly updateLibrary!: pulumi.Output<boolean>;
    /**
     * Use SSL flag.
     */
    public readonly useSsl!: pulumi.Output<boolean>;
    /**
     * Username.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a NotificationKodi resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationKodiArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationKodiArgs | NotificationKodiState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationKodiState | undefined;
            resourceInputs["alwaysUpdate"] = state ? state.alwaysUpdate : undefined;
            resourceInputs["cleanLibrary"] = state ? state.cleanLibrary : undefined;
            resourceInputs["displayTime"] = state ? state.displayTime : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["includeHealthWarnings"] = state ? state.includeHealthWarnings : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notify"] = state ? state.notify : undefined;
            resourceInputs["onApplicationUpdate"] = state ? state.onApplicationUpdate : undefined;
            resourceInputs["onDownload"] = state ? state.onDownload : undefined;
            resourceInputs["onEpisodeFileDelete"] = state ? state.onEpisodeFileDelete : undefined;
            resourceInputs["onEpisodeFileDeleteForUpgrade"] = state ? state.onEpisodeFileDeleteForUpgrade : undefined;
            resourceInputs["onGrab"] = state ? state.onGrab : undefined;
            resourceInputs["onHealthIssue"] = state ? state.onHealthIssue : undefined;
            resourceInputs["onHealthRestored"] = state ? state.onHealthRestored : undefined;
            resourceInputs["onManualInteractionRequired"] = state ? state.onManualInteractionRequired : undefined;
            resourceInputs["onRename"] = state ? state.onRename : undefined;
            resourceInputs["onSeriesAdd"] = state ? state.onSeriesAdd : undefined;
            resourceInputs["onSeriesDelete"] = state ? state.onSeriesDelete : undefined;
            resourceInputs["onUpgrade"] = state ? state.onUpgrade : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["updateLibrary"] = state ? state.updateLibrary : undefined;
            resourceInputs["useSsl"] = state ? state.useSsl : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as NotificationKodiArgs | undefined;
            if ((!args || args.host === undefined) && !opts.urn) {
                throw new Error("Missing required property 'host'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.port === undefined) && !opts.urn) {
                throw new Error("Missing required property 'port'");
            }
            resourceInputs["alwaysUpdate"] = args ? args.alwaysUpdate : undefined;
            resourceInputs["cleanLibrary"] = args ? args.cleanLibrary : undefined;
            resourceInputs["displayTime"] = args ? args.displayTime : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["includeHealthWarnings"] = args ? args.includeHealthWarnings : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notify"] = args ? args.notify : undefined;
            resourceInputs["onApplicationUpdate"] = args ? args.onApplicationUpdate : undefined;
            resourceInputs["onDownload"] = args ? args.onDownload : undefined;
            resourceInputs["onEpisodeFileDelete"] = args ? args.onEpisodeFileDelete : undefined;
            resourceInputs["onEpisodeFileDeleteForUpgrade"] = args ? args.onEpisodeFileDeleteForUpgrade : undefined;
            resourceInputs["onGrab"] = args ? args.onGrab : undefined;
            resourceInputs["onHealthIssue"] = args ? args.onHealthIssue : undefined;
            resourceInputs["onHealthRestored"] = args ? args.onHealthRestored : undefined;
            resourceInputs["onManualInteractionRequired"] = args ? args.onManualInteractionRequired : undefined;
            resourceInputs["onRename"] = args ? args.onRename : undefined;
            resourceInputs["onSeriesAdd"] = args ? args.onSeriesAdd : undefined;
            resourceInputs["onSeriesDelete"] = args ? args.onSeriesDelete : undefined;
            resourceInputs["onUpgrade"] = args ? args.onUpgrade : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["updateLibrary"] = args ? args.updateLibrary : undefined;
            resourceInputs["useSsl"] = args ? args.useSsl : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NotificationKodi.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NotificationKodi resources.
 */
export interface NotificationKodiState {
    /**
     * Always update flag.
     */
    alwaysUpdate?: pulumi.Input<boolean>;
    /**
     * Clean library flag.
     */
    cleanLibrary?: pulumi.Input<boolean>;
    /**
     * Display time.
     */
    displayTime?: pulumi.Input<number>;
    /**
     * Host.
     */
    host?: pulumi.Input<string>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * NotificationKodi name.
     */
    name?: pulumi.Input<string>;
    /**
     * Notification flag.
     */
    notify?: pulumi.Input<boolean>;
    /**
     * On application update flag.
     */
    onApplicationUpdate?: pulumi.Input<boolean>;
    /**
     * On download flag.
     */
    onDownload?: pulumi.Input<boolean>;
    /**
     * On episode file delete flag.
     */
    onEpisodeFileDelete?: pulumi.Input<boolean>;
    /**
     * On episode file delete for upgrade flag.
     */
    onEpisodeFileDeleteForUpgrade?: pulumi.Input<boolean>;
    /**
     * On grab flag.
     */
    onGrab?: pulumi.Input<boolean>;
    /**
     * On health issue flag.
     */
    onHealthIssue?: pulumi.Input<boolean>;
    /**
     * On health restored flag.
     */
    onHealthRestored?: pulumi.Input<boolean>;
    /**
     * On manual interaction required flag.
     */
    onManualInteractionRequired?: pulumi.Input<boolean>;
    /**
     * On rename flag.
     */
    onRename?: pulumi.Input<boolean>;
    /**
     * On series add flag.
     */
    onSeriesAdd?: pulumi.Input<boolean>;
    /**
     * On series delete flag.
     */
    onSeriesDelete?: pulumi.Input<boolean>;
    /**
     * On upgrade flag.
     */
    onUpgrade?: pulumi.Input<boolean>;
    /**
     * Password.
     */
    password?: pulumi.Input<string>;
    /**
     * Port.
     */
    port?: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Update library flag.
     */
    updateLibrary?: pulumi.Input<boolean>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NotificationKodi resource.
 */
export interface NotificationKodiArgs {
    /**
     * Always update flag.
     */
    alwaysUpdate?: pulumi.Input<boolean>;
    /**
     * Clean library flag.
     */
    cleanLibrary?: pulumi.Input<boolean>;
    /**
     * Display time.
     */
    displayTime?: pulumi.Input<number>;
    /**
     * Host.
     */
    host: pulumi.Input<string>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * NotificationKodi name.
     */
    name: pulumi.Input<string>;
    /**
     * Notification flag.
     */
    notify?: pulumi.Input<boolean>;
    /**
     * On application update flag.
     */
    onApplicationUpdate?: pulumi.Input<boolean>;
    /**
     * On download flag.
     */
    onDownload?: pulumi.Input<boolean>;
    /**
     * On episode file delete flag.
     */
    onEpisodeFileDelete?: pulumi.Input<boolean>;
    /**
     * On episode file delete for upgrade flag.
     */
    onEpisodeFileDeleteForUpgrade?: pulumi.Input<boolean>;
    /**
     * On grab flag.
     */
    onGrab?: pulumi.Input<boolean>;
    /**
     * On health issue flag.
     */
    onHealthIssue?: pulumi.Input<boolean>;
    /**
     * On health restored flag.
     */
    onHealthRestored?: pulumi.Input<boolean>;
    /**
     * On manual interaction required flag.
     */
    onManualInteractionRequired?: pulumi.Input<boolean>;
    /**
     * On rename flag.
     */
    onRename?: pulumi.Input<boolean>;
    /**
     * On series add flag.
     */
    onSeriesAdd?: pulumi.Input<boolean>;
    /**
     * On series delete flag.
     */
    onSeriesDelete?: pulumi.Input<boolean>;
    /**
     * On upgrade flag.
     */
    onUpgrade?: pulumi.Input<boolean>;
    /**
     * Password.
     */
    password?: pulumi.Input<string>;
    /**
     * Port.
     */
    port: pulumi.Input<number>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Update library flag.
     */
    updateLibrary?: pulumi.Input<boolean>;
    /**
     * Use SSL flag.
     */
    useSsl?: pulumi.Input<boolean>;
    /**
     * Username.
     */
    username?: pulumi.Input<string>;
}
