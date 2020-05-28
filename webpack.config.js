const path = require("path");

module.exports = (env, argv) => {
    var isCore = argv.core === "true";
    var isDev = argv.mode === "development";
    var includeIcons = argv.icons === "true";

    // Determine the filenames
    var outFilename = "gd-bs";
    var srcFilename = "./build/index";
    if (isCore) {
        outFilename += "-core";
        srcFilename = "./build/core";
    } else if (includeIcons) {
        outFilename += "-icons";
        srcFilename += "-icons";
    }

    // See if tihs is production
    if (!isDev) { outFilename += ".min"; }

    // Return the configuration
    var config = {
        entry: srcFilename + ".js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: outFilename + ".js"
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
                // Handle JavaScript Files
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env"]
                            }
                        }
                    ]
                }
            ]
        }
    };

    // Return the configuration
    return config;
}