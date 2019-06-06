
<template>
  <div class="container">
    <div class="container">
      <h2>Latest advice items</h2>
      <ul>
        <li v-if="adviceItems" v-for="(adviceItem, index) in adviceItems" :key="index">
            {{adviceItem.fields.content}}
        </li>
      </ul>
    </div>
    <button v-on:click="giveAdvice('hello')">Press me</button>
  </div>
</template>
<script>
  import * as advisor from '../plugins/advisor'

  export default {
    computed: {
      adviceItems() {
        return this.giveAdvice('eindbaas');
      },
    },
    methods: {
      giveAdvice(content) {
        let result = advisor.findAdviceItems(content, this.$store.state.advice.adviceItems);
        console.log(result);
        return result;
      }
    },
    async fetch({ store, params }) {
      await store.dispatch('advice/getAdviceItems', params.slug)
    }
  }
</script>
