import { createRouter, createWebHashHistory } from "vue-router"


const Home = () => import("../components/Home")
const Rose4 = () => import("../components/Rose4.vue")
const EveryDay = () => import("../components/EveryDay.vue")
const SneakerVision = () => import("../components/SneakerVision.vue")
const FelineFotos = () => import("../components/FelineFotos.vue")

// const Nav = () => import("../components/Navigation")

const routes = [
    { path: "/", redirect: "/Home" },
    {
        path: "/Home",
        name: "Home",
        component: Home
    },
    { path: "/", redirect: "/FelineFotos" },
    {
        path: "/FelineFotos",
        name: "FelineFotos",
        component: FelineFotos
    },
    { path: "/", redirect: "/Rose4" },
    {
        path: "/Rose4",
        name: "Rose4",
        component: Rose4
    },
    { path: "/", redirect: "/EveryDay" },
    {
        path: "/EveryDay",
        name: "EveryDay",
        component: EveryDay
    },
    { path: "/", redirect: "/SneakerVision" },
    {
        path: "/SneakerVision",
        name: "SneakerVision",
        component: SneakerVision
    },


]



export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


