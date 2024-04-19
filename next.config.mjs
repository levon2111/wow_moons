/** @type {import('next').NextConfig} */
import generated from "@next/bundle-analyzer";

const withBundleAnalyzer = generated({
    enabled: process.env.ANALYZE === 'true',
});


const nextConfig = withBundleAnalyzer({
    generateBuildId: async () => {
        // This could be anything, using the latest git hash
        return `${process.env.GIT_HASH}`
    },
    reactStrictMode: false,
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        domains: ['assets.tina.io', 'github.blog',],
        deviceSizes: [320, 640, 1080, 1200],
        imageSizes: [64, 128],
    },
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        config.module.rules.push(
            {
                test: /\.svg$/,
                issuer: {
                    and: [/\.(js|ts)x?$/],
                },
                use: [{loader: '@svgr/webpack'}, {loader: 'url-loader'}],
            },
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: ['raw-loader', 'glslify-loader'],
            },
        );

        config.resolve.fallback = { fs: false };
        return config;
    },
});

export default nextConfig;