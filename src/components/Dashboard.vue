<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import locations from '@/location'; // assuming you have your locations file
import Breadcrumb from '../components/layout/Breadcrumb.vue';

const route = useRoute();
const locationId = route.params.id; // assuming you're using :id in your route
const location = ref(locations.find(loc => loc.id == locationId));



</script>

<template>
    <div class="">
        <div
            class="relative flex border-neutral-300 bg-neutral-50 p-4 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 border-b">
            <div class="mx-auto flex flex-wrap items-center gap-2 px-6">
                <p class="sm:text-sm text-pretty text-xs">Get Fit Anywhere, Anytime 💪</p>
                <button type="button"
                    class="cursor-pointer whitespace-nowrap bg-black px-4 py-1 text-center text-xs font-medium tracking-wide text-neutral-100 transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-100 active:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-white dark:text-black dark:focus-visible:outline-white rounded-md">Start
                    free trial</button>
            </div>
            <button class="absolute top-1/2 -translate-y-1/2 right-4" aria-label="dismiss banner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor"
                    fill="none" stroke-width="2.5" class="h-4 w-4 shrink-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>


        <div class="px-5">
            <Breadcrumb />
        </div>



        <section class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
            <article v-for="location in locations" :key="location.id"
                class="group flex rounded-md  flex-col overflow-hidden border border-neutral-300 bg-neutral-50 text-neutral-600 ">
                <div class="h-44 md:h-64 overflow-hidden">
                    <img class="object-cover transition duration-700 ease-out group-hover:scale-105"
                        :src="location.imageUrl" :alt="location.title" />
                </div>
                <div class="flex flex-col gap-4 p-6">
                    <div class="flex items-center gap-1 font-medium">
                        <span>{{ location.address }}</span>
                    </div>
                    <h3 class="text-balance text-xl lg:text-2xl font-bold text-neutral-900 ">{{ location.title }}</h3>
                    <router-link :to="{ name: 'LocationDetails', params: { slug: location.slug } }"
                        class="cursor-pointer whitespace-nowrap bg-black px-4 py-2 text-center text-sm font-medium tracking-wide text-neutral-100 transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-100 active:outline-offset-0  rounded-md">
                        Book Now
                    </router-link>
                </div>
            </article>
        </section>




    </div>
</template>