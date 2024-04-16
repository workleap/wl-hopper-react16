// Purpose: Build script for the icons package.

import { ComponentDirectory, SVGsDirectory, RichIconsSVGsDirectory, RichComponentDirectory } from "./constants.ts";
import { fetchSvgs } from "./fetch-svgs.ts";
import { generateComponents } from "./generate-components.ts";
import { generateIndex } from "./generate-index.ts";

console.log("⚙️ Fetching SVGs...\n");
const multiSourceIcons = fetchSvgs(SVGsDirectory);
const multiSourceRichIcons = fetchSvgs(RichIconsSVGsDirectory);

console.log("⚙️ Generating react components...\n");
generateComponents(ComponentDirectory, multiSourceIcons, false);
generateComponents(RichComponentDirectory, multiSourceRichIcons, true);

console.log("📋 List of icons generation...\n");
generateIndex(ComponentDirectory, multiSourceIcons, false);
generateIndex(RichComponentDirectory, multiSourceRichIcons, true);

console.log("✨ Build completed!\n");
