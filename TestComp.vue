<script>
export default {
    props: {
        upgradeBox: 'upgradeBox',
    }
}
</script>

<template>
    <div :class="upgradeBox">
        <button @click=attemptIncrement()>Prestige</button>
    </div>
</template>

