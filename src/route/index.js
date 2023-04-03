import { createRouter, createWebHashHistory } from "vue-router"

const Home = () => import("../components/Home")
const B = () => import("../components/B")
const C = () => import("../components/C")

const HomeImage = () => import("../components/HomeImage.vue")
// const Nav = () => import("../components/Navigation")

const routes = [
    { path: "/", redirect: "/HomeImage" },
    {
        path: "/HomeImage",
        name: "HomeImage",
        component: HomeImage,
        meta: {
            hideNavbar: true
        }
    },
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
    { path: "/", redirect: "/PageC" },
    {
        path: "/PageC",
        name: "PageC",
        component: C
    },


]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
