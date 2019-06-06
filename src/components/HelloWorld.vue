<template>
  <div class="ad-container">
    <facebook-ad>
      <template #ad-title>
        <h4 v-html="highLightedTitle"></h4>
      </template>
      <template #ad-message>
        <p class="message" v-html="highLightedMessage"></p>
      </template>
      <template #vacancy-title >
        <h3 v-html="highLightedVacancyTitle"></h3>
      </template>
      <template #vacancy-description>
        <p v-html="highLightedVacancyDescription"/>
      </template>
    </facebook-ad>
    <input type="text" v-model="query">
  </div>
</template>
<script>
  import FacebookAd from './FacebookAd';

  export default {
    components: {
      FacebookAd,
    },
    data() {
      return {
        query: 'Lorem',
        ad: {
          title: 'Lorem ipsum dolor sit amet',
          message: 'Amet aspernatur culpa, cumque debitis dolor eos harum nemo nihil odio quia quidem',
          vacancyTitle: 'Lorem ipsum dolor sit amet',
          vacancyDescription: 'Amet aspernatur culpa, cumque debitis dolor eos harum nemo nihil odio quia quidem',
        }
      }
    },
    computed: {
      highLightedTitle() {
        return this.highlight('title');
      },
      highLightedMessage() {
        return this.highlight('message');
      },
      highLightedVacancyTitle() {
        return this.highlight('vacancyTitle');
      },
      highLightedVacancyDescription() {
        return this.highlight('vacancyDescription');
      },
    },
    methods: {
      highlight(field) {
        console.log('trigger')
        if(!this.query) {
          return this.ad[field];
        }
        return this.ad[field].replace(new RegExp(this.query, "gi"), match => {
          return '<span class="highlightText">' + match + '</span>';
        });
      }
    },
  }
</script>
<style>
.ad-container {
  height: 100%;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  justify-content: center;
  padding: 2rem;
}

.highlightText {
  background-color: yellow;
  display: inline;
}
</style>
