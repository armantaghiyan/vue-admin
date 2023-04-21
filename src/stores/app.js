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
    setLangFa() {
        this.lang = 'fa'
        config.set(CONFIG_LANG, 'fa')
    },
    setLangEn() {
        this.lang = 'en'
        config.set(CONFIG_LANG, 'en')
    },
})

export default app