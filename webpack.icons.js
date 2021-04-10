const path = require("path");

module.exports = (env, argv) => {
    var isDev = argv.mode === "development";

    // Return the configuration
    return {
        entry: [
            "./node_modules/core-js/es/promise/index.js",
            "./node_modules/core-js/es/object/assign.js",
            "./node_modules/core-js/es/string/index.js",
            "./build/index.js"
        ],
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "gd-bs-icons" + (isDev ? "" : ".min") + ".js"
        },
        target: ["web", "es5"],
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
}