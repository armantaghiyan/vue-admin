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
                    <h5 class="pb-1">Adventure starts here 🚀</h5>
                    <p>Make your app management easy and fun!</p>
                </div>

                <form @submit.prevent="test">
                    <div class="flex flex-col">

                        <form-input type="text" label="Email" v-model="email"/>
                        <form-input type="password" label="Password" v-model="password"/>
                        <form-input type="password" label="Password Confirm" v-model="passwordConfirm"/>

                        <button class="bg-theme-primary rounded-md h-[38px] text-white mt-3 text-sm" type="submit">Register</button>
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
            email: '',
            password: '',
            passwordConfirm: ''
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