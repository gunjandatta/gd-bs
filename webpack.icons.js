const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
    var isDev = argv.mode === "development";

    // Return the configuration
    return {
        entry: [
            "./node_modules/core-js/es/promise/index.js",
            "./node_modules/core-js/es/object/assign.js",
            "./node_modules/core-js/es/string/index.js",
            "./src/index-icons.ts"
        ],
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "gd-bs-icons" + (isDev ? "" : ".min") + ".js"
        },
        target: ["web", "es5"],
        resolve: {
            extensions: [".js", ".scss", ".ts"]
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()]
        },
        module: {
            rules: [
                {
                    test: /\.(scss)$/,
                    use: [
                        // Inject CSS to the page
                        { loader: "style-loader" },
                        // Translate CSS to CommonJS
                        { loader: "css-loader" },
                        // Loader for webpack to process CSS with PostCSS
                        { loader: 'postcss-loader' },
                        // Compile SASS to CSS
                        {
                            loader: "sass-loader",
                            options: {
                                implementation: require("sass")
                            }
                        }
                    ]
                },
                // Handle TypeScript Files
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env"]
                            }
                        },
                        {
                            loader: "ts-loader"
                        }
                    ]
                }
            ]
        }
    };
}