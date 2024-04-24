module github.com/MaienM/pulumi-sonarr/provider

go 1.21

replace (
	github.com/devopsarr/terraform-provider-sonarr/v3/shim => ./shim
)

require (
	github.com/ettle/strcase v0.1.1
	github.com/gertd/go-pluralize v0.2.0
	github.com/pulumi/pulumi-terraform-bridge/v3 v3.73.0
	github.com/pulumi/pulumi-terraform-bridge/pf v0.26.0
	github.com/pulumi/pulumi/sdk/v3 v3.104.2
)
