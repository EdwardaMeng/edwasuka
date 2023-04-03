import { createStore } from 'vuex'

const store = createStore({
    state: {
        hideNavbar: false
    },
    mutations: {
        setHideNavbar(state, hideNavbar) {
            state.hideNavbar = hideNavbar
        }
    }
})

export default store

