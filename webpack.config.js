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
        module: {
            rules: [
                // Handle TypeScript Files
                {
                    test: /\.js$/,
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