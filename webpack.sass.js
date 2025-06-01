const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
    // Return the configuration
    return {
        entry: [
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