<template>
  <div class="register-wrapper">
    <div class="register-container">
      <div class="h2">Register</div>
      <form @submit.prevent="register">
        <div class="form-group">
            <input type="text" id="name" placeholder="Name" v-model="name" required>
            <label for="name">Name</label>
        </div>
        <div class="form-group">
          <input type="tel" id="phone" placeholder="Phone Number" v-model="phone" required>
          <label for="phone">Phone Number</label>
        </div>
        <div class="form-group">
          <input type="email" id="email" placeholder="Email" v-model="email" required>
          <label for="email">Email</label>
        </div>
        <div class="form-group">
          <input type="password" id="password" placeholder="Password" v-model="password" required>
          <label for="password">Password</label>
        </div>
        <div class="form-group">
          <input type="password" id="confirmPassword" placeholder="Confirm Password" v-model="confirmPassword" required>
          <label for="confirmPassword">Confirm Password</label>
        </div>
        <div class="form-group">
          <input type="text" id="address" placeholder="Address" v-model="address" required>
          <label for="address">Address</label>
        </div>
        
        <div class="button-area">
          <button type="submit" class="btn btn-primary">Sign Up</button>
          <button type="button" class="btn btn-google" @click="googleLogin">
            <span class="google-icon">G</span> Sign up with Google
          </button>
        </div>
        
        <div class="login-link">
          Already have an account? <a href="#" @click.prevent="$emit('switch-view', 'login')">Login here</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterForm",
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: ""
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      try {
        const response = await axios.post("http://localhost:3000/register", {
          name: this.name,
          phone: this.phone,
          email: this.email,
          password: this.password,
          address: this.address
        });

        alert(response.data.message);
        this.$emit('switch-view', 'login');

      } catch (err) {
        alert("Error: " + ((err.response && err.response.data && err.response.data.message) || err.message));
      }
    },
    googleLogin() {
      alert("Google Login is mocked.");
    }
  }
};
</script>

<style scoped>
.register-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(243.87deg, #22bf64 30.6%, #371933 130.6%);
}

.register-container {
  width: 400px;
  background-color: #fff;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0px 2px 50px rgba(0, 0, 0, 0.2);
}

.h2 {
  color: #000;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  position: relative;
  margin-bottom: 20px;
}

input {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #aaaaaa;
  font-size: 16px;
  outline: none;
}

label {
  position: absolute;
  top: 10px;
  left: 0;
  color: #aaa;
  transition: 0.2s;
  pointer-events: none;
}

input:focus + label,
input:not(:placeholder-shown) + label {
  top: -10px;
  font-size: 12px;
  color: #22bf64;
}

input::placeholder {
  color: transparent;
}

.button-area {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
}

.btn {
  height: 40px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
}

.btn-primary {
  background: linear-gradient(198.08deg, #22bf64 45.34%, #e281e7 224.21%);
}

.btn-google {
  background-color: #db4437;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.google-icon {
  font-weight: bold;
  background: white;
  color: #db4437;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.login-link {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
}

.login-link a {
  color: #22bf64;
  text-decoration: none;
}
</style>
