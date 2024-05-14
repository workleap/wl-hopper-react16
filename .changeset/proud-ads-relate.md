---
"@hopper-ui/icons-react16": major
---

**Breaking Change**: Updated the icons variables to be more consistent with the other components.

Will need to update the style sheets to use the new CSS variables.

For example, they will need to replace:

| Old variable | New variable |
| ------------ | ------------ |
| `--hop-richicon-placeholder-surface-color` | `--hop-Richicon-placeholder-shadow` |
| `--hop-richicon-placeholder-icon-color` | `--hop-Richicon-placeholder-background` |
| `--hop-richicon-placeholder-icon-strong-color` | `--hop-Richicon-placeholder-fill` |

Add color variables for custom rich-icons styling

to change the background color, use the variable `--hop-Richicon-placeholder-background`
to change the shadow color, use the variable `--hop-Richicon-placeholder-shadow`
