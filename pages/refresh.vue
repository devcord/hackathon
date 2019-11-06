<template lang="pug">
    section
</template>

<script>
    export default {
        async mounted ( ) {
            const { user } = await this.$store.dispatch('login')
            console.log(user)
        }
    }
</script>
