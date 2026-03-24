const path = require("path");

module.exports = {
    // bundling mode
    mode: "production",
    // entry files
    entry: "./src/index.ts",
    // output bundles (location)
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "html5-qrcode-module.min.js",
        library: {
            "type": "module"
        },
        clean: true,
        module: true,
        // library: "__Html5QrcodeLibrary__",
    },
    experiments: {
        outputModule: true,
    },
    // file resolutions
    resolve: {
        extensions: [ ".ts", ".js" ],
    },
    target: "web",
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ]
    },
    optimization: {
        minimize: true,
        usedExports: true
    }
};
