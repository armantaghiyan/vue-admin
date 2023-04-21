import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import './utils/install-secure-ls'

const app = createApp(App)

//install i18n
import i18n from './utils/i18n'
app.use(i18n)

//import stores
import user from './stores/user.js'
import appStore from './stores/app.js'
app.config.globalProperties.$user = user
app.config.globalProperties.$app = appStore

//install vue router
import router from './routes.js'
app.use(router)

//import forms
import loginForm from './components/forms/auth/login-form.vue'
import registerForm from './components/forms/auth/register-form.vue'
app.component('login-form', loginForm)
app.component('register-form', registerForm)

//import components
import pageLayout from './components/page-layout.vue'
import logo from './components/logo.vue'
import formInput from './components/form-input.vue'
import changeLang from './components/change-lang.vue'
app.component('page-layout', pageLayout)
app.component('logo', logo)
app.component('form-input', formInput)
app.component('change-lang', changeLang)

app.mount('#app')
