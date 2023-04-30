<template>

    <div class="mt-6 grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <cart type="danger" :title="$t('sample.session')" :label="$t('sample.total_users')" icon="mdi mdi-account-outline">
            <div class="flex items-center">
                <h6 class="py-1">21,459</h6>
                <span class="text-base font-normal text-success px-2">(29%)</span>
            </div>
        </cart>
        <cart type="primary" :title="$t('sample.paid_users')" :label="$t('sample.last_week_analytics')" icon="mdi mdi-account-outline">
            <div class="flex items-center">
                <h6 class="py-1">4,567</h6>
                <span class="text-base font-normal text-success px-2">(18%)</span>
            </div>
        </cart>
        <cart type="success" :title="$t('sample.active_users')" :label="$t('sample.last_week_analytics')" icon="mdi mdi-account-outline">
            <div class="flex items-center">
                <h6 class="py-1">19,860</h6>
                <span class="text-base font-normal text-danger px-2">(-14%)</span>
            </div>
        </cart>
        <cart type="warning" :title="$t('sample.pending_users')" :label="$t('sample.last_week_analytics')" icon="mdi mdi-account-outline">
            <div class="flex items-center">
                <h6 class="py-1">237</h6>
                <span class="text-base font-normal text-success px-2">(42%)</span>
            </div>
        </cart>
    </div>

</template>
