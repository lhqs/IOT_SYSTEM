import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count:1,
  num:3
}

const getters = {
  cal:function (state) {
    return state.num += 30;
  }
}

const actions = {
  addAction(context){
    context.commit('addmethod',23);
  }
}

const mutations = {
  addmethod(state,n) {
    state.count+=n;
  },
  reducemethod(state){
    state.count--
  },
  addnum(state){
    state.num--
  },
  reducenum(state){
    state.num++
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
  }
)
