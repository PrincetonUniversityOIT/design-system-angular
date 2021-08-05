const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls"
  ],
  "webpackFinal": async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            includePaths: [
              '../node_modules/@princeton-design/design-system'
            ]
          }
        }
      ],
      include: [
        path.resolve(__dirname, '../node_modules/@princeton-design/design-system')
      ]
    })
    return config
  }
}
