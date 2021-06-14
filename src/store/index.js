import Vue from 'vue';
import Vuex from 'vuex';
import converter from './modules/converter';

//load Vuex
Vue.use(Vuex);

//create store

export default new Vuex.Store({
    modules: {
        converter
    }
});
