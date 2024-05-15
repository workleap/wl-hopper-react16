import type { Config } from "svgo";

import { changeColorPlugin } from "./changeColorPlugin.ts";
import {
    PrimaryIconColor,
    WarningWeakIconColor,
    DecorativeOption7IconColor,
    DecorativeOption7SurfaceColor,
    White,
    WhiteHexadecimal
} from "./constants.ts";

export const colors: { [key: string]: string } = {
    [PrimaryIconColor]: `var(--hop-Icon-placeholder-primary-icon, ${PrimaryIconColor})`,
    [WarningWeakIconColor]: `var(--hop-Icon-placeholder-warning-icon-weak, ${WarningWeakIconColor})`,
    [White]: `var(--hop-RichIcon-placeholder-fill, ${WhiteHexadecimal})`,
    [WhiteHexadecimal]: `var(--hop-RichIcon-placeholder-fill, ${WhiteHexadecimal})`,
    [DecorativeOption7IconColor]: `var(--hop-RichIcon-placeholder-shadow, ${DecorativeOption7IconColor})`,
    [DecorativeOption7SurfaceColor]: `var(--hop-RichIcon-placeholder-background, ${DecorativeOption7SurfaceColor})`
};

const config : Config = {
    plugins: [
        {
            name: "preset-default",
            params: {
                overrides: {
                    removeViewBox: false
                }
            }
        },
        "removeXMLNS",
        changeColorPlugin
    ]
};

export default config;
