import type { StorybookConfig } from "@storybook/preact-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../packages/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/preact-vite",
    options: {
      builder: {
        viteConfigPath: "packages/Button/vite.config.ts",
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  // viteFinal: (config, options) => {
  //   config.plugins?.push(
  //     preact2webcomponents({ customElementNamePrefix: "x" })
  //   );
  //   // @ts-expect-error
  //   config.css?.modules["scopeBehaviour"] = "global";
  //   // @ts-expect-error
  //   config.build?.rollupOptions?.external = externals;
  // },
};

export default config;
