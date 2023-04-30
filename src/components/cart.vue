<template>
    <div class="cart p-6 flex">
        <div class="grow flex flex-col">
            <span class="text-theme-gray_2 text-base font-normal">{{ title }}</span>
            <div class="grow">
                <slot/>
            </div>
            <span class="text-theme-gray_2 text-base font-normal">{{ label }}</span>
        </div>
        <div :class="`theme-${type} rounded-md w-[40px] h-[40px] flex items-center justify-center`">
            <span :class="`theme-${type} text-2xl ` + icon" class=""></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        }
    }
}
</script>