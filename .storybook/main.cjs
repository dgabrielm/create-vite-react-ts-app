const tsconfigPaths = require("vite-tsconfig-paths");
module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  viteFinal: async config => {
    return {
      ...config,
      plugins: [...config.plugins, tsconfigPaths.default()]
    };
  },
  "features": {
    "storyStoreV7": true
  },
  docs: {
    autodocs: true
  }
};