const path = require("path");

module.exports = (env, argv) => {
    // Return the configuration
    return {
        entry: "./src/icons/index.ts",
        output: {
            path: path.resolve(__dirname, "build/icons"),
            filename: "icons.js"
        },
        resolve: {
            extensions: [".js", ".svg", ".ts"]
        },
        module: {
            rules: [
                // Handle SVG Files
                {
                    test: /\.svg$/,
                    use: [
                        { loader: "svg-inline-loader" }
                    ]
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
}