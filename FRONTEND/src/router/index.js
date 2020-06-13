import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from '@/services'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: () => import("../views/About.vue"),
  },

  {
    path: "/registracija",
    name: "Registracija",
    component: () => import("../views/Registracija.vue"),
  },
  {
    path: "/popis",
    name: "Popis",
    component: () => import("../views/Popis.vue"),
  },
  {
    path: "/prijava",
    name: "Prijava",
    component: () => import("../views/Prijava.vue"),
  },
  {
    path: "/anketa",
    name: "Anketa",
    component: () => import("../components/anketa.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const javnaStranica = '/'
  let loginPotreban
  if (javnaStranica === to.path) {
    loginPotreban = true
  }
  const user = auth.getUser()

  if (!user && loginPotreban) {
    return next(javnaStranica)
  }
  next()
})

export default router;
