const copyFile = require("copy-webpack-plugin");
const path = require("path");
const replace = require("replace-in-file-webpack-plugin");

module.exports = (env, argv) => {
    var isDev = argv.mode === "development";
    var includeIcons = argv.icons === "true";

    // Return the configuration
    var config = {
        entry: "./src/index" + (includeIcons ? "-icons" : "") + ".ts",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "gd-bs" + (includeIcons ? "-icons" : "") + (isDev ? "" : ".min") + ".js"
        },
        resolve: {
            extensions: [".scss", ".css", ".ts", ".js"]
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
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: function () {
                                    return [
                                        require("autoprefixer")
                                    ]
                                }
                            }
                        },
                        // Compile SASS to CSS
                        { loader: "sass-loader" }
                    ]
                },
                // Handle SVG Files
                {
                    test: /\.svg$/,
                    use: [
                        { loader: "svg-inline-loader" }
                    ]
                },
                // Handle HTML Files
                {
                    test: /\.html$/,
                    exclude: "/node_modules/",
                    use: [{ loader: "html-loader" }]
                },
                // Handle TypeScript Files
                {
                    test: /\.tsx?$/,
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

    // Return the configuration
    return config;
}