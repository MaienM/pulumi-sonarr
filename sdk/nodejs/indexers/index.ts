// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

// Export members:
export { GetIndexerArgs, GetIndexerResult, GetIndexerOutputArgs } from "./getIndexer";
export const getIndexer: typeof import("./getIndexer").getIndexer = null as any;
export const getIndexerOutput: typeof import("./getIndexer").getIndexerOutput = null as any;
utilities.lazyLoad(exports, ["getIndexer","getIndexerOutput"], () => require("./getIndexer"));

export { GetIndexerConfigResult } from "./getIndexerConfig";
export const getIndexerConfig: typeof import("./getIndexerConfig").getIndexerConfig = null as any;
utilities.lazyLoad(exports, ["getIndexerConfig"], () => require("./getIndexerConfig"));

export { GetIndexersResult } from "./getIndexers";
export const getIndexers: typeof import("./getIndexers").getIndexers = null as any;
utilities.lazyLoad(exports, ["getIndexers"], () => require("./getIndexers"));

export { IndexerArgs, IndexerState } from "./indexer";
export type Indexer = import("./indexer").Indexer;
export const Indexer: typeof import("./indexer").Indexer = null as any;
utilities.lazyLoad(exports, ["Indexer"], () => require("./indexer"));

export { IndexerBroadcasthenetArgs, IndexerBroadcasthenetState } from "./indexerBroadcasthenet";
export type IndexerBroadcasthenet = import("./indexerBroadcasthenet").IndexerBroadcasthenet;
export const IndexerBroadcasthenet: typeof import("./indexerBroadcasthenet").IndexerBroadcasthenet = null as any;
utilities.lazyLoad(exports, ["IndexerBroadcasthenet"], () => require("./indexerBroadcasthenet"));

export { IndexerConfigArgs, IndexerConfigState } from "./indexerConfig";
export type IndexerConfig = import("./indexerConfig").IndexerConfig;
export const IndexerConfig: typeof import("./indexerConfig").IndexerConfig = null as any;
utilities.lazyLoad(exports, ["IndexerConfig"], () => require("./indexerConfig"));

export { IndexerFanzubArgs, IndexerFanzubState } from "./indexerFanzub";
export type IndexerFanzub = import("./indexerFanzub").IndexerFanzub;
export const IndexerFanzub: typeof import("./indexerFanzub").IndexerFanzub = null as any;
utilities.lazyLoad(exports, ["IndexerFanzub"], () => require("./indexerFanzub"));

export { IndexerFilelistArgs, IndexerFilelistState } from "./indexerFilelist";
export type IndexerFilelist = import("./indexerFilelist").IndexerFilelist;
export const IndexerFilelist: typeof import("./indexerFilelist").IndexerFilelist = null as any;
utilities.lazyLoad(exports, ["IndexerFilelist"], () => require("./indexerFilelist"));

export { IndexerHdbitsArgs, IndexerHdbitsState } from "./indexerHdbits";
export type IndexerHdbits = import("./indexerHdbits").IndexerHdbits;
export const IndexerHdbits: typeof import("./indexerHdbits").IndexerHdbits = null as any;
utilities.lazyLoad(exports, ["IndexerHdbits"], () => require("./indexerHdbits"));

export { IndexerIptorrentsArgs, IndexerIptorrentsState } from "./indexerIptorrents";
export type IndexerIptorrents = import("./indexerIptorrents").IndexerIptorrents;
export const IndexerIptorrents: typeof import("./indexerIptorrents").IndexerIptorrents = null as any;
utilities.lazyLoad(exports, ["IndexerIptorrents"], () => require("./indexerIptorrents"));

export { IndexerNewznabArgs, IndexerNewznabState } from "./indexerNewznab";
export type IndexerNewznab = import("./indexerNewznab").IndexerNewznab;
export const IndexerNewznab: typeof import("./indexerNewznab").IndexerNewznab = null as any;
utilities.lazyLoad(exports, ["IndexerNewznab"], () => require("./indexerNewznab"));

export { IndexerNyaaArgs, IndexerNyaaState } from "./indexerNyaa";
export type IndexerNyaa = import("./indexerNyaa").IndexerNyaa;
export const IndexerNyaa: typeof import("./indexerNyaa").IndexerNyaa = null as any;
utilities.lazyLoad(exports, ["IndexerNyaa"], () => require("./indexerNyaa"));

export { IndexerRarbgArgs, IndexerRarbgState } from "./indexerRarbg";
export type IndexerRarbg = import("./indexerRarbg").IndexerRarbg;
export const IndexerRarbg: typeof import("./indexerRarbg").IndexerRarbg = null as any;
utilities.lazyLoad(exports, ["IndexerRarbg"], () => require("./indexerRarbg"));

export { IndexerTorrentRssArgs, IndexerTorrentRssState } from "./indexerTorrentRss";
export type IndexerTorrentRss = import("./indexerTorrentRss").IndexerTorrentRss;
export const IndexerTorrentRss: typeof import("./indexerTorrentRss").IndexerTorrentRss = null as any;
utilities.lazyLoad(exports, ["IndexerTorrentRss"], () => require("./indexerTorrentRss"));

export { IndexerTorrentleechArgs, IndexerTorrentleechState } from "./indexerTorrentleech";
export type IndexerTorrentleech = import("./indexerTorrentleech").IndexerTorrentleech;
export const IndexerTorrentleech: typeof import("./indexerTorrentleech").IndexerTorrentleech = null as any;
utilities.lazyLoad(exports, ["IndexerTorrentleech"], () => require("./indexerTorrentleech"));

export { IndexerTorznabArgs, IndexerTorznabState } from "./indexerTorznab";
export type IndexerTorznab = import("./indexerTorznab").IndexerTorznab;
export const IndexerTorznab: typeof import("./indexerTorznab").IndexerTorznab = null as any;
utilities.lazyLoad(exports, ["IndexerTorznab"], () => require("./indexerTorznab"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "sonarr:Indexers/indexer:Indexer":
                return new Indexer(name, <any>undefined, { urn })
            case "sonarr:Indexers/indexerBroadcasthenet:IndexerBroadcasthenet":
                return new IndexerBroadcasthenet(name, <any>undefined, { urn })
            case "sonarr:Indexers/indexerConfig:IndexerConfig":
                return new IndexerConfig(name, <any>undefined, { urn })
            case "sonarr:Indexers/indexerFanzub:IndexerFanzub":
                return new IndexerFanzub(name, <any>undefined, { urn })
            case "sonarr:Indexers/indexerFilelist:IndexerFilelist":
                return new IndexerFilelist(name, <any>undefined, { urn })
            case "sonarr:Indexers/indexerHdbits:IndexerHdbits":
                return new IndexerHdbits(name, <any>undefined, { urn })
            case "sonarr:Indexers/indexerIptorrents:IndexerIptorrents":
                return new IndexerIptorrents(name, <any>undefined, { urn })
            case "sonarr:Indexers/indexerNewznab:IndexerNewznab":
                return new IndexerNewznab(name, <any>undefined, { urn })
            case "sonarr:Indexers/indexerNyaa:IndexerNyaa":
                return new IndexerNyaa(name, <any>undefined, { urn })
            case "sonarr:Indexers/indexerRarbg:IndexerRarbg":
                return new IndexerRarbg(name, <any>undefined, { urn })
            case "sonarr:Indexers/indexerTorrentRss:IndexerTorrentRss":
                return new IndexerTorrentRss(name, <any>undefined, { urn })
            case "sonarr:Indexers/indexerTorrentleech:IndexerTorrentleech":
                return new IndexerTorrentleech(name, <any>undefined, { urn })
            case "sonarr:Indexers/indexerTorznab:IndexerTorznab":
                return new IndexerTorznab(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("sonarr", "Indexers/indexer", _module)
pulumi.runtime.registerResourceModule("sonarr", "Indexers/indexerBroadcasthenet", _module)
pulumi.runtime.registerResourceModule("sonarr", "Indexers/indexerConfig", _module)
pulumi.runtime.registerResourceModule("sonarr", "Indexers/indexerFanzub", _module)
pulumi.runtime.registerResourceModule("sonarr", "Indexers/indexerFilelist", _module)
pulumi.runtime.registerResourceModule("sonarr", "Indexers/indexerHdbits", _module)
pulumi.runtime.registerResourceModule("sonarr", "Indexers/indexerIptorrents", _module)
pulumi.runtime.registerResourceModule("sonarr", "Indexers/indexerNewznab", _module)
pulumi.runtime.registerResourceModule("sonarr", "Indexers/indexerNyaa", _module)
pulumi.runtime.registerResourceModule("sonarr", "Indexers/indexerRarbg", _module)
pulumi.runtime.registerResourceModule("sonarr", "Indexers/indexerTorrentRss", _module)
pulumi.runtime.registerResourceModule("sonarr", "Indexers/indexerTorrentleech", _module)
pulumi.runtime.registerResourceModule("sonarr", "Indexers/indexerTorznab", _module)
