let app = new Vue({
    el: "#app",
    data: {
        game: {
            time: 0
        }
    },
    methods: {
        increment() {
            this.game.time++
        }
    }
});