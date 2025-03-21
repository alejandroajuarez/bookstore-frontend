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
  <h1 id="head-new">Create A book Listing</h1>
  <div>
    <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Book</label>
    <input v-model="newBookParams.title" type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Author</label>
    <input v-model="newBookParams.author" type="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Price</label>
    <input v-model="newBookParams.price" type="text" class="form-control" id="inputAddress" placeholder="1234">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Stock</label>
    <select v-model="newBookParams.stock" id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
    </select>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Create Book Listing</button>
  </div>
</form>
  </div>
</template>