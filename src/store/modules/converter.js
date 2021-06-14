import store from "..";

const state = {
    temperature: ''
};

const getters = {
    temperature: state => state.temperature
};

const actions = {
    cToF(celsius) {
        var cTemp = celsius;
        var cToFahr = cTemp * 9 / 5 + 32;
        var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
          console.log(message);
        store.commit('cToF', message)
    }
    
};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
  };