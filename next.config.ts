import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = isGitHubActions && repositoryName ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
	outputFileTracingRoot: process.cwd(),
	output: "export",
	images: {
		unoptimized: true
	},
	trailingSlash: true,
	basePath,
	assetPrefix: basePath || undefined
};

export default nextConfig;
