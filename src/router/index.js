import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import SignIn from "../views/SignInFlow/SignIn.vue";
import Recover from "../views/SignInFlow/Recover.vue";
import Request from "../views/SignInFlow/Request.vue";
import { auth } from "@/main";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/team",
    name: "team",
    component: Team,
    meta: {
      requiresAuth: true,
    },
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

router.beforeEach((to, from, next) => {
  console.log(auth);
  const currentUser = auth.currentUser();
  const requiresAuth = to.matched.some((record) => {
    return record.meta.requiresAuth;
  });

  console.log("---");
  console.log(currentUser);
  console.log("---");

  if (requiresAuth && !currentUser) {
    next("signin");
  } else {
    next();
  }
});

export default router;
