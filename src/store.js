import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ad: {
      title: 'This is the name of the company',
      message: 'Start with the benefits of the advertised job nine to five mentality ',
      vacancyTitle: 'Put a descriptive job title here',
      vacancyDescription: 'Say something enthousiaste about the features',
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
