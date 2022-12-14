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
                    score: 0, //should be 0, 10 for dev reasons
                    prestigeLevel: 0,
                    version: 0.01
                },
                achievements: {

                },
                score: {
                    multi: 1,
                    baseChance: 10,
                    chance: 10,
                    cost: 0,
                    critS: 10,
                    baseCritS: 10,
                    critFail: 1,
                    auto: 0,
                    maxAuto: 1,
                    scrapValue: 5,
                    successText: 'NONE',
                    successColouring: {
                        red: false,
                        green: false,
                        blue: false,
                        black: false
                    },
                    tooltip: "Increases score",
                    tooltipS: "On Success: Chance to increase score multiplier",
                    tooltipF: "On Faillure: Chance to reset multiplier (all critical failures additionally disable an auto)"
                },
                prestige: {
                    multi: 1,
                    baseChance: 10,
                    chance: 10,
                    cost: 1,
                    critS: 0,
                    baseCritS: 0,
                    critFail: 0,
                    auto: 0,
                    maxAuto: 0,
                    scrapValue: 100,
                    successText: 'NONE',
                    successColouring: {
                        red: false,
                        green: false,
                        blue: false,
                        black: false
                    },
                    tooltip: "Reset all progress to unlock new features",
                    tooltipS: "???",
                    tooltipF: "On Failure: Chance to reset all progress without new features"
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
                    this.game.global.score = 0 //should be 0, 10 for dev reasons
                    this.game.global.prestigeLevel = 1

                    this.game.score.auto = 0
                    this.game.score.maxAuto = 2
                    this.game.score.multi = 1
                    this.game.score.chance = 10

                    this.game.chance = {
                        multi: 1,
                        baseChance: 10,
                        chance: 10,
                        cost: 5,
                        critS: 10,
                        baseCritS: 10,
                        critFail: 3,
                        auto: 0,
                        maxAuto: 1,
                        scrapValue: 10,
                        successText: 'NONE',
                        successColouring: {
                            red: false,
                            green: false,
                            blue: false,
                            black: false
                        },
                        tooltip: "Increases success chance",
                        tooltipS: "On Success: Chance to increase success chance multiplier",
                        tooltipF: "On Failure: Chance to reset multiplier and reset a random success chance to the base chance"
                    }

                    this.game.prestige.chance = 0 //should be 0, 100 for dev reasons
                    this.game.prestige.baseChance = 0
                    this.game.prestige.cost = 10
                    this.game.prestige.critFail = 100
                    break;
                case 2:
                    this.game.global.score = 0 //should be 0, 10000 for dev reasons
                    this.game.global.prestigeLevel = 2

                    this.game.score.auto = 0
                    this.game.score.maxAuto = 5
                    this.game.score.multi = 1
                    this.game.score.chance = 20
                    this.game.score.baseChance = 20
                    this.game.score.critS = 1
                    this.game.score.baseCritS = 1
                    this.game.score.critFail = 0

                    this.game.chance.auto = 0
                    this.game.chance.maxAuto = 2
                    this.game.chance.multi = 1
                    this.game.chance.chance = 10
                    this.game.chance.baseChance = 10
                    this.game.chance.critS = 1
                    this.game.chance.baseCritS = 1
                    this.game.chance.critFail = 0

                    this.game.critS = {
                        multi: 1,
                        baseChance: 0,
                        chance: 0,
                        cost: 1000,
                        critS: 1,
                        baseCritS: 1,
                        critFail: 0,
                        auto: 0,
                        maxAuto: 1,
                        scrapValue: 10,
                        successText: 'NONE',
                        successColouring: {
                            red: false,
                            green: false,
                            blue: false,
                            black: false
                        },
                        tooltip: "Reset some progress to increase critical success chance",
                        tooltipS: "On Success: Chance to increase critical success chance multiplier",
                        tooltipF: "On Failure: Chance to reset multiplier and reset a random critical success chance to the base chance"
                    }

                    this.game.prestige.chance = 100
                    this.game.prestige.baseChance = 100
                    this.game.prestige.cost = 10000
                    this.game.prestige.critS = 1 //should be 1, 100 for dev reasons
                    this.game.prestige.baseCritS = 1
                    this.game.prestige.critFail = 0
                    this.game.prestige.tooltipS = "Necessary for a successful prestige"
                    break;
                case 3:
                    this.game.global.score = 0 //should be 0, 10000 for dev reasons
                    this.game.global.prestigeLevel = 3

                    this.game.score.auto = 0
                    this.game.score.maxAuto = 10
                    this.game.score.multi = 1
                    this.game.score.chance = 10
                    this.game.score.baseChance = 10
                    this.game.score.critS = 1
                    this.game.score.baseCritS = 1
                    this.game.score.critFail = 1

                    this.game.chance.auto = 0
                    this.game.chance.maxAuto = 0
                    this.game.chance.multi = 1
                    this.game.chance.chance = 1
                    this.game.chance.baseChance = 1
                    this.game.chance.critS = 1
                    this.game.chance.baseCritS = 1
                    this.game.chance.critFail = 1

                    this.game.critS.auto = 0
                    this.game.critS.maxAuto = 0
                    this.game.critS.multi = 1
                    this.game.critS.chance = 60
                    this.game.critS.baseChance = 60
                    this.game.critS.critS = 1
                    this.game.critS.baseCritS = 1
                    this.game.critS.critFail = 1

                    this.game.auto = {
                        multi: 1,
                        baseChance: 60,
                        chance: 60,
                        cost: 10,
                        critS: 1,
                        baseCritS: 1,
                        critFail: 1,
                        auto: 0,
                        maxAuto: 0,
                        scrapValue: 5,
                        successText: 'NONE',
                        successColouring: {
                            red: false,
                            green: false,
                            blue: false,
                            black: false
                        },
                        tooltip: "Increases the max autos of a random upgrade",
                        tooltipS: "On Success: Chance to increase multiplier",
                        tooltipF: "On Failure: Chance to reset multiplier and convert all autos into scrap (score)"
                    }

                    this.game.prestige.chance = 0
                    this.game.prestige.baseChance = 0
                    this.game.prestige.cost = 0
                    this.game.prestige.critS = 0
                    this.game.prestige.baseCritS = 0
                    this.game.prestige.critFail = 100
                    break;
                case 4:
                    this.game.global.score = 696969696969
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
                if (this.game.global.prestigeLevel > 2) {
                    upgrade.push("auto")
                }
                for (const value of upgrade) {
                    this.game[value].critS += this.game.critS.multi
                    if (this.game[value].critS > 100) {
                        this.game[value].critS = 100
                    }
                }
            }

            if (type == "auto") {
                let upgrade = ["score", "chance", "critS", "auto"]

                let luckyUpgrade = Math.floor(Math.random()*upgrade.length)

                this.game[upgrade[luckyUpgrade]].maxAuto += this.game.auto.multi

                if (this.game.score.maxAuto >= 100) {
                    this.game.achievements.autoTakeOver = true
                }
            }


            if (this.game.global.prestigeLevel == 3) {
                this.game.prestige.cost = (this.game.prestige.chance * this.game.prestige.critS) ** 2
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

            if (type == "auto") {
                this.game.auto.multi++
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
            //resets multi and turns off one auto
            if (type == "score") {
                this.game.score.multi = 1
                //this.game.global.score = Math.floor(this.game.global.score/2)
                if (this.game.score.auto > 0) {
                    this.game.score.auto -= 1
                }
            }

            //resets chance multi, resets success chance of a random type and turns off one auto
            if (type == "chance") {
                this.game.chance.multi = 1
                if (this.game.chance.auto > 0) {
                    this.game.chance.auto -= 1
                }
                let upgrade = ["score", "chance", "prestige"]
                if (this.game.global.prestigeLevel > 1) {
                    upgrade.push("critS")
                }
                /*if (this.game.global.prestigeLevel > 2) {
                    upgrade.push("auto")
                }*/

                let unluckyUpgrade = Math.floor(Math.random()*upgrade.length)

                this.game[upgrade[unluckyUpgrade]].chance = this.game[upgrade[unluckyUpgrade]].baseChance
            }

            //resets crit chance multi, resets crit success chance of a random type and turns off one auto
            if (type == "critS") {
                this.game.critS.multi = 1
                if (this.game.critS.auto > 0) {
                    this.game.critS.auto -= 1
                }
                let upgrade = ["score", "chance", "prestige"]
                if (this.game.global.prestigeLevel > 1) {
                    upgrade.push("critS")
                }
                if (this.game.global.prestigeLevel > 2) {
                    upgrade.push("auto")
                }

                let unluckyUpgrade = Math.floor(Math.random()*upgrade.length)

                this.game[upgrade[unluckyUpgrade]].critS = this.game[upgrade[unluckyUpgrade]].baseCritS
            }

            //resets auto multi, destroys all autos but compensates for the damage
            if (type == "auto") {
                this.game.auto.multi = 1
                let upgrade = ["score", "chance", "prestige"]
                if (this.game.global.prestigeLevel > 1) {
                    upgrade.push("critS")
                }
                if (this.game.global.prestigeLevel > 2) {
                    upgrade.push("auto")
                }

                for (const value of upgrade) {
                    this.game.global.score += this.game[value].maxAuto * this.game[value].scrapValue
                    this.game[value].auto = 0
                    this.game[value].maxAuto = 0
                }
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
                let upgrade = ["score", "chance", "prestige", "auto"]
                for (const value of upgrade) {
                    this.game[value].chance = this.game[value].baseChance
                }
                this.game.score.multi = 1
                this.game.chance.multi = 1
                this.game.global.score = 0
            }

            if (Math.floor(Math.random()*100) < this.game[type].chance) {
                if (Math.floor(Math.random()*100 < this.game[type].critS)) {
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

            //no save scumming on my watch :)
            if (type == "prestige") {
                localStorage.setItem('timeIncrementalSave', JSON.stringify(this.game))
                console.log('Saving...')
            }
        },
        increaseAutomation(type) {
            if (this.game[type].auto < this.game[type].maxAuto) {
                this.game[type].auto++
            }
        },
        maxIncreaseAutomation(type) {
            this.game[type].auto = this.game[type].maxAuto
        },
        maxDecreaseAutomation(type) {
            this.game[type].auto = 0
        },
        decreaseAutomation(type) {
            if (this.game[type].auto > 0) {
                this.game[type].auto--
            }
        },
        runAutomation() {
            setInterval(function () {
                let upgrade = ["score", "prestige"]
                if (this.game.global.prestigeLevel > 0) {
                    upgrade.push("chance")
                }
                if (this.game.global.prestigeLevel > 1) {
                    upgrade.push("critS")
                }
                if (this.game.global.prestigeLevel > 2) {
                    upgrade.push("auto")
                }
                for (const type of upgrade) {
                    for (let i = 0; i < this.game[type].auto; i++) {
                        this.makeAttempt(type)
                    }
                }
            }.bind(this), 1000);
        },
        /*storeInitialState() {
            this.initialGameState = this.game
        },*/
        saveGameData() {
            setInterval(function () {
                localStorage.setItem('timeIncrementalSave', JSON.stringify(this.game))
                console.log('Saving...')
            }.bind(this), 15000);
        },
        loadSaveData() {
            if (localStorage.getItem('timeIncrementalSave') === null) {
                return;
            }
            let savegame = JSON.parse(localStorage.getItem('timeIncrementalSave'))
            console.log(savegame)
            this.game = savegame
        },
        resetGame() {
            localStorage.removeItem('timeIncrementalSave')
        }
    },
    mounted (){
        //this.storeInitialState()
        this.runAutomation()
        this.loadSaveData()
        this.saveGameData()
    },
    template: /*html*/`
    <h1 :class="score">{{ game.global.score }}</h1>
            
    <UpgradeBox 
        typeName = "score" 
        :type = game.score
        :achievements = game.achievements 
        :makeAttempt="makeAttempt" 
        :maxIncreaseAutomation="maxIncreaseAutomation" 
        :maxDecreaseAutomation="maxDecreaseAutomation"
        :increaseAutomation="increaseAutomation" 
        :decreaseAutomation="decreaseAutomation"/>

    <UpgradeBox 
        v-if="this.game.global.prestigeLevel > 0" 
        typeName = "chance" 
        :type = game.chance 
        :achievements = game.achievements 
        :makeAttempt="makeAttempt" 
        :maxIncreaseAutomation="maxIncreaseAutomation" 
        :maxDecreaseAutomation="maxDecreaseAutomation"
        :increaseAutomation="increaseAutomation" 
        :decreaseAutomation="decreaseAutomation"/>

    <UpgradeBox 
        v-if="this.game.global.prestigeLevel > 1" 
        typeName = "critS" 
        :type = game.critS 
        :achievements = game.achievements  
        :makeAttempt="makeAttempt" 
        :maxIncreaseAutomation="maxIncreaseAutomation" 
        :maxDecreaseAutomation="maxDecreaseAutomation"
        :increaseAutomation="increaseAutomation" 
        :decreaseAutomation="decreaseAutomation"/>

    <UpgradeBox 
        v-if="this.game.global.prestigeLevel > 2" 
        typeName = "auto" 
        :type = game.auto 
        :achievements = game.achievements 
        :makeAttempt="makeAttempt" 
        :maxIncreaseAutomation="maxIncreaseAutomation" 
        :maxDecreaseAutomation="maxDecreaseAutomation"
        :increaseAutomation="increaseAutomation" 
        :decreaseAutomation="decreaseAutomation"/>

    <UpgradeBox 
        typeName = "prestige" 
        :type = game.prestige 
        :achievements = game.achievements 
        :makeAttempt="makeAttempt" 
        :maxIncreaseAutomation="maxIncreaseAutomation" 
        :maxDecreaseAutomation="maxDecreaseAutomation"
        :increaseAutomation="increaseAutomation" 
        :decreaseAutomation="decreaseAutomation"/>

        <button @click=resetGame()>Delete SaveFile</button>
    `,
    
};