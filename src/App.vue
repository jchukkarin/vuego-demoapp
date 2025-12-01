<template>  
  <div id="app">
    <login-form v-if="currentView === 'login'" @login-success="onLoginSuccess" @switch-view="switchView"/>
    <register-form v-if="currentView === 'register'" @switch-view="switchView"/>
    <dashboard v-if="currentView === 'dashboard'" :user="currentUser" @logout="onLogout"/>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";
import Dashboard from "./components/dashboard.vue";

export default {
  name: "App",
  components: {
    LoginForm,
    RegisterForm,
    Dashboard
  },
  data() {
    return {
      currentView: 'login',
      currentUser: null
    };
  },
  methods: {
    switchView(view) {
      this.currentView = view;
    },
    onLoginSuccess(user) {
      this.currentUser = user;
      this.currentView = 'dashboard';
    },
    onLogout() {
      this.currentUser = null;
      this.currentView = 'login';
    }
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Lato', sans-serif;
}
</style>
