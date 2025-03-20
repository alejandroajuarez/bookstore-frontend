<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";

axios.defaults.baseURL = "127.0.0.1:5000";
axios.defaults.withCredentials = true;

export default {
  name: "app",
  components: {
    Header,
    Content,
    Footer,
  },
};
</script>

<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style></style>