import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Classement from "../views/Classement.vue";
import Equipes from "../views/Equipes.vue";
import Equipe from "../views/Equipe.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/ligues/:id/classement",
    component: Classement,
  },
  {
    path: "/ligues/:id/equipes",
    component: Equipes,
  },
  {
    path: "/equipes/:id",
    component: Equipe,
    name: "equipe",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
