<template>
  <div class="ad-container" v-if="adviceItems">
    <addy-animation-frame></addy-animation-frame>
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
  </div>
</template>
<script>
  import FacebookAd from './FacebookAd'
  import AddyAnimationFrame from './AddyAnimationFrame'
  import client from '../../plugins/contentful'
  import * as advisor from '../../plugins/advisor'

  export default {
    components: {
      FacebookAd,
      AddyAnimationFrame,
    },
    data() {
      return {
        ad: {
          title: 'Lorem ipsum dolor sit amet',
          message: '🌴 Amet aspernatur culpa, cumque enthousiaste dolor eos harum nemo nihil odio quia quidem',
          vacancyTitle: 'Lorem ipsum dolor sit amet',
          vacancyDescription: 'Amet aspernatur culpa, cumque debitis dolor eos harum nemo nihil odio quia quidem',
        },
        adviceItems: [],
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
    mounted: function() {
        client.getEntries({
          content_type: 'advice'
        }).then((response) => {
            this.adviceItems = response.items;
        });
    },
    methods: {
      highlight(field) {
        let matchedAdviceItems = advisor.findAdviceItems(this.ad[field], this.adviceItems);
        let showHtml = this.ad[field];
        matchedAdviceItems.forEach((adviceItem) => {
          let matchedWord = adviceItem.fields.matchedOn;
          showHtml = showHtml.replace(new RegExp(matchedWord, "gi"), match => {
            return '<span class="highlightText" v-on:click="alert(\'je momma\')">' + match + '</span>';
          });
        });
        return showHtml;
      }
    },
  }
</script>
<style>
#addy-animation {
  left: calc(50% - 410px);
  position: absolute;
}
.ad-container {
  height: 100%;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
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
