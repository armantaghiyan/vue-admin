<template>
    <form @submit.prevent="test">
        <div class="flex flex-col">

            <form-input type="text" :label="$t('username')" v-model="username"/>
            <form-input type="text" :label="$t('email')" v-model="email"/>
            <form-input type="password" :label="$t('password')" v-model="password"/>

            <button class="bg-theme-primary rounded-md h-[38px] text-white mt-3 text-sm uppercase" type="submit">{{$t('register')}}</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
        }
    },
    methods: {
        test() {
            console.log(this.email)
            console.log(this.password)
            console.log(this.passwordConfirm)
        }
    }
}
</script>