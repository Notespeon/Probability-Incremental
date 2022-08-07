import UpgradeBox from './UpgradeBox.js'

export default {
    name: 'App',
    components: {
        UpgradeBox
    },
    data() {
        return {
            game: {
                global: {
                    score: 0,
                    prestigeLevel: 0,
                },
                score: {
                    multi: 1,
                    baseChance: 10,
                    chance: 10,
                    cost: 0,
                    critSuc: 10,
                    critFail: 1,
                    auto: 0,
                    maxAuto: 1,
                    successText: 'NONE',
                    successColouring: {
                        red: false,
                        green: false,
                        blue: false,
                        black: false
                    },
                    tooltip: "Increases score",
                    tooltipS: "Increases score multiplier",
                    tooltipF: "Removes multiplier, halves score and disables an auto"
                },
                prestige: {
                    multi: 1,
                    baseChance: 10,
                    chance: 10,
                    cost: 1,
                    critSuc: 0,
                    critFail: 0,
                    auto: 0,
                    maxAuto: 0,
                    successText: 'NONE',
                    successColouring: {
                        red: false,
                        green: false,
                        blue: false,
                        black: false
                    },
                    tooltip: "Reset all progress to unlock new features",
                    tooltipS: "Necessary for success if possible",
                    tooltipF: "Reset all progress without new features"
                },
                chance: {
                    multi: 1,
                    baseChance: 10,
                    chance: 10,
                    cost: 5,
                    critSuc: 10,
                    critFail: 3,
                    auto: 0,
                    maxAuto: 1,
                    successText: 'NONE',
                    successColouring: {
                        red: false,
                        green: false,
                        blue: false,
                        black: false
                    },
                    tooltip: "Increases success chance",
                    tooltipS: "Increases success chance multiplier",
                    tooltipF: "Removes multiplier, resets a random success chance to the base chance"
                },
                critS: {
                    multi: 1,
                    baseChance: 0,
                    chance: 0,
                    cost: 1000,
                    critSuc: 1,
                    critFail: 0,
                    auto: 0,
                    maxAuto: 1,
                    successText: 'NONE',
                    successColouring: {
                        red: false,
                        green: false,
                        blue: false,
                        black: false
                    },
                    tooltip: "Increases critical success chance, additionally triggers a mini-prestige",
                    tooltipS: "Increases critical success chance multiplier",
                    tooltipF: "Removes multiplier, resets a random critical success chance to the base chance"
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
        setColour(type, colour) {
            this.game[type].successColouring.green = (colour == "green")
            this.game[type].successColouring.red = (colour == "red")
            this.game[type].successColouring.blue = (colour == "blue")
            this.game[type].successColouring.black = (colour == "black")
        },
        setPrestigeStart(number) {
            switch(number) {
                case 1:
                    this.game.global.score = 0
                    this.game.global.prestigeLevel = 1

                    this.game.score.maxAuto = 2
                    this.game.score.multi = 1
                    this.game.score.chance = 10

                    this.game.chance.multi = 1
                    this.game.chance.chance = 10

                    this.game.prestige.chance = 0 //should be 0, 100 for dev reasons
                    this.game.prestige.baseChance = 0
                    this.game.prestige.cost = 10
                    this.game.prestige.critFail = 100
                    break;
                case 2:
                    this.game.global.score = 0 //should be 0, 1000 for dev reasons
                    this.game.global.prestigeLevel = 2

                    this.game.score.maxAuto = 5
                    this.game.score.multi = 1
                    this.game.score.chance = 20
                    this.game.score.baseChance = 20
                    this.game.score.critSuc = 1
                    this.game.score.critFail = 0

                    this.game.chance.maxAuto = 2
                    this.game.chance.multi = 1
                    this.game.chance.chance = 10
                    this.game.chance.baseChance = 10
                    this.game.chance.critSuc = 1
                    this.game.chance.critFail = 0

                    this.game.prestige.chance = 100
                    this.game.prestige.baseChance = 100
                    this.game.prestige.cost = 10000
                    this.game.prestige.critSuc = 1
                    this.game.prestige.critFail = 0
                    break;
                case 3:
                    this.game.global.score = 69696969696969
            }
        },
        attemptSuccess(type) {
            if (type == "score") {
                this.game.global.score += this.game.score.multi
            }

            if (type == "prestige") {
                if (this.game.global.prestigeLevel < 2) {
                    this.setPrestigeStart(this.game.global.prestigeLevel + 1)
                }
            }

            if (type == "chance") {
                let upgrade = ["score", "chance", "critS", "prestige"]
                for (const value of upgrade) {
                    this.game[value].chance += this.game.chance.multi
                    if (this.game[value].chance > 100) {
                        this.game[value].chance = 100
                    }
                }
            }

            if (type == "critS") {
                this.game.critS.chance = this.game.critS.baseChance
                let upgrade = ["score", "chance", "critS", "prestige"]
                for (const value of upgrade) {
                    this.game[value].critSuc += this.game.critS.multi
                    if (this.game[value].critSuc > 100) {
                        this.game[value].critSuc = 100
                    }
                }
            }

            this.game[type].successText = 'SUCCESS'
            this.setColour(type, "green")
        },
        criticalSuccess(type) {
            if (type == "score") {
                this.game.score.multi++
                this.attemptSuccess(type)
            }

            if (type == "chance") {
                this.game.chance.multi++
                this.attemptSuccess(type)
            }

            if (type == "critS") {
                this.game.critS.multi++
                this.attemptSuccess(type)
            }

            if (type == "prestige") {
                this.setPrestigeStart(this.game.global.prestigeLevel + 1)
            }

            this.game[type].successText = 'CRITICAL SUCCESS!'
            this.setColour(type, "blue")
        },
        attemptFailure(type) {
            this.game[type].successText = 'FAILURE'
            this.setColour(type, "red")
        },
        criticalFailure(type) {
            //halves score, resets multi and turns off one auto
            if (type == "score") {
                this.game.score.multi = 1
                this.game.global.score = Math.floor(this.game.global.score/2)
                if (this.game.score.auto > 0) {
                    this.game.score.auto -= 1
                }
            }

            //resets chance multi, resets success chance of a random type and turns off one auto
            if (type == "chance") {
                this.game.chance.multi = 1
                this.game.chance.auto = 0
                let upgrade = ["score", "chance", "critS", "prestige"]
                let unluckyUpgrade = Math.floor(Math.random()*3)

                this.game[upgrade[unluckyUpgrade]].chance = this.game[upgrade[unluckyUpgrade]].baseChance
            }

            //resets the prestige
            if (type == "prestige") {
                this.setPrestigeStart(this.game.global.prestigeLevel)
            }

            this.game[type].successText = 'CRITICAL FAILURE!'
            this.setColour(type, "black")
        },
        makeAttempt(type) {
            if (this.game.global.score < this.game[type].cost) {
                return;
            } 

            this.game.global.score -= this.game[type].cost

            if (type == "critS") {
                let upgrade = ["score", "chance", "prestige"]
                for (const value of upgrade) {
                    this.game[value].chance = this.game[value].baseChance
                }
                this.game.score.multi = 1
                this.game.chance.multi = 1
                this.game.global.score = 0
            }

            if (Math.floor(Math.random()*100) < this.game[type].chance) {
                if (Math.floor(Math.random()*100 < this.game[type].critSuc)) {
                    this.criticalSuccess(type)
                } else {
                    this.attemptSuccess(type)
                }
            } else {
                if (Math.floor(Math.random()*100) < this.game[type].critFail) {
                    this.criticalFailure(type)
                } else {
                    this.attemptFailure(type)
                }
            }
        },
        increaseAutomation(type) {
            if (this.game[type].auto < this.game[type].maxAuto) {
                this.game[type].auto++
            }
        },
        decreaseAutomation(type) {
            if (this.game[type].auto > 0) {
                this.game[type].auto--
            }
        },
        runAutomation() {
            setInterval(function () {
                let upgrade = ["score", "chance", "critS", "prestige"]
                for (const type of upgrade) {
                    for (let i = 0; i < this.game[type].auto; i++) {
                        this.makeAttempt(type)
                    }
                }
            }.bind(this), 1000);
        },
    },
    mounted (){
        this.runAutomation()
    },
    template: /*html*/`
    <h1 :class="score">{{ game.global.score }}</h1>
            
    <UpgradeBox typeName = "score" :type = game.score :makeAttempt="makeAttempt" :increaseAutomation="increaseAutomation" :decreaseAutomation="decreaseAutomation"/>
    <UpgradeBox v-if="this.game.global.prestigeLevel > 0" typeName = "chance" :type = game.chance :makeAttempt="makeAttempt" :increaseAutomation="increaseAutomation" :decreaseAutomation="decreaseAutomation"/>
    <UpgradeBox v-if="this.game.global.prestigeLevel > 1" typeName = "critS" :type = game.critS :makeAttempt="makeAttempt" :increaseAutomation="increaseAutomation" :decreaseAutomation="decreaseAutomation"/>
    <UpgradeBox typeName = "prestige" :type = game.prestige :makeAttempt="makeAttempt" :increaseAutomation="increaseAutomation" :decreaseAutomation="decreaseAutomation"/>

    `,
};