import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Home from "../views/Home.vue";
import Add from "@/views/Add.vue";
import Labels from "@/views/Labels.vue";
import Statistics from "@/views/Statistics.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        redirect: "/add"
    },
    {
        path : "/add",
        component: Add
    },
    {
        path : "/labels",
        component: Labels,
    },
    {
        path : "/statistics",
        component: Statistics
    },
    {
        path : '*',
        component: NotFound
    }


    // {
    //     path: "/",
    //     name: "Home",
    //     component: Home
    // },
    // {
    //     path: "/about",
    //     name: "About",
    //     component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    // }
];

const router = new VueRouter({
    routes
});

export default router;
