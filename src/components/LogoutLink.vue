<script>
import axios from "axios";

export default {
  setup() {
    const handleLogout = () => {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("jwt");
      window.location.href = "/"; // Redirect to home or login page
    };

    return { handleLogout };
  },
};
</script>

<template>
  <a href="#" @click.prevent="handleLogout">Logout</a>
</template>