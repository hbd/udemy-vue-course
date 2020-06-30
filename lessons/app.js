// Useless without the imported Vue.js script.
new Vue({
    el: '#app', // Just a CSS selector (on id)
    data: {
        title: 'Becoming a Vue Samurai',
        coords: {
            x: 0,
            y: 0
        }
    },
    methods: {
        logEvent(event) {
            console.log(event)
        },
        logCoords(event) {
            this.coords.x = event.offsetX
            this.coords.y = event.offsetY
        }
    }
})
