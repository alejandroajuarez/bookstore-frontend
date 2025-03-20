<script>
export default {
  props: {
    books: Array,
  },
};
</script>

<template>
  <div>
    <h1>All Books</h1>
    <div v-for="book in books" v-bind:key="book.id">
      <h2>Title: {{ book.title }}</h2>
      <h4>{{ book.author }}</h4>
      <p>${{ book.price }} <strong>|</strong> {{ book.stock }}</p>
    </div>
  </div>
</template>

<style></style>




<!-- Books: book_id, title, author, price, stock -->