<template>
  <div class="editor-inputs">
    <label for="title">Title</label>
    <input v-model="ad.title" @input="lelijkeDingen" type="text" id="title">
    <label for="message">Message</label>
    <textarea v-model="ad.message" @input="lelijkeDingen" id="message" rows="10"></textarea>
    <label for="vacancy-title">Vacacy title</label>
    <input v-model="ad.vacancyTitle" @input="lelijkeDingen" type="vacancy-title" id="">
    <label for="vacancy-description">Vacacy Description</label>
    <textarea v-model="ad.vacancyDescription" @input="lelijkeDingen" id="vacancy-description" rows="10"></textarea>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import { debounce } from 'lodash'

  export default {
    computed: {
      ...mapState([
        'ad'
      ])
    },
    mounted() {
      this.lelijkeDingen = debounce(this.lelijkeDingen, 1000);
    },
    methods: {
      lelijkeDingen() {
        this.$store.commit('lelijkeHack');
      }
    }
  }
</script>
<style>
  .editor-inputs {
    display: flex;
    border-left: 1px solid var(--border-light);
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding: 24px;
  }

  input, textarea {
    border: 1px solid var(--border-light);
    border-radius: 4px;
    padding: 8px;
    min-height: 32px;
    font-size: 14px;
  }

  label {
    margin-top: 8px;
    color: #666;
    font-size: 14px;

    &:active {
      border-radius: 4px;
    }
  }
</style>
