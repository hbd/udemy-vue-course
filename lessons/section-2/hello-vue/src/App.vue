<!-- this is the template we want to render -->
<!-- only one root element allowed per Vue file/template -->
<!-- examples of components: login/auth, body, header, footer, etc -->
<template>
  <!-- root HTML element -->
  <div id="app">
    <h1 id="app-title">{{ title }}</h1>
    <Navbar />
    <Blog />
  </div>
</template>

<script>
import Navbar from './Navbar'
import Blog from './Blog'

// This is a component.
export default {
  name: 'app',
  components: {
    Navbar, // w/o ES6, would need to be: Navbar: Navbar
    Blog
  },
  data () {
    return {
      title: 'Hello, Vue!'
    }
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
