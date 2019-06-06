<template>
  <div class="container">
    <div class="container">
      <h2>Latest advice items</h2>
      <ul>
        <li v-if="adviceItems" v-for="(adviceItem, index) in adviceItems" :key="index">
            {{adviceItem.fields.title}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      adviceItems() {
        return this.$store.state.advice.adviceItems
      }
    },
    async fetch({ store, params }) {
      await store.dispatch('advice/getAdviceItems', params.slug)
    }
  }
</script>
