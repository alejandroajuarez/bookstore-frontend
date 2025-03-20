<script>
export default {
  data: function() {
    return {
      newBookParams: {},
    };
  },
  methods: {
    handleSubmit: function () {
      this.$emit("createBook", this.newBookParams);
      this.newBookParams = {};
    },
  },
};
</script>

<template>
  <div>
    <h1>New Book Listing</h1>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        Book:
        <input v-model="newBookParams.title" type="text" />
      </div>
      <div>
        Author:
        <input v-model="newBookParams.author" type="text" />
      </div>
      <div>
        Price:
        <input v-model="newBookParams.price" type="number" />
      </div>
      <div>
        Stock:
        <input v-model="newBookParams.stock" type="number" />
      </div>
      <button type="submit">Create Book Listing</button>
    </form>
  </div>
</template>