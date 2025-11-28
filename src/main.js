// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import LoginForm from "./components/LoginForm.vue";
//import Dashboard from "./components/dashboard.vue";
//import WidgetCard from "./components/WidgetCard.vue";

Vue.component("login-form", LoginForm);
//Vue.component("dashboard", Dashboard);
// Vue.component("widget-card", WidgetCard); 


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
