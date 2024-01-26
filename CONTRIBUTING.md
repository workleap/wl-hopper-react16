# Contributing

### Adding a new icon

1. First, follow this procedure to release the new icons in the `@hopper-ui/icons` and `@hopper-ui/svg-icons` package:
https://github.com/gsoft-inc/wl-hopper/blob/main/CONTRIBUTING.md#adding-a-new-icon

2. Update the @hopper-ui/svg-icons dev dependency in packages\icons-react16\package.json and run `pnpm install` in the root directory.

3. Optimization and Generation of icons
- To generate optimized SVGs and React components, run the following command:

```sh
pnpm generate-icons
```

- This command will create React components in the respective folders.
- Commit the changes to the repository.

4. Run Changeset Command

- After manually generating the icons, run the following command to create release notes for @hopper-ui/svg-icons and @hopper-ui/icons:
```sh
pnpm changeset
```
- Follow the prompts to describe the changes made and choose the appropriate version bump.
- A template for the release notes of svg-icons and icons is available in the `.changeset` folder [here](./.changeset/templates/svg-icons-release.md).

### Updating or removing an icon

- First, follow this procedure to remove or icons in the `@hopper-ui/icons` and `@hopper-ui/svg-icons` package:
https://github.com/gsoft-inc/wl-hopper/blob/main/CONTRIBUTING.md#updating-or-removing-an-icon

- Steps 2-4 are the same as adding a new icon.
