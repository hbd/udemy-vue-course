import Vue from 'vue'
import App from './App.vue'

new Vue({
  // Control the HTML element with id = "app"
  el: '#app', // Which element do we want this instance to control?
  render: h => h(App)
})
