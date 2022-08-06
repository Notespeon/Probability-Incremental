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
        capitalise(typeName) {
            return typeName.charAt(0).toUpperCase() + typeName.slice(1);
        }
    },
    template: /*html*/`
    <div :class="upgradeBox">
        <div :class="leftBox">
            <button @click=makeAttempt(typeName)>{{ capitalise(typeName) }}</button>
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