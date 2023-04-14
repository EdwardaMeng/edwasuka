import { createRouter, createWebHashHistory } from "vue-router"


const Home = () => import("../components/Home")
const B = () => import("../components/CapturingTheOrdinary.vue")
const Rose4 = () => import("../components/Rose4.vue")

// const Nav = () => import("../components/Navigation")

const routes = [
    { path: "/", redirect: "/Home" },
    {
        path: "/Home",
        name: "Home",
        component: Home
    },
    { path: "/", redirect: "/PageB" },
    {
        path: "/PageB",
        name: "PageB",
        component: B
    },
    { path: "/", redirect: "/Rose4" },
    {
        path: "/Rose4",
        name: "Rose4",
        component: Rose4
    },


]



export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


