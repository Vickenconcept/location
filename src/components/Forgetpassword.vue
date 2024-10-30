<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';



const email = ref('');
const password = ref('');

// Access the Vuex store and Vue Router
const store = useStore();
const router = useRouter();

const resetPassword = async () => {
    try {
        await store.dispatch('resetPassword', {
            email: email.value,
            password: password.value
        });
        alert('New password: ' + password.value);
        router.push('/login');
    } catch (error) {
        alert(error.message);
    }
};


</script>
<template>
    <div>
        <div class="font-[sans-serif] bg-gradient-to-r from-purple-900 via-purple-800 to-purple-600 text-gray-800">
            <div class="min-h-screen flex fle-col items-center justify-center lg:p-6 p-4">
                <div class="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
                    <div>
                        <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui-white.svg" alt="logo"
                                class='w-52 mb-12 inline-block' />
                        </a>
                        <h2 class="text-4xl font-extrabold lg:leading-[50px] text-white">
                            Seamless Login for Exclusive Access
                        </h2>
                        <p class="text-sm mt-6 text-white">Immerse yourself in a hassle-free login journey with our
                            intuitively designed login form. Effortlessly access your account.</p>
                        <p class="text-sm mt-6 text-white">Don't have an account <a href="javascript:void(0);"
                                class="text-white font-semibold underline ml-1">Register here</a></p>
                    </div>

                    <form @submit.prevent="resetPassword"
                        class="bg-white rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto w-full">
                        <h3 class="text-3xl font-extrabold mb-12">
                            Reset password
                        </h3>

                        <div>
                            <input v-model="email" type="email" autocomplete="email" required
                                class="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800"
                                placeholder="Email address" />
                        </div>
                        <div>
                            <input v-model="password" type="password" autocomplete="current-password" required
                                class="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800"
                                placeholder="Password" />
                        </div>

                        <div>
                            <button type="submit"
                                class="w-full shadow-xl py-3 px-6 text-sm font-semibold rounded-md text-white bg-gray-800 hover:bg-[#222] focus:outline-none">
                                Change Password
                            </button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
