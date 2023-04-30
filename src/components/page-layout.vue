<template>
    <div class="w-full flex min-h-screen bg-theme-gray_0">
        <div class="bg-red-500 duration-150 lg:flex hidden" :class="{'basis-64': isOpen, 'basis-0':!isOpen}">

        </div>
        <div class="grow px-6">

            <div class="mx-content mx-auto">

                <header-fragment @onMenuButton="isOpen=!isOpen"/>

                <slot/>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: true
        }
    }
}
</script>