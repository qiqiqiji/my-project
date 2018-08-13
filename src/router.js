import Vue from "vue";
import Router from "vue-router";

import Home from "./views/carousel/carousel.vue";
const carousel2 = () => import("./views/carousel2/carousel2.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: carousel2
  }
];

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
