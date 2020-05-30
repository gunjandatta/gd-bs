const path = require("path");

module.exports = (env, argv) => {
    // Return the configuration
    return {
        entry: "./src/sass/index.scss",
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "sass.js"
        },
        resolve: {
            extensions: [".scss"]
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
                }
            ]
        }
    };
}