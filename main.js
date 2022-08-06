let app = new Vue({
    el: "#app",
    components: {
        //TestComp
    },
    data: {
        game: {
            global: {

            },
            score: {
                score: 0,
                chance: 10,
                cost: 0,
                critSuc: 10,
                critFail: 1,
                auto: 0,
                maxAuto: 1,
                successText: 'NONE',
                successColouring: {
                    red: false,
                    green: false
                }
            },
            auto: {
                chance: 10
            }
        },
        upgradeBox: 'upgradeBox',
        score: 'score',
        leftBox: 'leftBox',
        rightBox: 'rightBox'
    },
    methods: {
        increaseScoreSuccess() {
            this.game.score.score++
            this.game.score.successText = 'SUCCESS'
            this.game.score.successColouring.green = true
            this.game.score.successColouring.red = false
        },
        increaseScoreFailure() {
            this.game.score.successText = 'FAILURE'
            this.game.score.successColouring.green = false
            this.game.score.successColouring.red = true
        },
        increaseScoreAttempt() {
            if (Math.ceil(Math.random()*100) < this.game.score.chance) {
                this.increaseScoreSuccess()
            } else {
                this.increaseScoreFailure()
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