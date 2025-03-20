<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const errors = ref([]);
    const formData = ref({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });

    const handleSubmit = () => {
      errors.value = [];
      axios
        .post("http://localhost:3000/users.json", formData.value)
        .then((response) => {
          console.log(response.data);
          formData.value = { name: "", email: "", password: "", password_confirmation: "" };
          window.location.href = "/"; // Redirect after successful signup
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          errors.value = error.response.data.errors;
        });
    };

    return { errors, formData, handleSubmit };
  },
};
</script>

<template>
  <div id="signup">
    <h1>Signup</h1>
    <ul v-if="errors.length">
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
    <form @submit.prevent="handleSubmit">
      <div>
        Name: <input v-model="formData.name" type="text" />
      </div>
      <div>
        Email: <input v-model="formData.email" type="email" />
      </div>
      <div>
        Password: <input v-model="formData.password" type="password" />
      </div>
      <div>
        Password confirmation: <input v-model="formData.password_confirmation" type="password" />
      </div>
      <button type="submit">Signup</button>
    </form>
  </div>
</template>