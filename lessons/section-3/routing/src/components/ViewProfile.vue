<template>
  <div class="view-profile">
    <h2>Profile for {{ this.userId }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ViewProfile',
  data () {
    return {
      userId: this.$route.params.userId // this.$route refers to route of webpage.
    }
  },
  watch: {
    $route: 'updateId'
  },
  methods: {
    updateId () {
      this.userId = this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>
