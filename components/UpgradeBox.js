export default {
    name: 'UpgradeBox',
    components: {
    },
    data() {
        return {
            upgradeBox: 'upgradeBox',
            leftBox: 'leftBox',
            rightBox: 'rightBox'
        }
    },
    props: {
        typeName: String,
        type: Object,
        achievements: Object,
        makeAttempt: { type: Function },
        increaseAutomation: { type: Function },
        decreaseAutomation: { type: Function },
        maxIncreaseAutomation: { type: Function },
        maxDecreaseAutomation: { type: Function },
    },
    methods: {
        transformName(typeName) {
            /*if (typeName == "chance") {
                return "Increase Chance"
            }*/

            const words = typeName.split(" ")

            for (var i = 0; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
            }

            const output = words.join(" ")
            
            return output
        }
    },
    template: /*html*/`
    <div :class="upgradeBox">
        <div :class="leftBox">
            <button @click=makeAttempt(typeName)>{{ transformName(typeName) }}</button>
            <span> Cost: {{ type.cost }}</span>
            <p>Success Chance: {{ type.chance }}% <br><br>
                Critical Success Chance: {{ type.critS }}% <span class="tooltip" :data-tooltip="type.tooltipS">?</span> <br><br>
                Critical Failure Chance: {{ type.critFail }}% <span class="tooltip" :data-tooltip="type.tooltipF">?</span> </p>
        </div>
        <div :class="rightBox">
            <button v-if="achievements.autoTakeOver" @click=maxDecreaseAutomation(typeName)> -- </button>
            <button @click=decreaseAutomation(typeName)> - </button>
            <span> Auto ({{ type.auto }}/{{ type.maxAuto }}) </span>
            <button @click=increaseAutomation(typeName)> + </button>
            <button v-if="achievements.autoTakeOver" @click=maxIncreaseAutomation(typeName)> ++ </button>
            <span class="tooltip" :data-tooltip="type.tooltip">?</span>
            <!--p>{{ type.auto }} autos active, {{type.maxAuto}} maximum</p-->
            <p></p>
            <span>Latest Attempt: </span>
            <span :class="type.successColouring">{{ type.successText }}</span>
            <p>Multiplier: {{ type.multi }}</p>
        </div>
    </div>
    `,
  };