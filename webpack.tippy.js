const path = require("path");

module.exports = (env, argv) => {
    // Return the configuration
    return {
        entry: [
            "./src/tippy.js/index.ts"
        ],
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "tippy.js"
        },
        target: ["web", "es5"],
        resolve: {
            extensions: [".js", ".scss", ".ts"]
        },
        module: {
            rules: [
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