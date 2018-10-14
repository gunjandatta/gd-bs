const copyFile = require("copy-webpack-plugin");
const path = require("path");
const replace = require("replace-in-file-webpack-plugin");

module.exports = (env, argv) => {
    var isDev = argv.mode === "development";

    // Return the configuration
    var config = {
        entry: "./src/index.ts",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "gd-bs" + (isDev ? "" : ".min") + ".js"
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

    // See if this is production
    if (!isDev) {
        // Set the plugins
        config.plugins = [
            // Copy the bootstrap library
            new copyFile([
                { from: "node_modules/bootstrap/scss", to: "../scss" },
                { from: "src/sass/bootstrap.scss", to: "../scss/_gd.scss" }
            ]),
            // Replace the reference to bootstrap
            new replace([
                {
                    dir: "scss",
                    files: ["_gd.scss"],
                    rules: [
                        {
                            search: /~bootstrap\/scss\//g,
                            replace: ""
                        },
                        {
                            search: /"panel"/,
                            replace: '"../src/sass/panel"'
                        }
                    ]
                }
            ])
        ];
    }

    // Return the configuration
    return config;
}