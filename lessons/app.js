// Useless without the imported Vue.js script.
new Vue({
    el: '#app', // Just a CSS selector (on id)
    data: {
        wage: 0
    },
    methods: {
        title: 'Wage modifier',
        addWage(amount) {
            this.wage += amount
        }
    }
})
