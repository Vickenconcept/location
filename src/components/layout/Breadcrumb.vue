<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    showLocation: {
        type: Boolean,
        default: false
    },
    locationName: {
        type: String,
        default: ''
    }
});

</script>

<template>
    <nav class="text-sm font-medium text-neutral-600  max-w-6xl mx-auto py-4" aria-label="breadcrumb">
        <ol class="flex flex-wrap items-center gap-2">
            <li class="flex items-center gap-2">
                <router-link to="/dashboard" class="hover:text-neutral-900 ">Dashboard</router-link>
                <span aria-hidden="true">/</span>
            </li>
            <li class="flex items-center gap-2" v-if="showLocation">
                <span class=" ">Location</span>
                <span aria-hidden="true">/</span>
            </li>
            <li class="text-neutral-900 font-bold " aria-current="page" v-if="locationName">{{ locationName }}</li>
        </ol>
    </nav>
</template>
