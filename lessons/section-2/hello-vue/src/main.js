import Vue from 'vue'
import App from './App.vue'

Vue.filter('snippet', val => {
  if (!val || typeof(val) != 'string') return ''
  val = val.slice(0, 100)
  val += '...'
  return val
})

new Vue({
  // Control the HTML element with id = "app"
  el: '#app', // Which element do we want this instance to control?
  render: h => h(App)
})
