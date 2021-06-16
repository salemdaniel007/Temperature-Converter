import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Toasted from 'vue-toasted';


Vue.use(Toasted, {
  type:'error',
  duration: 5000
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
