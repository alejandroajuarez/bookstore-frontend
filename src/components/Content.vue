<script>
import axios from "axios";
import BooksIndex from "./BooksIndex.vue"

export default {
  components: {
    BooksIndex,
  },
  data: function () {
    return {
      books: [],
    };
  },
  created: function () {
    this.handleIndexBooks();
  },
  methods: {
    handleIndexBooks: function () {
      axios.get("/books.json").then((response) => {
        console.log("books index", response);
        this.books = response.data;
      });
    },
  },
};
</script>

<template>
  <main>
    <BooksIndex v-bind:books="books" />
  </main>
</template>

<style></style>