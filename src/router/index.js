import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import SignIn from "../views/SignInFlow/SignIn.vue";
import Recover from "../views/SignInFlow/Recover.vue";
import Request from "../views/SignInFlow/Request.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/team",
    name: "team",
    component: Team,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/request",
    name: "request",
    component: Request,
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
