<script>
import axios from "axios";
import BooksIndex from "./BooksIndex.vue"
import BooksNew from "./BooksNew.vue"

export default {
  components: {
    BooksIndex,
    BooksNew,
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
    handleCreateBooks: function (params) {
      axios
      .post("/books.json", params)
      .then((response) => {
        console.log("books create", response);
        this.books.push(response.data);
      })
      .catch((error) => {
        console.log("books create error", error.response);
      });
    }
  },
};
</script>

<template>
  <main>
    <BooksNew v-on:createBook="handleCreateBooks"/>
    <BooksIndex v-bind:books="books" />
  </main>
</template>

<style></style>