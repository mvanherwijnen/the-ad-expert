<template>
  <div class="editor-layout">
    <div class="add-frame">
      <facebook-frame></facebook-frame>
    </div>
    <div class="add-inputs">

    </div>
  </div>
</template>

<script>
import FacebookFrame from '../components/FacebookFrame';
export default {
  components: {
    FacebookFrame,
  }
}
</script>

<style scoped>
  .editor-layout {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
  }

  .add-inputs {
    width: 500px;
  }

  .add-frame {
    width: 100%;;
    position: relative;
  }
</style>

