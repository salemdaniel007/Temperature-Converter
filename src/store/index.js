import Vuex from 'vuex';
import Vue from 'vue';
import converter from './modules/converter';

//load Vuex
Vue.use(Vuex);

//create store

export default new Vuex.Store({
    modules: {
        converter
    }
});
