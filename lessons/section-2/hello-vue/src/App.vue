<!-- this is the template we want to render -->
<!-- only one root element allowed per Vue file/template -->
<!-- examples of components: login/auth, body, header, footer, etc -->
<template>
  <!-- root HTML element -->
  <div id="app">
    <h1 id="app-title">{{ title }}</h1>
    <Navbar />
    <AllFriends :friends="friends" @delete="deleteFriend"/>
    <OnlineFriends :friends="friends"/>
  </div>
</template>

<script>
import Navbar from './Navbar'
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'

// This is a component.
export default {
  name: 'app',
  components: {
    Navbar, // w/o ES6, would need to be: Navbar: Navbar
    AllFriends,
    OnlineFriends
  },
  data () {
    return {
      title: 'Hello, Vue!',
      friends: [
          { name: 'Mario', online: true },
          { name: 'Luigi', online: false },
          { name: 'Toad', online: true },
          { name: 'Bowser', online: false }
      ]
    }
  },
  methods: {
    deleteFriend(e) {
      // Return friends that are not the given friend.
      this.friends = this.friends.filter(friend => {
        return friend.name !== e.name
      })
    }
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
