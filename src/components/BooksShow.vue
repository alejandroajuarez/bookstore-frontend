<script>
export default {
  props: {
    book: Object,
  },
  data: function () {
    return {
      editBookParams: {},
    };
  },
  created: function () {
    this.editBookParams = { ...this.book };
  },
  methods: {
    handleSubmit: function () {
      this.$emit("updateBook", this.book.id, this.editBookParams);
    },
  },
};
</script>

<template>
  <div>
    <h2>Book Information</h2>
    <h4>Book Title: {{ book.title }}</h4>
    <p>Author: {{ book.author }}</p>
    <p>Price: {{ book.price }}</p>
    <p>Quantity: {{ book.stock }}</p>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        Book Title:
        <input v-model="editBookParams.title" type="text" />
      </div>
      <div>
        Author:
        <input v-model="editBookParams.author" type="text" />
      </div>
      <div>
        Price:
        <input v-model="editBookParams.price" type="number" />
      </div>
      <div>
        Quantity:
        <input v-model="editBookParams.stock" type="number" />
      </div>
      <button type="submit">Update Book</button>
    </form>
  </div>
</template>