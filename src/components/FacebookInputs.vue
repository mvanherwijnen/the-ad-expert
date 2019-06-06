<template>
  <div class="editor-inputs">
    <label for="title">Title</label>
    <input type="text" id="title">
    <label for="message">Message</label>
    <textarea id="message" rows="10"></textarea>
    <input type="text" id="">
    <textarea name="" id="" rows="10"></textarea>
  </div>
</template>
<script>
  export default {
    components: {

    },
    data() {
      return {

      }
    },
  }
</script>
<style>
.editor-inputs {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
</style>
