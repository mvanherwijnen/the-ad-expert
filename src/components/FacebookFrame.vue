<template>
  <div class="ad-container" v-if="adviceItems">
    <advice-frame v-if="currentAdviceItem" :advice-item="currentAdviceItem"></advice-frame>
    <addy-animation-frame ref="addy" :active="currentAdviceItem !== null"></addy-animation-frame >
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
  import AdviceFrame from './AdviceFrame'
  import client from '../../plugins/contentful'
  import { mapState } from 'vuex'
  import * as advisor from '../../plugins/advisor'

  export default {
    components: {
      FacebookAd,
      AddyAnimationFrame,
      AdviceFrame,
    },
    data() {
      return {
        test: '',
        adviceItems: [],
        currentAdviceItem: null,
      }
    },
    watch: {
      ad: {
        handler() {
          let spans = document.querySelectorAll('span');

          spans.forEach(el => {
            let adviceId = el.getAttribute('adviceId');
            let self = this;
            if (adviceId) {
              el.addEventListener('mouseenter', function(e) {
                  if (e.target.classList.contains("selected")) {
                      return;
                  }
                let x = document.getElementsByClassName("selected");
                for (let i = 0; i < x.length; i++) {
                  x[i].classList.remove("selected");
                }
                e.target.classList.add("selected");
                self.showAdvice(adviceId)
              });
            }
          })
        },
        deep: true
      }
    },
    computed: {
      ...mapState([
        'ad'
      ]),
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
        }).then(() => {
          this.$store.commit('lelijkeHack');
        });
    },
    methods: {
      highlight(field) {
        let matchedAdviceItems = advisor.findAdviceItems(this.ad[field], this.adviceItems);
        let showHtml = this.ad[field];
        matchedAdviceItems.forEach((adviceItem) => {
          let matchedWord = adviceItem.fields.matchedOn;
          let adviceId = adviceItem.sys.id;
          showHtml = showHtml.replace(new RegExp(matchedWord, "gi"), match => {
            return '<span class="highlightText" adviceId="' + adviceId + '">' + match + '</span>';
          });
        });
        return showHtml;
      },
      showAdvice(id) {
        if(id === '7GMxa9XAk66xzaTjbvRbMk') {
          this.$refs.addy.spongeBob();
        } else {
          this.$refs.addy.randomAction();
        }
        this.currentAdviceItem = this.adviceItems.find(function (adviceItem) {
          return adviceItem.sys.id === id;
        })
      },
    },
  }
</script>
<style>
#adviceItemFrame {
  right: calc(50% + 210px);
  bottom: calc(50% + 46px);
  position: absolute;
  width: 250px;
}
#addy-animation {
    left: calc(50% - 410px);
    margin-top: 74px;
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
.selected {
  background-color: darkorange;
}
</style>
