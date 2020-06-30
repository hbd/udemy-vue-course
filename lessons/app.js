// Useless without the imported Vue.js script.
new Vue({
    el: '#app', // Just a CSS selected (on id)
    data: {
        title: 'Becoming a Vue samurai',
        name: 'Zak',
        url: 'https://youtube.com',
        classes: ['one', 'two']
    },
    methods: {
        greet(timeOfDay) {
            // this.title: this refers to this view instance. Vue make all data vars global.
            return `Hello there, ${this.name}. Good ${timeOfDay}!` // ES6 template string.
        }
    }
})
