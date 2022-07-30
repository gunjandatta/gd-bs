const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
    // Return the configuration
    return {
        entry: [
            "./node_modules/tippy.js/dist/backdrop.css",
            "./node_modules/tippy.js/dist/border.css",
            "./node_modules/tippy.js/dist/svg-arrow.css",
            "./node_modules/tippy.js/dist/tippy.css",
            "./node_modules/tippy.js/animations/perspective.css",
            "./node_modules/tippy.js/animations/perspective-extreme.css",
            "./node_modules/tippy.js/animations/perspective-subtle.css",
            "./node_modules/tippy.js/animations/scale.css",
            "./node_modules/tippy.js/animations/scale-extreme.css",
            "./node_modules/tippy.js/animations/scale-subtle.css",
            "./node_modules/tippy.js/animations/shift-away.css",
            "./node_modules/tippy.js/animations/shift-away-extreme.css",
            "./node_modules/tippy.js/animations/shift-away-subtle.css",
            "./node_modules/tippy.js/animations/shift-toward.css",
            "./node_modules/tippy.js/animations/shift-toward-extreme.css",
            "./node_modules/tippy.js/animations/shift-toward-subtle.css",
            "./node_modules/tippy.js/themes/light-border.css",
            "./node_modules/tippy.js/themes/light.css",
            "./node_modules/tippy.js/themes/material.css",
            "./node_modules/tippy.js/themes/translucent.css",
            "./src/bs.scss"
        ],
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "bs.js"
        },
        target: ["web", "es5"],
        resolve: {
            extensions: [".css", ".scss"]
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()]
        },
        module: {
            rules: [{
                test: /\.(s?css)$/,
                use: [
                    // Inject CSS to the page
                    { loader: "style-loader" },
                    // Translate CSS to CommonJS
                    { loader: "css-loader" },
                    // Run postcss actions
                    {
                        loader: 'postcss-loader',
                        options: {
                            // `postcssOptions` is needed for postcss 8.x;
                            // if you use postcss 7.x skip the key
                            postcssOptions: {
                                // postcss plugins, can be exported to postcss.config.js
                                plugins: () => {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    },
                    // Compile SASS to CSS
                    {
                        loader: "sass-loader"
                    }
                ]
            }]
        }
    };
}