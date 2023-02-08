const { defineConfig } = require("@vue/cli-service");
const path = require('path')
const VueI18nPlugin = require('@intlify/unplugin-vue-i18n/webpack')

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
      includeLocales: false,
      enableBridge: true,
    },
  },

	configureWebpack: {
		plugins: [
			VueI18nPlugin({
      /* options */
      // locale messages resourece pre-compile option
      include: path.resolve(__dirname, './src/locales/**'),
    })
		]
	}
});
