// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));


// Export sub-modules:
import * as config from "./config";
import * as downloadclients from "./downloadclients";
import * as importlists from "./importlists";
import * as indexers from "./indexers";
import * as languages from "./languages";
import * as mediamanagement from "./mediamanagement";
import * as metadata from "./metadata";
import * as notifications from "./notifications";
import * as profiles from "./profiles";
import * as series from "./series";
import * as tags from "./tags";
import * as types from "./types";

export {
    config,
    downloadclients,
    importlists,
    indexers,
    languages,
    mediamanagement,
    metadata,
    notifications,
    profiles,
    series,
    tags,
    types,
};
pulumi.runtime.registerResourcePackage("sonarr", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:sonarr") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
