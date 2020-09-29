const path = require("path");

module.exports = (env, argv) => {
    // Return the configuration
    return {
        entry: "./src/styles/index.scss",
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "styles.js"
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
                            // Run postcss actions
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: function () {
                                        return [
                                            require('autoprefixer')
                                        ];
                                    }
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