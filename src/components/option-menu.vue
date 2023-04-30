<template>
    <div class="mx-auto relative">
        <Menu>
            <MenuButton>
                <slot name="option-menu-button"/>
            </MenuButton>
            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">

                <MenuItems :class="'flex flex-col bg-white shadow rounded-md end-0 absolute ' + boxClass">

                   <slot/>

                </MenuItems>

            </transition>
        </Menu>
    </div>
</template>

<script>
import {MenuButton, MenuItem, MenuItems, Menu} from "@headlessui/vue";

export default {
    components: {MenuItem, MenuItems, MenuButton, Menu},
    props: {
        boxClass: {
            type: String,
            default: ''
        }
    }
}
</script>