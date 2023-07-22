---
title: Sonarr Installation & Configuration
meta_desc: Information on how to install the Sonarr provider.
layout: installation
---

## Installation

The Pulumi Sonarr provider is available as a package in all Pulumi languages:

* JavaScript/TypeScript: [`@maienm/pulumi-sonarr`](https://www.npmjs.com/package/@maienm/pulumi-sonarr)
* Python: [`pulumi_sonarr`](https://pypi.org/project/pulumi_sonarr/)
* Go: [`github.com/MaienM/pulumi-sonarr/sdk/go/sonarr`](https://pkg.go.dev/github.com/MaienM/pulumi-sonarr/sdk/go/sonarr)
* .NET: [`MaienM.Sonarr`](https://www.nuget.org/packages/MaienM.Sonarr)


## Configuration

> Note:  
> Replace the following **sample content**, with the configuration options
> of the wrapped Terraform provider and remove this note.

The following configuration points are available for the `sonarr` provider:

- `sonarr:apiKey` (environment: `sonarr_API_KEY`) - the API key for `sonarr`
- `sonarr:region` (environment: `sonarr_REGION`) - the region in which to deploy resources

### Provider Binary

The Sonarr provider binary is a third party binary. It can be installed using the `pulumi plugin` command.

```bash
pulumi plugin install resource sonarr <version>
```

Replace the version string `<version>` with your desired version.
