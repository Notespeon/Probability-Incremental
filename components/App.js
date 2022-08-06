import TestComp from './UpgradeBox.js'

export default {
    name: 'App',
    components: {
        TestComp
    },
    data() {
        return {
            game: {
                global: {
                    score: 0,
                    prestigeLevel: 0
                },
                score: {
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
                prestige: {
                    chance: 10,
                    cost: 1,
                    critSuc: 0,
                    critFail: 0,
                    auto: 0,
                    maxAuto: 0,
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
        }
    },
    computed: {

    },
    methods: {
        increaseSuccess(type) {
            if (type == "score") {
                this.game.global.score++
            }

            if (type == "prestige") {
                this.game.global.prestigeLevel++
                this.game.prestige.chance = 1
                this.game.prestige.cost = 10
                this.game.prestige.critFail = 10 
            }

            this.game[type].successText = 'SUCCESS'
            this.game[type].successColouring.green = true
            this.game[type].successColouring.red = false
        },
        increaseFailure(type) {
            this.game[type].successText = 'FAILURE'
            this.game[type].successColouring.green = false
            this.game[type].successColouring.red = true
        },
        makeAttempt(type) {
            if (this.game.global.score < this.game[type].cost) {
                return;
            } 

            this.game.global.score -= this.game[type].cost

            if (Math.ceil(Math.random()*100) < this.game[type].chance) {
                this.increaseSuccess(type)
            } else {
                this.increaseFailure(type)
            }
        },
        increaseAutomation(type) {
            if (this.game[type].auto < this.game[type].maxAuto) {
                this.game.score.auto++
            }
        },
        decreaseAutomation(type) {
            if (this.game[type].auto > 0) {
                this.game[type].auto--
            }
        },
        runAutomation() {
            setInterval(function () {
                for (let i = 0; i < this.game.score.auto; i++) {
                    this.makeAttempt("score")
                }
                for (let i = 0; i < this.game.prestige.auto; i++) {
                    this.makeAttempt("prestige")
                }
            }.bind(this), 1000);
        },
    },
    mounted (){
        this.runAutomation()
    },
    template: /*html*/`
    <h1 :class="score">{{ game.global.score }}</h1>
            
    <TestComp typeName = "score" :type = game.score :makeAttempt="makeAttempt" :increaseAutomation="increaseAutomation" :decreaseAutomation="decreaseAutomation"/>
    <TestComp typeName = "prestige" :type = game.prestige :makeAttempt="makeAttempt" :increaseAutomation="increaseAutomation" :decreaseAutomation="decreaseAutomation"/>

    `,
};