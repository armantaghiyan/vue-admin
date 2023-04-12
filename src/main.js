import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

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
