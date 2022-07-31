let app = new Vue({
    el: "#app",
    data: {
        game: {
            score: {
                score: 0,
                chance: 10,
                cost: 0,
                critSuc: 10,
                critFail: 1,
                auto: 0,
                maxAuto: 1
            },
            auto: {
                chance: 10
            }
        },
        upgradeBox: 'upgradeBox',
        score: 'score',
        leftBox: 'leftBox',
        rightBox: 'rightBox',
        red: 'red'
    },
    methods: {
        increaseScoreSuccess() {
            this.game.score.score++
        },
        increaseScoreAttempt() {
            if (Math.ceil(Math.random()*100) < this.game.score.chance) {
                this.increaseScoreSuccess()
            }
        },
        increaseScoreAutomation() {
            if (this.game.score.auto < this.game.score.maxAuto) {
                this.game.score.auto++
            }
        },
        decreaseScoreAutomation() {
            if (this.game.score.auto > 0) {
                this.game.score.auto--
            }
        },
        runAutomation() {
            setInterval(function () {
                for (let i = 0; i < app.game.score.auto; i++) {
                    app.increaseScoreAttempt()
                }
            }, 1000);
        }
    },
    mounted (){
        this.runAutomation()
    }
});