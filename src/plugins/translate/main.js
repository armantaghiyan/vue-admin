export default {
    install: (app, options) => {
        app.config.globalProperties.$t = (key) => {

            let lang = config.get(CONFIG_LANG)
            if (lang === '') {
                config.set(CONFIG_LANG, options.default)
                lang = options.default
            }

            return options.languages[lang][key]
        }
    }
}
