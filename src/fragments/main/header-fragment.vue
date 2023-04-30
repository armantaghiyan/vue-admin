<template>
    <div class="sticky top-0 pt-4">
        <div class="cart flex items-center h-16">

            <button @click="$emit('onMenuButton')" class="w-[38px] h-[38px] flex items-center justify-center hover:bg-theme-gray_0 duration-150 rounded-full">
                <span class="mdi mdi-menu icon"></span>
            </button>

            <div class="grow"></div>

            <change-lang/>

            <option-menu boxClass="w-[230px] top-[54px]">
                <template #option-menu-button>
                    <button class="w-[38px] h-[38px] flex items-center justify-center hover:bg-theme-gray_0 duration-150 rounded-full">
                        <span class="mdi mdi-bell-outline icon"></span>
                    </button>
                </template>
                <template #default>
                    <option-menu-item>
                        <div class="option-menu-item text-base m-1">item 1</div>
                    </option-menu-item>
                    <option-menu-item>
                        <div class="option-menu-item text-base m-1">item 2</div>
                    </option-menu-item>
                </template>
            </option-menu>

            <div class="px-1"></div>
            <option-menu boxClass="w-[230px] top-[58px]">
                <template #option-menu-button>
                    <img src="/images/user.png" class="w-[40px] h-[40px] flex items-center rounded-full">
                </template>
                <template #default>
                    <div class="flex px-4 py-2 mx-1">
                        <img src="/images/user.png" class="w-[40px] h-[40px] flex items-center rounded-full">
                        <div class="grow flex-col px-3">
                            <div class="text-base font-semibold">Arman</div>
                            <div class="text-sm font-normal text-light">admin</div>
                        </div>
                    </div>
                    <hr class="bg-theme-gray_2">
                    <option-menu-item>
                        <div class="option-menu-item text-base m-1">item 1</div>
                    </option-menu-item>
                    <option-menu-item>
                        <div class="option-menu-item text-base m-1">item 2</div>
                    </option-menu-item>
                    <option-menu-item>
                        <div class="option-menu-item text-base m-1">item 3</div>
                    </option-menu-item>
                    <option-menu-item>
                        <div class="option-menu-item text-base m-1">item 3</div>
                    </option-menu-item>
                    <hr class="bg-theme-gray_2">
                    <option-menu-item>
                        <div class="option-menu-item text-base m-1">Logout</div>
                    </option-menu-item>
                </template>
            </option-menu>

        </div>
    </div>
</template>
