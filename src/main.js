import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from "vue";
import App from "./App.vue";
import {router} from "./route";
import store from './store';

router.beforeEach((to, from, next) => {
    const hideNavbar = to.meta.hideNavBar || false
    store.commit('setHideNavbar', hideNavbar) // 将hideNavbar的值存储到Vuex中
    next()
})

createApp(App)
    .use(router)
    .use(store)
    .mount("#app");


import "bootstrap/dist/js/bootstrap.js"

