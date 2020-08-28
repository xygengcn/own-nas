import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "admin",
        component: () => import("../pages/admin"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import( /* webpackChunkName: "about" */ "../pages/login")
    }
];

const router = new VueRouter({
    routes
});

export default router;