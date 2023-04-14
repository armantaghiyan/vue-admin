<template>
    <div class="grid grid-cols-12 min-h-screen">
        <div class="col-span-8 lg:flex items-center hidden">
            <div class="px-4"></div>
            <div class="grow h-full flex flex-col">
                <div class="flex items-center justify-center grow my-8 rounded-xl" style="background-color: #f8f7fa;">
                    <img src="/images/auth-register.png" class="max-w-[500px]">
                </div>
            </div>
        </div>

        <div class="lg:col-span-4 col-span-12 flex flex-col items-center justify-center p-4">

            <div class="max-w-[468px] p-6">

                <div class="py-6">
                    <logo class="mb-6"/>
                    <h5 class="pb-1">{{ $t('register_page_title') }}</h5>
                    <p>{{ $t('register_page_desc') }}</p>
                </div>

                <form @submit.prevent="test">
                    <div class="flex flex-col">

                        <form-input type="text" :label="$t('username')" v-model="username"/>
                        <form-input type="text" :label="$t('email')" v-model="email"/>
                        <form-input type="password" :label="$t('password')" v-model="password"/>

                        <button class="bg-theme-primary rounded-md h-[38px] text-white mt-3 text-sm uppercase" type="submit">{{$t('register')}}</button>
                    </div>
                </form>

            </div>

        </div>
    </div>
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