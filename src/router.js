import Vue from "vue";
import Router from "vue-router";

import RegisterForm from "./components/RegisterForm.vue";
import LoginForm from "./components/LoginForm.vue";

Vue.use(Router);

export default new Router({
  mode: "history", // เพื่อให้ URL สวย
  routes: [
    {
      path: "/register",
      name: "register",
      component: RegisterForm
    },
    {
      path: "/login",
      name: "login",
      component: LoginForm
    }
  ]
});
