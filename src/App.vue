<template>
    <div class="w-full min-h-screen">
        <page-layout v-if="$user.isLogin">
            <router-view/>
        </page-layout>

        <router-view v-else/>
    </div>
</template>