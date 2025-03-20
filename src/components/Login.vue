<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const errors = ref([]);
    const formData = ref({
      email: "",
      password: "",
    });

    // Check if JWT exists and set it in Axios headers
    onMounted(() => {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
      }
    });

    const handleSubmit = () => {
      errors.value = [];
      axios
        .post("http://localhost:3000/sessions.json", formData.value)
        .then((response) => {
          console.log(response.data);
          axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.jwt}`;
          localStorage.setItem("jwt", response.data.jwt);
          formData.value = { email: "", password: "" }; // Clear form
          window.location.href = "/"; // Redirect to home or dashboard
        })
        .catch((error) => {
          console.log(error.response);
          errors.value = ["Invalid email or password"];
        });
    };

    return { errors, formData, handleSubmit };
  },
};
</script>

<template>
  <div id="login">
    <h1>Login</h1>
    <ul v-if="errors.length">
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
    <form @submit.prevent="handleSubmit">
      <div>
        Email: <input v-model="formData.email" type="email" />
      </div>
      <div>
        Password: <input v-model="formData.password" type="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>