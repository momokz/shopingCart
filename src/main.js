import Vue from 'vue';
import axios from 'axios';
import router from './router';

// components
import App from './App';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})