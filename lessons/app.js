// Useless without the imported Vue.js script.
new Vue({
    el: '#app', // Just a CSS selector (on id)
    data: {
        title: 'Becoming a Vue Samurai',
        name: 'Zak',
        age: 25,
        showName: false,
        showAge: true
    },
    methods: {
        toggleName() {
            this.showName = !this.showName
        },
        toggleAge() {
            this.showAge = !this.showAge
        }
    }
})
