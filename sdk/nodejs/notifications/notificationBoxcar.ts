// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->Notification Boxcar resource.
 * For more information refer to [Notification](https://wiki.servarr.com/sonarr/settings#connect) and [Boxcar](https://wiki.servarr.com/sonarr/supported#boxcar).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@maienm/pulumi-sonarr";
 *
 * const example = new sonarr.notifications.NotificationBoxcar("example", {
 *     includeHealthWarnings: false,
 *     name: "Example",
 *     onApplicationUpdate: false,
 *     onDownload: true,
 *     onEpisodeFileDelete: false,
 *     onEpisodeFileDeleteForUpgrade: true,
 *     onGrab: false,
 *     onHealthIssue: false,
 *     onSeriesDelete: false,
 *     onUpgrade: true,
 *     token: "Token",
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import sonarr:Notifications/notificationBoxcar:NotificationBoxcar example 1
 * ```
 */
export class NotificationBoxcar extends pulumi.CustomResource {
    /**
     * Get an existing NotificationBoxcar resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationBoxcarState, opts?: pulumi.CustomResourceOptions): NotificationBoxcar {
        return new NotificationBoxcar(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sonarr:Notifications/notificationBoxcar:NotificationBoxcar';

    /**
     * Returns true if the given object is an instance of NotificationBoxcar.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationBoxcar {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationBoxcar.__pulumiType;
    }

    /**
     * Include health warnings.
     */
    public readonly includeHealthWarnings!: pulumi.Output<boolean>;
    /**
     * NotificationBoxcar name.
     */
    public readonly name!: pulumi.Output<string>;
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
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;
    /**
     * Token.
     */
    public readonly token!: pulumi.Output<string>;

    /**
     * Create a NotificationBoxcar resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationBoxcarArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationBoxcarArgs | NotificationBoxcarState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationBoxcarState | undefined;
            resourceInputs["includeHealthWarnings"] = state ? state.includeHealthWarnings : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["onApplicationUpdate"] = state ? state.onApplicationUpdate : undefined;
            resourceInputs["onDownload"] = state ? state.onDownload : undefined;
            resourceInputs["onEpisodeFileDelete"] = state ? state.onEpisodeFileDelete : undefined;
            resourceInputs["onEpisodeFileDeleteForUpgrade"] = state ? state.onEpisodeFileDeleteForUpgrade : undefined;
            resourceInputs["onGrab"] = state ? state.onGrab : undefined;
            resourceInputs["onHealthIssue"] = state ? state.onHealthIssue : undefined;
            resourceInputs["onHealthRestored"] = state ? state.onHealthRestored : undefined;
            resourceInputs["onManualInteractionRequired"] = state ? state.onManualInteractionRequired : undefined;
            resourceInputs["onSeriesAdd"] = state ? state.onSeriesAdd : undefined;
            resourceInputs["onSeriesDelete"] = state ? state.onSeriesDelete : undefined;
            resourceInputs["onUpgrade"] = state ? state.onUpgrade : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["token"] = state ? state.token : undefined;
        } else {
            const args = argsOrState as NotificationBoxcarArgs | undefined;
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.token === undefined) && !opts.urn) {
                throw new Error("Missing required property 'token'");
            }
            resourceInputs["includeHealthWarnings"] = args ? args.includeHealthWarnings : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["onApplicationUpdate"] = args ? args.onApplicationUpdate : undefined;
            resourceInputs["onDownload"] = args ? args.onDownload : undefined;
            resourceInputs["onEpisodeFileDelete"] = args ? args.onEpisodeFileDelete : undefined;
            resourceInputs["onEpisodeFileDeleteForUpgrade"] = args ? args.onEpisodeFileDeleteForUpgrade : undefined;
            resourceInputs["onGrab"] = args ? args.onGrab : undefined;
            resourceInputs["onHealthIssue"] = args ? args.onHealthIssue : undefined;
            resourceInputs["onHealthRestored"] = args ? args.onHealthRestored : undefined;
            resourceInputs["onManualInteractionRequired"] = args ? args.onManualInteractionRequired : undefined;
            resourceInputs["onSeriesAdd"] = args ? args.onSeriesAdd : undefined;
            resourceInputs["onSeriesDelete"] = args ? args.onSeriesDelete : undefined;
            resourceInputs["onUpgrade"] = args ? args.onUpgrade : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["token"] = args?.token ? pulumi.secret(args.token) : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["token"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NotificationBoxcar.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NotificationBoxcar resources.
 */
export interface NotificationBoxcarState {
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * NotificationBoxcar name.
     */
    name?: pulumi.Input<string>;
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
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Token.
     */
    token?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NotificationBoxcar resource.
 */
export interface NotificationBoxcarArgs {
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * NotificationBoxcar name.
     */
    name: pulumi.Input<string>;
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
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Token.
     */
    token: pulumi.Input<string>;
}
