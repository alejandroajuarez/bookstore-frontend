<script>
import axios from "axios";
import BooksIndex from "./BooksIndex.vue";
import BooksNew from "./BooksNew.vue";
import BooksShow from "./BooksShow.vue";
import Modal from "./Modal.vue";

export default {
  components: {
    BooksIndex,
    BooksNew,
    BooksShow,
    Modal,
  },
  data: function () {
    return {
      books: [],
      currentBook: {},
      isBooksShowVisible: false,
    };
  },
  created: function () {
    this.handleIndexBooks();
  },
  methods: {
    handleIndexBooks: function () {
      axios.get("http://localhost:5000/books.json").then(response => {
        console.log(response.data)
      })
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
    },
    handleShowBook: function (book) {
      console.log("handleShowBook", book);
      this.currentBook = book;
      this.isBooksShowVisible = true;
    },
    handleUpdateBook: function (id, params) {
      console.log("handleUpdateBook", id, params);
      axios.patch(`/books/${id}.json`, params)
      .then((response) => {
        console.log("books update", response);
        this.books = this.books.map((book) => {
          if (book.id === response.data.id) {
            return response.data;
          } else {
            return book;
          }
        });
        this.handleClose();
      })
      .catch((error) => {
        console.log("books update error", error.response);
      });
    },
    handleDestroyBook: function (book) {
      axios.delete(`/books/${book.id}.json`).then((response) => {
        console.log("books destroy", response);
        var index = this.books.indexOf(book);
        this.books.splice(index, 1);
        this.handleClose();
        this.handleLastTest();
      });
    },
    handleClose: function () {
      this.isBooksShowVisible = false;
    },
    handleFirstTest: function () {
      console.log("end of first handle function");
    },
    handleLastTest: function () {
      console.log("end of last handle function");
    }
  },
};
</script>

<template>
  <main>
    <BooksNew v-on:createBook="handleCreateBooks"/>
    <BooksIndex v-bind:books="books" v-on:showBook="handleShowBook"/>
    <Modal v-bind:show="isBooksShowVisible" v-on:close="handleClose">
      <BooksShow v-bind:book="currentBook" v-on:updateBook="handleUpdateBook" v-on:destroyBook="handleDestroyBook"/>
    </Modal>
  </main>
</template>

<style></style>