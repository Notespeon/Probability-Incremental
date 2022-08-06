<script>
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp({

})

app.mount('#app')

export default {
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
}
</script>

<template>
    <!--html lang="en"-->
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css">
        <title>Probability Incremental</title>

        <!--script src=https://cdn.jsdelivr.net/npm/vue/dist/vue.js></script>
        <script src=main.js defer></script-->
    </head>
    <body style="background-color:#444">
        <div id="app">
            <h1 :class="score">{{ game.score.score }}</h1>
            
            <div :class="upgradeBox">
                <div :class="leftBox">
                    <button @click=increaseScoreAttempt()>Increase Score</button>
                    <span>Cost: {{ game.score.cost }}</span>
                    <p>Success Chance: {{ game.score.chance }}% <br><br>
                        Critical Success Chance: {{ game.score.critSuc }}% <br><br>
                        Critical Failure Chance: {{ game.score.critFail }}%</p>
                </div>
                <div :class="rightBox">
                    <button @click=decreaseScoreAutomation()> - </button>
                    <span> Auto </span>
                    <button @click=increaseScoreAutomation()> + </button>
                    <p>{{ game.score.auto }} autos active, {{game.score.maxAuto}} maximum</p>
                    <p></p>
                    <span>Latest Attempt: </span>
                    <span :class="game.score.successColouring">{{ game.score.successText }}</span>
                </div>
            </div>
            <!--TestComp /-->
            <!--<div :class="upgradeBox">
                <button @click=attemptIncrement()>Prestige</button>
            </div>-->
        </div>
    </body>
</template>