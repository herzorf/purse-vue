import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Add from "@/views/Add.vue";
import Labels from "@/views/Labels.vue";
import Statistics from "@/views/Statistics.vue";
import NotFound from "@/views/NotFound.vue";
import EditLabel from "@/views/EditLabel.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path : "/editLabel/:id",
        component: EditLabel
    },
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

];

const router = new VueRouter({
    routes
});

export default router;
