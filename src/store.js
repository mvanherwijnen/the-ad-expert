import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ad: {
      title: 'A nice title for your ad',
      message: 'Amet nine to five mentality , cumque enthousiaste dolor eos harum nemo nihil odio quia quidem',
      vacancyTitle: 'Lorem ipsum dolor sit amet',
      vacancyDescription: 'Amet aspernatur culpa, cumque debitis dolor eos familie nemo nihil odio quia quidem',
    },
  },
  mutations: {
    lelijkeHack(state) {
      state.ad = JSON.parse(JSON.stringify(state.ad))
    }
  },
  actions: {
  }
})
