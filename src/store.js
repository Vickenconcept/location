// src/store.js
import { createStore } from 'vuex';

// src/store.js
export default createStore({
    state: {
        user: null,
        token: localStorage.getItem('token') || '', // Fetch token from localStorage
        isAuthenticated: !!localStorage.getItem('token'), // Set based on token presence
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
            localStorage.setItem('userInStorage', JSON.stringify(user));
            state.isAuthenticated = true;
        },
        SET_TOKEN(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
            state.isAuthenticated = true; // Mark as authenticated
        },
        RESET_PASSWORD(state, user) {
            state.user = user;
            localStorage.setItem('userInStorage', JSON.stringify(user));
            // state.isAuthenticated = true;
        },
        LOGOUT(state) {
            state.user = null;
            state.token = '';
            state.isAuthenticated = false;
            localStorage.removeItem('token');
            // localStorage.removeItem('userInStorage');
        },
    },
    actions: {
        register({ commit }, credentials) {

            if (credentials.name != '' && credentials.email != '' && credentials.password != '') {

                const User = { name: credentials.name, email: credentials.email, password: credentials.password };

                commit('SET_USER', User);
            } else {
                throw new Error('Incomplete credentials');
            }
        },
        login({ commit }, credentials) {

            const userInStorage = localStorage.getItem('userInStorage');
            const validUser = JSON.parse(userInStorage);

            if (userInStorage) {
                if (credentials.email === validUser.email && credentials.password === validUser.password) {
                    const mockToken = 'dummyToken123';

                    commit('SET_USER', validUser);
                    commit('SET_TOKEN', mockToken);
                } else {
                    throw new Error('Invalid credentials');
                }
            } else {
                throw new Error('User not found!. Please register');
            }
        },
        resetPassword({ commit }, credentials) {

            if (credentials.email != '' && credentials.password != '') {
                const userInStorage = localStorage.getItem('userInStorage')
                const user = JSON.parse(userInStorage);


                if (user.email === credentials.email) {
                    user.password = credentials.password

                    commit('RESET_PASSWORD', user);
                } else {

                    throw new Error('User Not found!');
                }


            } else {
                throw new Error('Enter email and new password');
            }

        },

        logout({ commit }) {
            commit('LOGOUT');
        },
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
    },
});

