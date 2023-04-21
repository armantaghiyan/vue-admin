import app from '../stores/app'

export default class App {
    start() {
        this.#setDirectionAndFont()
    }

    #setDirectionAndFont() {
        const lang = app.getLang()

        const elem = document.getElementById('app')

        document.documentElement.lang = lang;

        if (lang === 'fa' || lang === 'ar') {
            elem.classList.add('rtlFont')
            document.documentElement.dir = 'rtl'
        } else {
            elem.classList.add('lrtFont')
            document.documentElement.dir = 'ltr'
        }
    }
}