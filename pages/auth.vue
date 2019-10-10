<template lang="pug">
    section
</template>

<script>
    export default {
        async mounted () {
            const { success, message } = await this.api('discord/code' + window.location.search)
            if (success) this.$router.replace('/')
            else console.error(message)
        }
    }
</script>
