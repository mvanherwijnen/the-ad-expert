import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // ad: {
    //   title: 'Apple',
    //   message: 'Start with the benefits of the advertised job',
    //   vacancyTitle: 'Put a descriptive job title here',
    //   vacancyDescription: 'You can enter your call to action here',
    // },
    ad: {
      title: 'Apple',
      message: 'Apple is looking for talent. Do you want to earn a competitive salary ? Are you ready to say goodbye to your nine to five mentality ? Apply now and join our family !',
      vacancyTitle: 'Are you a retail jedi ?',
      vacancyDescription: 'Apple is looking for talent. Join us now!',
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
