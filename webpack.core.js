const path = require("path");

module.exports = (env, argv) => {
    var isDev = argv.mode === "development";

    // Return the configuration
    return {
        entry: [
            "./node_modules/core-js/es/promise/index.js",
            "./node_modules/core-js/es/object/assign.js",
            "./node_modules/core-js/es/string/index.js",
            "./build/index-core.js"
        ],
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "gd-bs-core" + (isDev ? "" : ".min") + ".js"
        },
        target: ["web", "es5"],
        resolve: {
            extensions: [".js", ".ts"]
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
}