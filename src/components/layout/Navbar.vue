<script setup>
import { computed } from 'vue'; // Import computed from Vue
import { useStore } from 'vuex'; // Import useStore to access Vuex store
import { useRouter } from 'vue-router';

const router = useRouter();

const store = useStore();

const isAuthenticated = computed(() => store.getters.isAuthenticated);


const logout = () => {
    store.dispatch('logout');
    router.push('/login');

};
</script>

<template>
    <div>

        <nav class="bg-neutral-50 border-b border-neutral-300">
            <div x-data="{ mobileMenuIsOpen: false }" @click.away="mobileMenuIsOpen = false"
                class="flex items-center justify-between   py-4  max-w-6xl mx-auto" aria-label="penguin ui menu">
                <!-- Brand Logo -->
                <a href="#" class="text-2xl font-bold text-neutral-900 ">
                    <span>Peng<span class="text-black ">ui</span>n</span>
                </a>
                <!-- Desktop Menu -->
                <ul class=" items-center gap-2 sm:flex divide-x-2 ">

                    <router-link to="/"
                        class="font-bold text-black underline-offset-2 px-4 hover:text-black focus:outline-none focus:underline ">Home</router-link>
                    <router-link to="/dashboard"
                        class="font-medium text-neutral-600 underline-offset-2 px-4 hover:text-black focus:outline-none focus:underline "
                        v-if="isAuthenticated">Dashboard</router-link>
                    <router-link to="/login"
                        class="font-medium text-neutral-600 underline-offset-2 px-4 hover:text-black focus:outline-none focus:underline "
                        v-if="!isAuthenticated">Login</router-link>
                    <router-link to="/register"
                        class="font-medium text-neutral-600 underline-offset-2 px-4 hover:text-black focus:outline-none focus:underline "
                        v-if="!isAuthenticated">Register</router-link>
                    <button @click.prevent="logout"
                        class="rounded-md bg-black px-4 py-2 text-center text-sm font-medium tracking-wide text-neutral-100 hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-100 active:outline-offset-0 "
                        v-if="isAuthenticated">Logout</button>
                </ul>

                <!-- Mobile Menu Button -->
                <button @click="mobileMenuIsOpen = !mobileMenuIsOpen" :aria-expanded="mobileMenuIsOpen"
                    :class="mobileMenuIsOpen ? 'fixed top-6 right-6 z-20' : null" type="button"
                    class="flex text-neutral-600 dark:text-neutral-300 sm:hidden" aria-label="mobile menu"
                    aria-controls="mobileMenu">
                    <svg x-cloak x-show="!mobileMenuIsOpen" xmlns="http://www.w3.org/2000/svg" fill="none"
                        aria-hidden="true" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg x-cloak x-show="mobileMenuIsOpen" xmlns="http://www.w3.org/2000/svg" fill="none"
                        aria-hidden="true" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <!-- Mobile Menu -->

            </div>
        </nav>
    </div>
</template>
