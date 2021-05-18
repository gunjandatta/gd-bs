const path = require("path");

module.exports = (env, argv) => {
    // Return the configuration
    return {
        entry: [
            "./node_modules/tippy.js/dist/tippy.css",
            "./src/bs.scss"
        ],
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "bs.js"
        },
        resolve: {
            extensions: [".css", ".scss"]
        },
        target: ["web", "es5"],
        module: {
            rules: [
                {
                    test: /\.(s?css)$/,
                    use: [
                        // Inject CSS to the page
                        { loader: "style-loader" },
                        // Translate CSS to CommonJS
                        { loader: "css-loader" },
                        // Compile SASS to CSS
                        { loader: "sass-loader" }
                    ]
                }
            ]
        }
    };
}