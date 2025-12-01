<template>
  <div class="login-container">
    <h2>Login</h2>

    <form @submit.prevent="login">
      <div class="form-group">
        <label>Username</label>
        <input 
          type="text" 
          v-model="username" 
          placeholder="Enter username"
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
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",

  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    async login() {
      if (!this.username || !this.password) {
        alert("กรุณากรอก Username และ Password");
        return;
      }

      try {
        const response = await axios.post(
          "http://api2.wisksolution.com/login",
          {
            username: this.username,
            password: this.password,
          }
        );

        // แสดงข้อความตอบกลับจาก API
        alert(response.data.message || "Login success");

        // ส่งข้อมูลกลับไปยัง parent component
        this.$emit("login-success", response.data.user);

      } catch (error) {
        alert(
          "Error: " +
            ((error.response && error.response.data && error.response.data.message) || error.message || "Login failed")
        );
      }
    },
  },
};
</script>

<style scoped>
/* รีเซ็ตเบื้องต้น */
* {
  box-sizing: border-box;
}

/* คอนเทนเนอร์ */
.login-container {
  width: 350px;
  margin: 50px auto;
  padding: 25px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}

/* หัวข้อ */
h2 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
}

/* ฟอร์ม */
.form-group {
  margin-bottom: 18px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  transition: 0.2s;
}

input:focus {
  border-color: #007bff;
}

/* ปุ่ม */
.btn {
  width: 100%;
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.2s;
}

.btn:hover {
  background: #0056b3;
}
</style>
