// Useless without the imported Vue.js script.
new Vue({
    el: '#app', // Just a CSS selector (on id)
    data: {
        title: 'Becoming a Vue Samurai',
        name: 'Zak'
    },
    methods: {
        updateName(e) {
            console.log(e)
            this.name = e.target.value
        }
    }
})
