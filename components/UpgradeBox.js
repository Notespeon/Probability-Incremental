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
        makeAttempt: { type: Function },
        increaseAutomation: { type: Function },
        decreaseAutomation: { type: Function }
    },
    methods: {
        transformName(typeName) {
            if (typeName == "chance") {
                return "Increase Chance"
            }

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
                Critical Success Chance: {{ type.critSuc }}% <br><br>
                Critical Failure Chance: {{ type.critFail }}%</p>
        </div>
        <div :class="rightBox">
            <button @click=decreaseAutomation(typeName)> - </button>
            <span> Auto </span>
            <button @click=increaseAutomation(typeName)> + </button>
            <p>{{ type.auto }} autos active, {{type.maxAuto}} maximum</p>
            <p></p>
            <span>Latest Attempt: </span>
            <span :class="type.successColouring">{{ type.successText }}</span>
        </div>
    </div>
    `,
  };