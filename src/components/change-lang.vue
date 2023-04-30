<template>
    <option-menu boxClass="w-[130px] top-[54px]">
        <template #option-menu-button>
            <button class="w-[38px] h-[38px] flex items-center justify-center hover:bg-theme-gray_0 duration-150 rounded-full">
                <span class="mdi mdi-translate icon"></span>
            </button>
        </template>
        <template #default>
            <option-menu-item>
                <div @click="$i18n.locale='en'" class="option-menu-item text-base m-1">{{ $t('languages.en') }}</div>
            </option-menu-item>
            <option-menu-item>
                <div @click="$i18n.locale='fa'" class="option-menu-item text-base m-1">{{ $t('languages.fa') }}</div>
            </option-menu-item>
        </template>
    </option-menu>
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