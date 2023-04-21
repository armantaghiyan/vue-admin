<template>
    <div class="relative py-3">
        <label v-if="label !== ''" @click="clickLabel()" class="absolute text-xs mx-3 bg-white px-1 duration-150 cursor-text" :class="{'top-1': isActive, 'top-6': !isActive, 'text-theme-primary':isFocus, 'text-theme-gray_3': !isFocus}">{{ label }}</label>

        <input ref="inpRef" @focus="inpFocus()" @blur="inpBlur()" :type="type" class="w-full duration-150" v-model="localVal" dir="auto">

<!--        <div class="absolute top-[19px] right-0 px-4" v-if="type === 'password' || baseType === 'password'">-->
<!--            <span v-if="showPassword" @click="showPassword=!showPassword;type='password'" class="mdi mdi-eye-off-outline icon"></span>-->
<!--            <span v-else @click="showPassword=!showPassword;type='text'" class="mdi mdi-eye-outline icon"></span>-->
<!--        </div>-->
    </div>
</template>

<script>
export default {
    props: {
        modelValue: String,
        type: {
            type: String,
            default: 'text',
        },
        label: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            localVal: '',
            isActive: false,
            isFocus: false,
            // showPassword: false,
            // baseType: ''
        }
    },
    watch: {
        localVal(newValue) {
            this.$emit('update:modelValue', newValue)
        }
    },
    methods:{
        inpFocus(){
            this.isFocus = true
            this.isActive = true
        },
        inpBlur(){
            this.isFocus = false
            if(this.localVal === ''){
                this.isActive = false
            }
        },
        clickLabel(){
            this.$refs.inpRef.focus()
        }
    },
    mounted() {
        // this.baseType = this.type

        if(this.modelValue !== ''){
            this.isActive = true
        }
        this.localVal = this.modelValue
    }
}
</script>