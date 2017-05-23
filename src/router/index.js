import Vue from 'vue';
import Router from 'vue-router';

import shoppingCart from '@/components/shoppingCart';
import address from '@/components/address';
import nothing from '@/components/nothing';
import home from '@/components/home';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: home
    }, {
        path: '/shoppingCart',
        name: 'shoppingCart',
        component: shoppingCart
    }, {
        path: '/address',
        name: 'address',
        component: address
    }, {
        path: '*',
        name: 'nothing',
        component: nothing
    }]
});