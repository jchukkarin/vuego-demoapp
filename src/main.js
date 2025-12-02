<<<<<<< HEAD
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
=======
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
>>>>>>> bcff32a4285968ad5580c2476416d5f9d4e96d5e
