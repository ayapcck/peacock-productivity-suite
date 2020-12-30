module.exports = {
  "stories": [
    "./*.stories.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/preset-create-react-app"
  ]
}