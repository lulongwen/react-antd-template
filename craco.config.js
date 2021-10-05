const CracoAntDesignPlugin = require("craco-antd");
const CracoAliasPlugin = require("craco-alias");
// const fastRefreshCracoPlugin = require('craco-fast-refresh');
const CracoLessPlugin = require("craco-less");
const aliyunTheme = require("@ant-design/aliyun-theme");

module.exports = {
  plugins: [
    // { plugin: fastRefreshCracoPlugin },
    {
      plugin: CracoAliasPlugin,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
        modifyLessRule: function () {
          return {
            test: /\.module\.less$/,
            exclude: /node_modules/,
            use: [
              { loader: "style-loader" },
              {
                loader: "css-loader",
                options: {
                  modules: {
                    localIdentName: "[local]_[hash:base64:6]",
                  },
                },
              },
              { loader: "less-loader" },
            ],
          };
        },
      },
    },
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          ...aliyunTheme.default,
          "@primary-color": "#722ED1",
        },
      },
    },
  ],

  webpack: {
    configure: (config, { env, paths }) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
  },
};
