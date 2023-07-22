// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * <!-- subcategory:Notifications -->Notification Trakt resource.
 * For more information refer to [Notification](https://wiki.servarr.com/sonarr/settings#connect) and [Trakt](https://wiki.servarr.com/sonarr/supported#trakt).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarr from "@maienm/pulumi-sonarr";
 *
 * const example = new sonarr.notifications.NotificationTrakt("example", {
 *     accessToken: "AuthTOKEN",
 *     authUser: "User",
 *     includeHealthWarnings: false,
 *     name: "Example",
 *     onDownload: true,
 *     onEpisodeFileDelete: false,
 *     onEpisodeFileDeleteForUpgrade: true,
 *     onSeriesDelete: false,
 *     onUpgrade: true,
 * });
 * ```
 *
 * ## Import
 *
 * import using the API/UI ID
 *
 * ```sh
 *  $ pulumi import sonarr:Notifications/notificationTrakt:NotificationTrakt example 1
 * ```
 */
export class NotificationTrakt extends pulumi.CustomResource {
    /**
     * Get an existing NotificationTrakt resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationTraktState, opts?: pulumi.CustomResourceOptions): NotificationTrakt {
        return new NotificationTrakt(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sonarr:Notifications/notificationTrakt:NotificationTrakt';

    /**
     * Returns true if the given object is an instance of NotificationTrakt.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationTrakt {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationTrakt.__pulumiType;
    }

    /**
     * Access Token.
     */
    public readonly accessToken!: pulumi.Output<string>;
    /**
     * Auth user.
     */
    public readonly authUser!: pulumi.Output<string>;
    /**
     * expires.
     */
    public /*out*/ readonly expires!: pulumi.Output<string>;
    /**
     * Include health warnings.
     */
    public readonly includeHealthWarnings!: pulumi.Output<boolean>;
    /**
     * NotificationTrakt name.
     */
    public readonly name!: pulumi.Output<string>;
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
     * Access Token.
     */
    public readonly refreshToken!: pulumi.Output<string>;
    /**
     * List of associated tags.
     */
    public readonly tags!: pulumi.Output<number[]>;

    /**
     * Create a NotificationTrakt resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationTraktArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationTraktArgs | NotificationTraktState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationTraktState | undefined;
            resourceInputs["accessToken"] = state ? state.accessToken : undefined;
            resourceInputs["authUser"] = state ? state.authUser : undefined;
            resourceInputs["expires"] = state ? state.expires : undefined;
            resourceInputs["includeHealthWarnings"] = state ? state.includeHealthWarnings : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["onDownload"] = state ? state.onDownload : undefined;
            resourceInputs["onEpisodeFileDelete"] = state ? state.onEpisodeFileDelete : undefined;
            resourceInputs["onEpisodeFileDeleteForUpgrade"] = state ? state.onEpisodeFileDeleteForUpgrade : undefined;
            resourceInputs["onSeriesAdd"] = state ? state.onSeriesAdd : undefined;
            resourceInputs["onSeriesDelete"] = state ? state.onSeriesDelete : undefined;
            resourceInputs["onUpgrade"] = state ? state.onUpgrade : undefined;
            resourceInputs["refreshToken"] = state ? state.refreshToken : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as NotificationTraktArgs | undefined;
            if ((!args || args.accessToken === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessToken'");
            }
            if ((!args || args.authUser === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authUser'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            resourceInputs["accessToken"] = args?.accessToken ? pulumi.secret(args.accessToken) : undefined;
            resourceInputs["authUser"] = args ? args.authUser : undefined;
            resourceInputs["includeHealthWarnings"] = args ? args.includeHealthWarnings : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["onDownload"] = args ? args.onDownload : undefined;
            resourceInputs["onEpisodeFileDelete"] = args ? args.onEpisodeFileDelete : undefined;
            resourceInputs["onEpisodeFileDeleteForUpgrade"] = args ? args.onEpisodeFileDeleteForUpgrade : undefined;
            resourceInputs["onSeriesAdd"] = args ? args.onSeriesAdd : undefined;
            resourceInputs["onSeriesDelete"] = args ? args.onSeriesDelete : undefined;
            resourceInputs["onUpgrade"] = args ? args.onUpgrade : undefined;
            resourceInputs["refreshToken"] = args?.refreshToken ? pulumi.secret(args.refreshToken) : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["expires"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accessToken", "refreshToken"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NotificationTrakt.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NotificationTrakt resources.
 */
export interface NotificationTraktState {
    /**
     * Access Token.
     */
    accessToken?: pulumi.Input<string>;
    /**
     * Auth user.
     */
    authUser?: pulumi.Input<string>;
    /**
     * expires.
     */
    expires?: pulumi.Input<string>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * NotificationTrakt name.
     */
    name?: pulumi.Input<string>;
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
     * Access Token.
     */
    refreshToken?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a NotificationTrakt resource.
 */
export interface NotificationTraktArgs {
    /**
     * Access Token.
     */
    accessToken: pulumi.Input<string>;
    /**
     * Auth user.
     */
    authUser: pulumi.Input<string>;
    /**
     * Include health warnings.
     */
    includeHealthWarnings?: pulumi.Input<boolean>;
    /**
     * NotificationTrakt name.
     */
    name: pulumi.Input<string>;
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
     * Access Token.
     */
    refreshToken?: pulumi.Input<string>;
    /**
     * List of associated tags.
     */
    tags?: pulumi.Input<pulumi.Input<number>[]>;
}
