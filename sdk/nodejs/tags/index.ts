// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

// Export members:
export { AutoTagArgs, AutoTagState } from "./autoTag";
export type AutoTag = import("./autoTag").AutoTag;
export const AutoTag: typeof import("./autoTag").AutoTag = null as any;
utilities.lazyLoad(exports, ["AutoTag"], () => require("./autoTag"));

export { GetAutoTagArgs, GetAutoTagResult, GetAutoTagOutputArgs } from "./getAutoTag";
export const getAutoTag: typeof import("./getAutoTag").getAutoTag = null as any;
export const getAutoTagOutput: typeof import("./getAutoTag").getAutoTagOutput = null as any;
utilities.lazyLoad(exports, ["getAutoTag","getAutoTagOutput"], () => require("./getAutoTag"));

export { GetAutoTagConditionArgs, GetAutoTagConditionResult, GetAutoTagConditionOutputArgs } from "./getAutoTagCondition";
export const getAutoTagCondition: typeof import("./getAutoTagCondition").getAutoTagCondition = null as any;
export const getAutoTagConditionOutput: typeof import("./getAutoTagCondition").getAutoTagConditionOutput = null as any;
utilities.lazyLoad(exports, ["getAutoTagCondition","getAutoTagConditionOutput"], () => require("./getAutoTagCondition"));

export { GetAutoTagConditionGenresArgs, GetAutoTagConditionGenresResult, GetAutoTagConditionGenresOutputArgs } from "./getAutoTagConditionGenres";
export const getAutoTagConditionGenres: typeof import("./getAutoTagConditionGenres").getAutoTagConditionGenres = null as any;
export const getAutoTagConditionGenresOutput: typeof import("./getAutoTagConditionGenres").getAutoTagConditionGenresOutput = null as any;
utilities.lazyLoad(exports, ["getAutoTagConditionGenres","getAutoTagConditionGenresOutput"], () => require("./getAutoTagConditionGenres"));

export { GetAutoTagConditionRootFolderArgs, GetAutoTagConditionRootFolderResult, GetAutoTagConditionRootFolderOutputArgs } from "./getAutoTagConditionRootFolder";
export const getAutoTagConditionRootFolder: typeof import("./getAutoTagConditionRootFolder").getAutoTagConditionRootFolder = null as any;
export const getAutoTagConditionRootFolderOutput: typeof import("./getAutoTagConditionRootFolder").getAutoTagConditionRootFolderOutput = null as any;
utilities.lazyLoad(exports, ["getAutoTagConditionRootFolder","getAutoTagConditionRootFolderOutput"], () => require("./getAutoTagConditionRootFolder"));

export { GetAutoTagConditionSeriesTypeArgs, GetAutoTagConditionSeriesTypeResult, GetAutoTagConditionSeriesTypeOutputArgs } from "./getAutoTagConditionSeriesType";
export const getAutoTagConditionSeriesType: typeof import("./getAutoTagConditionSeriesType").getAutoTagConditionSeriesType = null as any;
export const getAutoTagConditionSeriesTypeOutput: typeof import("./getAutoTagConditionSeriesType").getAutoTagConditionSeriesTypeOutput = null as any;
utilities.lazyLoad(exports, ["getAutoTagConditionSeriesType","getAutoTagConditionSeriesTypeOutput"], () => require("./getAutoTagConditionSeriesType"));

export { GetAutoTagsResult } from "./getAutoTags";
export const getAutoTags: typeof import("./getAutoTags").getAutoTags = null as any;
utilities.lazyLoad(exports, ["getAutoTags"], () => require("./getAutoTags"));

export { GetRemotePathMappingArgs, GetRemotePathMappingResult, GetRemotePathMappingOutputArgs } from "./getRemotePathMapping";
export const getRemotePathMapping: typeof import("./getRemotePathMapping").getRemotePathMapping = null as any;
export const getRemotePathMappingOutput: typeof import("./getRemotePathMapping").getRemotePathMappingOutput = null as any;
utilities.lazyLoad(exports, ["getRemotePathMapping","getRemotePathMappingOutput"], () => require("./getRemotePathMapping"));

export { GetRemotePathMappingsResult } from "./getRemotePathMappings";
export const getRemotePathMappings: typeof import("./getRemotePathMappings").getRemotePathMappings = null as any;
utilities.lazyLoad(exports, ["getRemotePathMappings"], () => require("./getRemotePathMappings"));

export { GetSystemStatusResult } from "./getSystemStatus";
export const getSystemStatus: typeof import("./getSystemStatus").getSystemStatus = null as any;
utilities.lazyLoad(exports, ["getSystemStatus"], () => require("./getSystemStatus"));

export { GetTagArgs, GetTagResult, GetTagOutputArgs } from "./getTag";
export const getTag: typeof import("./getTag").getTag = null as any;
export const getTagOutput: typeof import("./getTag").getTagOutput = null as any;
utilities.lazyLoad(exports, ["getTag","getTagOutput"], () => require("./getTag"));

export { GetTagsResult } from "./getTags";
export const getTags: typeof import("./getTags").getTags = null as any;
utilities.lazyLoad(exports, ["getTags"], () => require("./getTags"));

export { TagArgs, TagState } from "./tag";
export type Tag = import("./tag").Tag;
export const Tag: typeof import("./tag").Tag = null as any;
utilities.lazyLoad(exports, ["Tag"], () => require("./tag"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "sonarr:Tags/autoTag:AutoTag":
                return new AutoTag(name, <any>undefined, { urn })
            case "sonarr:Tags/tag:Tag":
                return new Tag(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("sonarr", "Tags/autoTag", _module)
pulumi.runtime.registerResourceModule("sonarr", "Tags/tag", _module)
