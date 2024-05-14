import { transform } from "@svgr/core";
import fs from "fs";
import path from "path";
import { IconSuffix, RichIconSuffix } from "./constants.ts";
import type { MultiSourceIconSource } from "./fetch-svgs.ts";
import svgoConfig from "./svgo-config.ts";

export async function generateComponents(componentDirectory: string, icons: MultiSourceIconSource[], isRichIcons = false) {
    const createMethodImportPath = isRichIcons ? "../createRichIcon.tsx" : "../createIcon.tsx";
    const createMethodName = isRichIcons ? "createRichIcon" : "createIcon";
    const iconSuffix = isRichIcons ? RichIconSuffix : IconSuffix;

    // Clear directory (It also removes the directory itself)
    fs.rmSync(componentDirectory, { recursive: true, force: true });
    fs.mkdirSync(componentDirectory, { recursive: true });

    for (const icon of icons) {
        let componentCode = [
            "/**",
            " * This file is generated by the generate-components script. Do not edit directly.",
            " */",
            "/* eslint-disable */",
            `import { ${createMethodName} } from "${createMethodImportPath}";`,
            "import React, { forwardRef, type Ref, type SVGProps } from \"react\";"
        ].join("\n");
        componentCode += "\n\n";

        const baseIconName = `${icon.name}${iconSuffix}`;

        let sizes: number[] = [];
        for (const [size, data] of Object.entries(icon.sizes)) {
            sizes = [...sizes, parseInt(size)].sort();
            componentCode += transform.sync(data, {
                typescript: true,
                ref: true,
                jsxRuntime: "automatic",
                svgoConfig: svgoConfig,
                plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
                template: ({ componentName, jsx, props }, { tpl }) => {
                    return tpl`
                        const ${componentName} = forwardRef((${props}) => (
                            ${jsx}
                        ));
                    `;
                }
            }, {
                componentName: `${baseIconName}${size}`
            });
            componentCode += "\n";
        }
        componentCode += `\nexport const ${baseIconName} = ${createMethodName}(${baseIconName}${sizes[0]}, ${baseIconName}${sizes[1]}, ${baseIconName}${sizes[2]}, "${baseIconName}");`;

        const destinationPath = path.resolve(componentDirectory, baseIconName + ".tsx");
        fs.writeFileSync(destinationPath, Buffer.from(componentCode));
    }
}
