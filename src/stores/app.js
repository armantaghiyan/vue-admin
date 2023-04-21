import {reactive} from 'vue'

const app = reactive({
    lang: '',

    getLang(defaultLang) {
        let lang = config.get(CONFIG_LANG)
        if (lang === '') {
            config.set(CONFIG_LANG, defaultLang)
            lang = defaultLang
        }

        this.lang = lang
        return lang
    },
    setLang(lang) {
        this.lang = lang
        config.set(CONFIG_LANG, lang)
    },
})

export default app