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

    <!-- <div v-if="location" class="text-sm font-medium text-neutral-600  max-w-6xl mx-auto py-4"> -->
    <Breadcrumb :showLocation="true" :locationName="location.title" class=" px-5" />
    <div v-if="location" class=" ">


        <main class="container max-w-6xl mx-auto py-4">
            <div class="flex flex-wrap justify-between">
                <div class="w-full md:w-8/12 px-4 mb-8">
                    <img :src="location.imageUrl" :alt="location.title" class="w-full h-64 object-cover rounded">
                    <h2 class="text-4xl font-bold mt-4 mb-2">{{ location.title }}</h2>
                    <p class="text-gray-700 mb-4">
                        {{ location.description }}
                    </p>
                    <br>
                    <p class="text-gray-700 mb-4">
                        {{ location.description }}
                        <br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p class="text-gray-700 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia
                        deserunt mollit anim id est laborum.</p>
                    <p class="text-gray-700 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div class="w-full md:w-4/12 px-4 mb-8">
                    <div class="bg-gray-100 px-4 py-6 rounded">
                        <h3 class="text-lg font-bold mb-2">Attributes</h3>
                        <ul class="list-disc list-inside">
                            <!-- <li><a href="#" class="text-gray-700 hover:text-gray-900">Technology</a></li>
                            <li><a href="#" class="text-gray-700 hover:text-gray-900">Travel</a></li>
                            <li><a href="#" class="text-gray-700 hover:text-gray-900">Food</a></li> -->

                            <li><strong>Address:</strong> {{ location.address }}</li>
                            <li><strong>Coordinates:</strong> {{ location.coordinates.lat }}, {{
                                location.coordinates.lng
                                }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        <footer class="bg-gray-800 py-4">
            <p class="text-center text-white">Copyright 2023</p>
        </footer>
    </div>
    <div v-else>
        <p>Location not found.</p>
    </div>
</template>
