<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import locations from '@/location';
import Breadcrumb from '../components/layout/Breadcrumb.vue';

const route = useRoute();
const locationSlug = route.params.slug;

// Find the location data based on the slug
const location = computed(() => locations.find(loc => loc.slug === locationSlug));
</script>

<template>

    <Breadcrumb :showLocation="true" :locationName="location.title" />
    <div v-if="location" class="text-sm font-medium text-neutral-600  max-w-6xl mx-auto py-4">
        <h1>{{ location.title }}</h1>
        <img :src="location.imageUrl" :alt="location.title" />
        <p>{{ location.description }}</p>
        <p><strong>Address:</strong> {{ location.address }}</p>
        <p><strong>Coordinates:</strong> {{ location.coordinates.lat }}, {{ location.coordinates.lng }}</p>
    </div>
    <div v-else>
        <p>Location not found.</p>
    </div>
</template>
