import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("./views/Home");
const About = () => import("./views/About");

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        // title:'首页',
        // requireAuth:true
      }
    },
    {
      path: "/about",
      name: "About",
      component: About,
      meta: {}
    }
  ]
});

export default router;
