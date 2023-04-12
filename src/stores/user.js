import {reactive} from 'vue'

const user = reactive({
    isLogin: false,

    login(){
        this.isLogin = true
    },
    logout(){
        this.isLogin = false
    },
})

export default user