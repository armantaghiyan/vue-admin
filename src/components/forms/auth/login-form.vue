<template>
    <form @submit.prevent="test">
        <div class="flex flex-col">

            <form-input type="text" :label="$t('main.email')" v-model="email"/>
            <form-input type="password" :label="$t('main.password')" v-model="password"/>

            <button class="bg-theme-primary rounded-md h-[38px] text-white mt-3 text-sm uppercase" type="submit">{{$t('main.login')}}</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        test() {
            console.log(this.email)
            console.log(this.password)
        }
    },
}
</script>