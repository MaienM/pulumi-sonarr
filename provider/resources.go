// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package sonarr

import (
	_ "embed"
	"fmt"
	"path/filepath"
	"strings"

	"github.com/MaienM/pulumi-sonarr/provider/pkg/version"
	shimprovider "github.com/devopsarr/terraform-provider-sonarr/shim"
	"github.com/ettle/strcase"
	pf "github.com/pulumi/pulumi-terraform-bridge/pf/tfbridge"
	"github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfbridge"
	"github.com/pulumi/pulumi/sdk/v3/go/common/tokens"
	"github.com/pulumi/pulumi/sdk/v3/go/common/util/contract"
)

//go:embed cmd/pulumi-resource-sonarr/bridge-metadata.json
var bridgeMetadata []byte

// all of the token components used below.
const (
	// This variable controls the default name of the package in the package
	mainMod            = "index" // the sonarr module
	modDownloadClients = "DownloadClients"
	modImportLists     = "ImportLists"
	modIndexers        = "Indexers"
	modMediaManagement = "MediaManagement"
	modMetadata        = "Metadata"
	modNotifications   = "Notifications"
	modProfiles        = "Profiles"
	modSeries          = "Series"
	modStatus          = "Status"
	modTags            = "Tags"
)

func convertName(name string) string {
	idx := strings.Index(name, "_")
	contract.Assertf(idx > 0 && idx < len(name)-1, "Invalid snake case name %s", name)
	name = name[idx+1:]
	contract.Assertf(len(name) > 0, "Invalid snake case name %s", name)
	return strcase.ToPascal(name)
}

func makeDataSource(mod string, name string) tokens.ModuleMember {
	name = convertName(name)
	return tfbridge.MakeDataSource("sonarr", mod, "get"+name)
}

func makeResource(mod string, res string) tokens.Type {
	return tfbridge.MakeResource("sonarr", mod, convertName(res))
}

// Provider returns additional overlaid schema and metadata associated with the provider..
func Provider() tfbridge.ProviderInfo {
	// Instantiate the Terraform provider
	p := pf.ShimProvider(shimprovider.NewProvider(version.Version)())

	// Create a Pulumi provider mapping
	return tfbridge.ProviderInfo{
		Name: "sonarr",
		P:    p,
		// DisplayName is a way to be able to change the casing of the provider
		// name when being displayed on the Pulumi registry
		DisplayName: "sonarr",
		// The default publisher for all packages is Pulumi.
		// Change this to your personal name (or a company name) that you
		// would like to be shown in the Pulumi Registry if this package is published
		// there.
		Publisher: "MaienM",
		// LogoURL is optional but useful to help identify your package in the Pulumi Registry
		// if this package is published there.
		//
		// You may host a logo on a domain you control or add an SVG logo for your package
		// in your repository and use the raw content URL for that file as your logo URL.
		LogoURL: "https://raw.githubusercontent.com/MaienM/pulumi-sonarr/main/docs/sonarr.png",
		// PluginDownloadURL is an optional URL used to download the Provider
		// for use in Pulumi programs
		// e.g https://github.com/org/pulumi-provider-name/releases/
		PluginDownloadURL: "github://api.github.com/MaienM/pulumi-sonarr",
		Description:       "A Pulumi package for creating and managing a sonarr application.",
		// category/cloud tag helps with categorizing the package in the Pulumi Registry.
		// For all available categories, see `Keywords` in
		// https://www.pulumi.com/docs/guides/pulumi-packages/schema/#package.
		Keywords: []string{
			"pulumi",
			"sonarr",
			"category/infrastructure",
		},
		License:    "Apache-2.0",
		Homepage:   "https://github.com/MaienM/pulumi-sonarr",
		Repository: "https://github.com/MaienM/pulumi-sonarr",
		// The GitHub Org for the provider - defaults to `terraform-providers`. Note that this
		// should match the TF provider module's require directive, not any replace directives.
		Version:      version.Version,
		GitHubOrg:    "devopsarr",
		MetadataInfo: tfbridge.NewProviderMetadata(bridgeMetadata),
		Config:       map[string]*tfbridge.SchemaInfo{
			// Add any required configuration here, or remove the example below if
			// no additional points are required.
			// "region": {
			// 	Type: tfbridge.MakeType("region", "Region"),
			// 	Default: &tfbridge.DefaultInfo{
			// 		EnvVars: []string{"AWS_REGION", "AWS_DEFAULT_REGION"},
			// 	},
			// },
		},
		Resources: map[string]*tfbridge.ResourceInfo{
			"sonarr_download_client":                          {Tok: makeResource(modDownloadClients, "sonarr_download_client")},
			"sonarr_download_client_aria2":                    {Tok: makeResource(modDownloadClients, "sonarr_download_client_aria2")},
			"sonarr_download_client_config":                   {Tok: makeResource(modDownloadClients, "sonarr_download_client_config")},
			"sonarr_download_client_deluge":                   {Tok: makeResource(modDownloadClients, "sonarr_download_client_deluge")},
			"sonarr_download_client_flood":                    {Tok: makeResource(modDownloadClients, "sonarr_download_client_flood")},
			"sonarr_download_client_hadouken":                 {Tok: makeResource(modDownloadClients, "sonarr_download_client_hadouken")},
			"sonarr_download_client_nzbget":                   {Tok: makeResource(modDownloadClients, "sonarr_download_client_nzbget")},
			"sonarr_download_client_nzbvortex":                {Tok: makeResource(modDownloadClients, "sonarr_download_client_nzbvortex")},
			"sonarr_download_client_pneumatic":                {Tok: makeResource(modDownloadClients, "sonarr_download_client_pneumatic")},
			"sonarr_download_client_qbittorrent":              {Tok: makeResource(modDownloadClients, "sonarr_download_client_qbittorrent")},
			"sonarr_download_client_rtorrent":                 {Tok: makeResource(modDownloadClients, "sonarr_download_client_rtorrent")},
			"sonarr_download_client_sabnzbd":                  {Tok: makeResource(modDownloadClients, "sonarr_download_client_sabnzbd")},
			"sonarr_download_client_torrent_blackhole":        {Tok: makeResource(modDownloadClients, "sonarr_download_client_torrent_blackhole")},
			"sonarr_download_client_torrent_download_station": {Tok: makeResource(modDownloadClients, "sonarr_download_client_torrent_download_station")},
			"sonarr_download_client_transmission":             {Tok: makeResource(modDownloadClients, "sonarr_download_client_transmission")},
			"sonarr_download_client_usenet_blackhole":         {Tok: makeResource(modDownloadClients, "sonarr_download_client_usenet_blackhole")},
			"sonarr_download_client_usenet_download_station":  {Tok: makeResource(modDownloadClients, "sonarr_download_client_usenet_download_station")},
			"sonarr_download_client_utorrent":                 {Tok: makeResource(modDownloadClients, "sonarr_download_client_utorrent")},
			"sonarr_download_client_vuze":                     {Tok: makeResource(modDownloadClients, "sonarr_download_client_vuze")},
			"sonarr_remote_path_mapping":                      {Tok: makeResource(modDownloadClients, "sonarr_remote_path_mapping")},

			"sonarr_import_list":               {Tok: makeResource(modImportLists, "sonarr_import_list")},
			"sonarr_import_list_custom":        {Tok: makeResource(modImportLists, "sonarr_import_list_custom")},
			"sonarr_import_list_exclusion":     {Tok: makeResource(modImportLists, "sonarr_import_list_exclusion")},
			"sonarr_import_list_imdb":          {Tok: makeResource(modImportLists, "sonarr_import_list_imdb")},
			"sonarr_import_list_plex":          {Tok: makeResource(modImportLists, "sonarr_import_list_plex")},
			"sonarr_import_list_plex_rss":      {Tok: makeResource(modImportLists, "sonarr_import_list_plex_rss")},
			"sonarr_import_list_simkl_user":    {Tok: makeResource(modImportLists, "sonarr_import_list_simkl_user")},
			"sonarr_import_list_sonarr":        {Tok: makeResource(modImportLists, "sonarr_import_list_sonarr")},
			"sonarr_import_list_trakt_list":    {Tok: makeResource(modImportLists, "sonarr_import_list_trakt_list")},
			"sonarr_import_list_trakt_popular": {Tok: makeResource(modImportLists, "sonarr_import_list_trakt_popular")},
			"sonarr_import_list_trakt_user":    {Tok: makeResource(modImportLists, "sonarr_import_list_trakt_user")},

			"sonarr_indexer":                {Tok: makeResource(modIndexers, "sonarr_indexer")},
			"sonarr_indexer_broadcasthenet": {Tok: makeResource(modIndexers, "sonarr_indexer_broadcasthenet")},
			"sonarr_indexer_config":         {Tok: makeResource(modIndexers, "sonarr_indexer_config")},
			"sonarr_indexer_fanzub":         {Tok: makeResource(modIndexers, "sonarr_indexer_fanzub")},
			"sonarr_indexer_filelist":       {Tok: makeResource(modIndexers, "sonarr_indexer_filelist")},
			"sonarr_indexer_hdbits":         {Tok: makeResource(modIndexers, "sonarr_indexer_hdbits")},
			"sonarr_indexer_iptorrents":     {Tok: makeResource(modIndexers, "sonarr_indexer_iptorrents")},
			"sonarr_indexer_newznab":        {Tok: makeResource(modIndexers, "sonarr_indexer_newznab")},
			"sonarr_indexer_nyaa":           {Tok: makeResource(modIndexers, "sonarr_indexer_nyaa")},
			"sonarr_indexer_torrent_rss":    {Tok: makeResource(modIndexers, "sonarr_indexer_torrent_rss")},
			"sonarr_indexer_torrentleech":   {Tok: makeResource(modIndexers, "sonarr_indexer_torrentleech")},
			"sonarr_indexer_torznab":        {Tok: makeResource(modIndexers, "sonarr_indexer_torznab")},

			"sonarr_media_management": {Tok: makeResource(modMediaManagement, "sonarr_media_management")},
			"sonarr_naming":           {Tok: makeResource(modMediaManagement, "sonarr_naming")},
			"sonarr_root_folder":      {Tok: makeResource(modMediaManagement, "sonarr_root_folder")},

			"sonarr_metadata":         {Tok: makeResource(modMetadata, "sonarr_metadata")},
			"sonarr_metadata_kodi":    {Tok: makeResource(modMetadata, "sonarr_metadata_kodi")},
			"sonarr_metadata_roksbox": {Tok: makeResource(modMetadata, "sonarr_metadata_roksbox")},
			"sonarr_metadata_wdtv":    {Tok: makeResource(modMetadata, "sonarr_metadata_wdtv")},

			"sonarr_notification":                  {Tok: makeResource(modNotifications, "sonarr_notification")},
			"sonarr_notification_apprise":          {Tok: makeResource(modNotifications, "sonarr_notification_apprise")},
			"sonarr_notification_boxcar":           {Tok: makeResource(modNotifications, "sonarr_notification_boxcar")},
			"sonarr_notification_custom_script":    {Tok: makeResource(modNotifications, "sonarr_notification_custom_script")},
			"sonarr_notification_discord":          {Tok: makeResource(modNotifications, "sonarr_notification_discord")},
			"sonarr_notification_email":            {Tok: makeResource(modNotifications, "sonarr_notification_email")},
			"sonarr_notification_emby":             {Tok: makeResource(modNotifications, "sonarr_notification_emby")},
			"sonarr_notification_gotify":           {Tok: makeResource(modNotifications, "sonarr_notification_gotify")},
			"sonarr_notification_join":             {Tok: makeResource(modNotifications, "sonarr_notification_join")},
			"sonarr_notification_kodi":             {Tok: makeResource(modNotifications, "sonarr_notification_kodi")},
			"sonarr_notification_mailgun":          {Tok: makeResource(modNotifications, "sonarr_notification_mailgun")},
			"sonarr_notification_ntfy":             {Tok: makeResource(modNotifications, "sonarr_notification_ntfy")},
			"sonarr_notification_plex":             {Tok: makeResource(modNotifications, "sonarr_notification_plex")},
			"sonarr_notification_prowl":            {Tok: makeResource(modNotifications, "sonarr_notification_prowl")},
			"sonarr_notification_pushbullet":       {Tok: makeResource(modNotifications, "sonarr_notification_pushbullet")},
			"sonarr_notification_pushover":         {Tok: makeResource(modNotifications, "sonarr_notification_pushover")},
			"sonarr_notification_sendgrid":         {Tok: makeResource(modNotifications, "sonarr_notification_sendgrid")},
			"sonarr_notification_signal":           {Tok: makeResource(modNotifications, "sonarr_notification_signal")},
			"sonarr_notification_simplepush":       {Tok: makeResource(modNotifications, "sonarr_notification_simplepush")},
			"sonarr_notification_slack":            {Tok: makeResource(modNotifications, "sonarr_notification_slack")},
			"sonarr_notification_synology_indexer": {Tok: makeResource(modNotifications, "sonarr_notification_synology_indexer")},
			"sonarr_notification_telegram":         {Tok: makeResource(modNotifications, "sonarr_notification_telegram")},
			"sonarr_notification_trakt":            {Tok: makeResource(modNotifications, "sonarr_notification_trakt")},
			"sonarr_notification_twitter":          {Tok: makeResource(modNotifications, "sonarr_notification_twitter")},
			"sonarr_notification_webhook":          {Tok: makeResource(modNotifications, "sonarr_notification_webhook")},

			"sonarr_custom_format":      {Tok: makeResource(modProfiles, "sonarr_custom_format")},
			"sonarr_delay_profile":      {Tok: makeResource(modProfiles, "sonarr_delay_profile")},
			"sonarr_quality_definition": {Tok: makeResource(modProfiles, "sonarr_quality_definition")},
			"sonarr_quality_profile":    {Tok: makeResource(modProfiles, "sonarr_quality_profile")},
			"sonarr_release_profile":    {Tok: makeResource(modProfiles, "sonarr_release_profile")},

			"sonarr_series": {Tok: makeResource(modSeries, "sonarr_series")},

			"sonarr_auto_tag": {Tok: makeResource(modTags, "sonarr_auto_tag")},
			"sonarr_tag":      {Tok: makeResource(modTags, "sonarr_tag")},
		},
		DataSources: map[string]*tfbridge.DataSourceInfo{
			"sonarr_download_client":        {Tok: makeDataSource(modDownloadClients, "sonarr_download_client")},
			"sonarr_download_client_config": {Tok: makeDataSource(modDownloadClients, "sonarr_download_client_config")},
			"sonarr_download_clients":       {Tok: makeDataSource(modDownloadClients, "sonarr_download_clients")},

			"sonarr_import_list":            {Tok: makeDataSource(modImportLists, "sonarr_import_list")},
			"sonarr_import_list_exclusion":  {Tok: makeDataSource(modImportLists, "sonarr_import_list_exclusion")},
			"sonarr_import_list_exclusions": {Tok: makeDataSource(modImportLists, "sonarr_import_list_exclusions")},
			"sonarr_import_lists":           {Tok: makeDataSource(modImportLists, "sonarr_import_lists")},

			"sonarr_indexer":        {Tok: makeDataSource(modIndexers, "sonarr_indexer")},
			"sonarr_indexer_config": {Tok: makeDataSource(modIndexers, "sonarr_indexer_config")},
			"sonarr_indexers":       {Tok: makeDataSource(modIndexers, "sonarr_indexers")},

			"sonarr_media_management": {Tok: makeDataSource(modMediaManagement, "sonarr_media_management")},
			"sonarr_naming":           {Tok: makeDataSource(modMediaManagement, "sonarr_naming")},
			"sonarr_root_folder":      {Tok: makeDataSource(modMediaManagement, "sonarr_root_folder")},
			"sonarr_root_folders":     {Tok: makeDataSource(modMediaManagement, "sonarr_root_folders")},

			"sonarr_metadata":           {Tok: makeDataSource(modMetadata, "sonarr_metadata")},
			"sonarr_metadata_consumers": {Tok: makeDataSource(modMetadata, "sonarr_metadata_consumers")},

			"sonarr_notification":  {Tok: makeDataSource(modNotifications, "sonarr_notification")},
			"sonarr_notifications": {Tok: makeDataSource(modNotifications, "sonarr_notifications")},

			"sonarr_custom_format":                         {Tok: makeDataSource(modProfiles, "sonarr_custom_format")},
			"sonarr_custom_format_condition":               {Tok: makeDataSource(modProfiles, "sonarr_custom_format_condition")},
			"sonarr_custom_format_condition_language":      {Tok: makeDataSource(modProfiles, "sonarr_custom_format_condition_language")},
			"sonarr_custom_format_condition_release_group": {Tok: makeDataSource(modProfiles, "sonarr_custom_format_condition_release_group")},
			"sonarr_custom_format_condition_release_title": {Tok: makeDataSource(modProfiles, "sonarr_custom_format_condition_release_title")},
			"sonarr_custom_format_condition_resolution":    {Tok: makeDataSource(modProfiles, "sonarr_custom_format_condition_resolution")},
			"sonarr_custom_format_condition_size":          {Tok: makeDataSource(modProfiles, "sonarr_custom_format_condition_size")},
			"sonarr_custom_format_condition_source":        {Tok: makeDataSource(modProfiles, "sonarr_custom_format_condition_source")},
			"sonarr_custom_formats":                        {Tok: makeDataSource(modProfiles, "sonarr_custom_formats")},
			"sonarr_delay_profile":                         {Tok: makeDataSource(modProfiles, "sonarr_delay_profile")},
			"sonarr_delay_profiles":                        {Tok: makeDataSource(modProfiles, "sonarr_delay_profiles")},
			"sonarr_language":                              {Tok: makeDataSource(modProfiles, "sonarr_language")},
			"sonarr_languages":                             {Tok: makeDataSource(modProfiles, "sonarr_languages")},
			"sonarr_quality":                               {Tok: makeDataSource(modProfiles, "sonarr_quality")},
			"sonarr_quality_definition":                    {Tok: makeDataSource(modProfiles, "sonarr_quality_definition")},
			"sonarr_quality_definitions":                   {Tok: makeDataSource(modProfiles, "sonarr_quality_definitions")},
			"sonarr_quality_profile":                       {Tok: makeDataSource(modProfiles, "sonarr_quality_profile")},
			"sonarr_quality_profiles":                      {Tok: makeDataSource(modProfiles, "sonarr_quality_profiles")},
			"sonarr_release_profile":                       {Tok: makeDataSource(modProfiles, "sonarr_release_profile")},
			"sonarr_release_profiles":                      {Tok: makeDataSource(modProfiles, "sonarr_release_profiles")},

			"sonarr_all_series":    {Tok: makeDataSource(modSeries, "sonarr_all_series")},
			"sonarr_search_series": {Tok: makeDataSource(modSeries, "sonarr_search_series")},
			"sonarr_series":        {Tok: makeDataSource(modSeries, "sonarr_series")},

			"sonarr_auto_tag":                       {Tok: makeDataSource(modTags, "sonarr_auto_tag")},
			"sonarr_auto_tag_condition":             {Tok: makeDataSource(modTags, "sonarr_auto_tag_condition")},
			"sonarr_auto_tag_condition_genres":      {Tok: makeDataSource(modTags, "sonarr_auto_tag_condition_genres")},
			"sonarr_auto_tag_condition_root_folder": {Tok: makeDataSource(modTags, "sonarr_auto_tag_condition_root_folder")},
			"sonarr_auto_tag_condition_series_type": {Tok: makeDataSource(modTags, "sonarr_auto_tag_condition_series_type")},
			"sonarr_auto_tags":                      {Tok: makeDataSource(modTags, "sonarr_auto_tags")},
			"sonarr_remote_path_mapping":            {Tok: makeDataSource(modTags, "sonarr_remote_path_mapping")},
			"sonarr_remote_path_mappings":           {Tok: makeDataSource(modTags, "sonarr_remote_path_mappings")},
			"sonarr_system_status":                  {Tok: makeDataSource(modTags, "sonarr_system_status")},
			"sonarr_tag":                            {Tok: makeDataSource(modTags, "sonarr_tag")},
			"sonarr_tags":                           {Tok: makeDataSource(modTags, "sonarr_tags")},
		},
		JavaScript: &tfbridge.JavaScriptInfo{
			PackageName: "@maienm/pulumi-sonarr",

			// List any npm dependencies and their versions
			Dependencies: map[string]string{
				"@pulumi/pulumi": "^3.0.0",
			},
			DevDependencies: map[string]string{
				"@types/node": "^10.0.0", // so we can access strongly typed node definitions.
				"@types/mime": "^2.0.0",
			},
			// See the documentation for tfbridge.OverlayInfo for how to lay out this
			// section, or refer to the AWS provider. Delete this section if there are
			// no overlay files.
			//Overlay: &tfbridge.OverlayInfo{},
		},
		Python: &tfbridge.PythonInfo{
			PackageName: "pulumi_sonarr",

			// List any Python dependencies and their version ranges
			Requires: map[string]string{
				"pulumi": ">=3.0.0,<4.0.0",
			},
		},
		Golang: &tfbridge.GolangInfo{
			ImportBasePath: filepath.Join(
				fmt.Sprintf("github.com/MaienM/pulumi-%[1]s/sdk/", "sonarr"),
				tfbridge.GetModuleMajorVersion(version.Version),
				"go",
				"sonarr",
			),
			GenerateResourceContainerTypes: true,
		},
		CSharp: &tfbridge.CSharpInfo{
			RootNamespace: "MaienM",

			PackageReferences: map[string]string{
				"Pulumi": "3.*",
			},
		},
		Java: &tfbridge.JavaInfo{
			BasePackage: "com.maienm",
		},
	}
}
