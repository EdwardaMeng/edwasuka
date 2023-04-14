import { createApp } from "vue";
import App from "./App.vue";
import {router} from "./route";
import store from './store';
import './style.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import {directives} from "vuetify/dist/vuetify";


const vuetify = createVuetify({
    components,
    directives,
})



router.beforeEach((to, from, next) => {
    const hideNavbar = to.meta.hideNavBar || false
    store.commit('setHideNavbar', hideNavbar) // 将hideNavbar的值存储到Vuex中
    next()
})

createApp(App)
    .use(router)
    .use(store)
    .use(vuetify)
    .mount("#app");



