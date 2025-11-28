<template>  
  <div id="app">
    <login-form/>
    <dashboard/>
  </div>
</template>

<script>
import Dashboard from "./components/dashboard.vue";
import LoginForm from "./components/LoginForm.vue";

export default {
  name: "App",
  components: {
    LoginForm,
    Dashboard
  }
};
</script>

<style>

</style>
