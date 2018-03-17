import Vue from 'vue';
import iView from 'iview';
import { router } from './router/index';
import store from './store';
import App from './app.vue';
import 'iview/dist/styles/iview.css';


import util from './libs/util';

Vue.use(iView);


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
