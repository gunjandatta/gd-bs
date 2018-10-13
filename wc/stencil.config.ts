import { Config } from "@stencil/core";

export const config: Config = {
    globalScript: "../dist/gd-bs.min.js",
    namespace: "gd-bs",
    outputTargets: [
        {
            type: "dist"
        }
    ]
}