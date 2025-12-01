<template>
  <div class="login-container">
    <h2>Login</h2>

    <form @submit.prevent="login">
      <div class="form-group">
        <label>Email</label>
        <input 
          type="email" 
          v-model="email" 
          placeholder="Enter email"
          required
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input 
          type="password" 
          v-model="password" 
          placeholder="Enter password"
          required
        />
      </div>

      <button type="submit" class="btn">Login</button>

      <p class="link">
        ยังไม่มีบัญชี? 
        <span @click="register" class="register-link">Register</span>
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async login() {
      if (!this.email || !this.password) {
        alert("กรุณากรอก Email และ Password");
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:3000/login",       // ⭐ เชื่อม backend
          {
            email: this.email,
            password: this.password,
          }
        );

        alert(response.data.message || "Login success");

        // ส่งข้อมูล user ไปหน้า dashboard
        this.$emit("login-success", response.data.user);

      } catch (err) {
        alert(
          "Error: " +
          ((err.response && err.response.data && err.response.data.message) ||
            err.message ||
            "Login failed")
        );
      }
    },

    register() {
      this.$emit("switch-view", "register");
    }
  },
};
</script>

<style scoped>
.login-container {
  width: 350px;
  margin: 60px auto;
  padding: 25px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 0px 12px rgba(0,0,0,0.15);
}

.form-group {
  margin-bottom: 16px;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.btn {
  width: 100%;
  padding: 12px;
  background: #007bff;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
}

.link {
  margin-top: 15px;
  text-align: center;
}

.register-link {
  color: #007bff;
  cursor: pointer;
}
</style>
