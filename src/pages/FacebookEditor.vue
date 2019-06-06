<template>
  <div class="editor-layout">
    <div class="add-frame">
      <facebook-frame></facebook-frame>
    </div>
    <div class="add-inputs">
      <facebook-inputs></facebook-inputs>
    </div>
  </div>
</template>

<script>
import FacebookFrame from '../components/FacebookFrame';
import FacebookInputs from '../components/FacebookInputs';
export default {
  components: {
    FacebookFrame,
    FacebookInputs,
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
    display: flex;
    flex-direction: column;
    width: 600px;
  }

  .add-frame {
    width: 100%;;
    position: relative;
  }
</style>

