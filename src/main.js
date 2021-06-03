import Vue from 'vue'
import App from './App.vue'
import "babel-polyfill"
import oneMap from 'ky-one-map'

Vue.prototype.$oneMap = new oneMap()
new Vue({
  el: '#app',
  render: h => h(App)
})
