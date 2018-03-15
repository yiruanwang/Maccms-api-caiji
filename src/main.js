import Vue from 'vue';
import iView from 'iview';
import { router } from './router/index';
import store from './store';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import axios from 'axios';

Vue.use(iView);
Vue.prototype.$axios = axios
new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    mounted() {
        // this.$router.push({ name: "home_index" });
        this.$store.commit('updateMenulist');
    }
});
