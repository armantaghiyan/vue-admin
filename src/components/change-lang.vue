<template>
    <div class="locale-changer">
        <select v-model="$i18n.locale">
            <option value="en">{{ $t('languages.en') }}</option>
            <option value="fa">{{ $t('languages.fa') }}</option>
        </select>
    </div>
</template>

<script>
import App from '../utils/App'

export default {
    data() {
        return {
            app: null
        }
    },
    watch: {
        '$i18n.locale'(lang) {
            this.$app.setLang(lang)
            this.app.setDirectionAndFont()
        }
    },
    mounted() {
        this.app = new App()
    }
}
</script>