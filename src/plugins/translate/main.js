import appStore from '../../stores/app'

export default {
    install: (app, options) => {
        app.config.globalProperties.$t = (key) => {

            const lang = appStore.getLang(options.default)

            const result = options.languages[lang][key]

            return result !== undefined ? result : ''
        }
    }
}
