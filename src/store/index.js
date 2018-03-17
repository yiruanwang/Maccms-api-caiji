import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import app from './modules/app';
import user from './modules/user';
import config from './modules/config';

Vue.use(Vuex);
Vue.prototype.$axios = axios
axios.defaults.timeout = 3000;

const store = new Vuex.Store({
    mutations: {
        //
    },
    actions: {

    },
    modules: {
        app,
        user,
        config
    }
});

export default store;
