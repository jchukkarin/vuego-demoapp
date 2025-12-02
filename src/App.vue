<template>
  <div id="app">
    <!-- แสดงหน้า Login -->
    <LoginForm 
      v-if="currentView === 'login'" 
      @switch-view="switchView"
      @login-success="goDashboard"
    />

    <!-- แสดงหน้า Register -->
    <RegisterForm 
      v-if="currentView === 'register'" 
      @switch-view="switchView"
    />

    <!-- แสดงหน้า Dashboard -->
    <Dashboard 
      v-if="currentView === 'dashboard'" 
      :user="loggedUser"
      @logout="logout"
    />
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";
import Dashboard from "./components/Dashboard.vue";

export default {
  name: "App",

  components: {
    LoginForm,
    RegisterForm,
    Dashboard,
  },

  data() {
    return {
      currentView: "login",   // ⭐ เริ่มต้นที่หน้า Login เสมอ
      loggedUser: null,       // ⭐ เก็บข้อมูล user ที่ login สำเร็จ
    };
  },

  methods: {
    // เปลี่ยนหน้า เช่น login → register
    switchView(view) {
      this.currentView = view;
    },

    // เมื่อ Login สำเร็จ
    goDashboard(user) {
      this.loggedUser = user;
      this.currentView = "dashboard";
    },

    // Logout กลับไปหน้า Login
    logout() {
      this.loggedUser = null;
      this.currentView = "login";
    }
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial';
  background: #f5f5f5;
}
</style>
