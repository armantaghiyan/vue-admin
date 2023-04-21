<template>
    <div class="grid grid-cols-12 min-h-screen">
        <div class="col-span-8 lg:flex items-center hidden">
            <div class="px-4"></div>
            <div class="grow h-full flex flex-col">
                <div class="flex items-center justify-center grow my-8 rounded-xl" style="background-color: #f8f7fa;">
                    <img src="/images/auth-login.png" class="max-w-[500px]">
                </div>
            </div>
        </div>

        <div class="lg:col-span-4 col-span-12 flex flex-col items-center justify-center p-4">
            <div class="max-w-[468px] p-6">
                <div class="py-6">
                    <logo class="mb-6"/>
                    <h5 class="pb-1">{{ $t('login_page.title') }}</h5>
                    <p>{{ $t('login_page.desc') }}</p>
                </div>

                <login-form/>
            </div>
        </div>
    </div>
</template>