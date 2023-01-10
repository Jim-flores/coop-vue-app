// Composables
import DashBoard from "@/components/DashBoard.vue";
import { createRouter, createWebHistory } from "vue-router";
// import store from "../store";
// import authentication from "../components/Login.vue";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
        meta: {
          admin: false,
        },
      },
    ],
  },
  {
    path: "/dashboard",
    name: "DashBoard",
    component: DashBoard,
    meta: {
      admin: true,
    },
  },
];
const isAuth = () => {
  const token = localStorage.getItem("token");
  if (token) return true;
  return false;
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.admin) {
    if (isAuth()) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
