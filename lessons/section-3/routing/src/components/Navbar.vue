<template>
    <nav class="main-nav">
        <ul>
            <!-- <li><a href="/">Home</a></li> -->
            <li><router-link to="/">Home</router-link></li>
            <!-- <li><router-link to="/about">About</router-link></li> -->
            <li><router-link :to="{ name: 'About'}">About</router-link></li>
        </ul>
        <h2>User Profiles</h2>
        <ul>
          <li v-for="(id, index) in userIDs" :key="index">
            <router-link :to="{ name: 'ViewProfile', params: { userId: id } }">
              <span>Profile {{ id }}</span>
            </router-link>
          </li>
        </ul>
        <h2>Navigation Controls</h2>
        <ul>
          <li><button @click="goBack">Go Back</button></li>
          <li><button @click="goHome">Redirect to Home</button></li>
          <li><button @click="goBack">Go Forward</button></li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      userIDs: ['1', '2', '3', '4']
    }
  },
  methods: {
    goHome () {
      if (this.$router.currentRoute.name !== 'Home') {
        this.$router.push({ name: 'Home' })
      }
    },
    goBack () {
      this.$router.go(-1)
    },
    goForward () {
      this.$router.go(1)
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
a.router-link-exact-active {
  color:violet
}
</style>
