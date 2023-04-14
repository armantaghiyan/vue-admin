import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import './utils/install-secure-ls'

const app = createApp(App)

//install plugins
import translate from './plugins/translate/main'
import fa from './lang/fa'
import en from './lang/en'
app.use(translate, {languages: {fa: fa, en: en}, default: 'en', key: 'lang'})

//install vue router
import router from './routes.js'
app.use(router)

//import stores
import user from './stores/user.js'
app.config.globalProperties.$user = user


//import components
import pageLayout from './components/page-layout.vue'
import logo from './components/logo.vue'
import formInput from './components/form-input.vue'
app.component('page-layout', pageLayout)
app.component('logo', logo)
app.component('form-input', formInput)

app.mount('#app')
