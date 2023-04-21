import {createI18n} from 'vue-i18n'

// import translations
import fa from '../lang/fa/fa.json'
import en from '../lang/en/en.json'

import app from '../stores/app'

// configure i18n
const i18n = createI18n({
    locale: app.getLang('en'),
    fallbackLocale: app.getLang('en'),
    messages: {fa, en},
});

export default i18n